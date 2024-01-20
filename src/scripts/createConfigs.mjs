import * as fs from 'fs';
import * as lineReader from 'line-reader';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const FILES_TO_AVOID = ['_types.ts', '_index.ts'];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_SRC = __dirname.substring(0, __dirname.length - 8);
const PATH_CFG_CONTRACT_CONFIGS = PATH_SRC + '/config/contracts/addresses';
const PATH_CFG_CONTRACT_TYPES = PATH_SRC + '/config/contracts/_types.ts';
const PATH_CFG_CONTRACT_INDEX = PATH_SRC + '/config/contracts/_index.ts';

function extractObjName(path) {
    return new Promise((resolve, _) => {
        lineReader.eachLine(path, (line, last) => {
            if (line.includes('createContractConfig(')) {
                const objectName = line.split(' ')[1].split(':')[0];
                resolve(objectName);
            }
        });
    });
}

async function extractDataFromConfigs(pathToFiles, extractedDataArray) {
    const filesInDir = await fs.promises.readdir(pathToFiles);

    for (const file of filesInDir) {
        if (FILES_TO_AVOID.includes(file)) {
            continue;
        }

        const pathOfCurrentTsFile = pathToFiles + `/${file}`;

        if (path.extname(file) === '.ts') {
            const subDir = pathToFiles.split('/addresses')[1] ?? '';

            extractedDataArray.push({
                subDir: subDir.split('/')[1],
                symbol: file.split('.')[0],
                configPath: `./addresses${subDir}/${file.split('.')[0]}`,
                objName: await extractObjName(pathOfCurrentTsFile),
            });
        } else if (file === 'assets') {
            await extractDataFromConfigs(pathOfCurrentTsFile, extractedDataArray);
        }
    }
}

async function writeTypes(extractedDataArray) {
    const assetStructure = ['export enum EAssets {'];
    const contractStructure = ['export enum EContracts {'];

    for (const info of extractedDataArray) {
        switch (info.subDir) {
            case 'assets':
                assetStructure.push(`\t${info.symbol} = '${info.symbol}',`);
                break;
            default:
                contractStructure.push(`\t${info.symbol.toUpperCase()} = '${info.symbol.toUpperCase()}',`);
                break;
        }
    }

    assetStructure.push('}\n');
    contractStructure.push('}');

    await fs.promises.truncate(PATH_CFG_CONTRACT_TYPES, 0);
    await fs.promises.appendFile(
        PATH_CFG_CONTRACT_TYPES,
        [].concat(assetStructure, contractStructure).join('\n'),
        'utf-8',
    );
}

async function writeConfig(extractedDataArray) {
    const imports = [
        `import { EContracts, EAssets } from './_types';`,
        `import { loadContractConfig, loadAssetInfoConfig, createCGReverseAssetLookup } from '../utils';`,
    ];
    const contractConfigurationBlock = ['export function initConfigs(){'];

    for (const info of extractedDataArray) {
        const assetInfoAlias = `${info.symbol}_INFO`;
        const assetInfoImport = info.subDir === 'assets' ? `, { AssetInfo as ${assetInfoAlias} }` : '';

        imports.push(`import ${info.objName}${assetInfoImport} from '${info.configPath}';`);

        switch (info.subDir) {
            case 'assets':
                contractConfigurationBlock.push(`\tloadContractConfig(EAssets.${info.symbol}, ${info.objName});`);
                contractConfigurationBlock.push(`\tloadAssetInfoConfig(EAssets.${info.symbol}, ${assetInfoAlias})`);
                contractConfigurationBlock.push(` `);
                break;
            default:
                contractConfigurationBlock.push(
                    `\tloadContractConfig(EContracts.${info.symbol.toUpperCase()}, ${info.objName});`,
                );
                break;
        }
    }

    imports.push(` `);

    contractConfigurationBlock.push(` `);
    contractConfigurationBlock.push(`\tcreateCGReverseAssetLookup();`);
    contractConfigurationBlock.push(`}`);

    await fs.promises.truncate(PATH_CFG_CONTRACT_INDEX, 0);
    await fs.promises.appendFile(
        PATH_CFG_CONTRACT_INDEX,
        [].concat(imports, contractConfigurationBlock).join('\n'),
        'utf-8',
    );
}

async function main() {
    let extractedParsedConfigData = [];

    console.log(`Searching for configs in '${PATH_CFG_CONTRACT_CONFIGS}'...`);
    await extractDataFromConfigs(PATH_CFG_CONTRACT_CONFIGS, extractedParsedConfigData);

    console.log(`Generating types for configs...`);
    await writeTypes(extractedParsedConfigData);

    console.log(`Generating configs...`);
    await writeConfig(extractedParsedConfigData);

    console.log('Done!');
}

main();
