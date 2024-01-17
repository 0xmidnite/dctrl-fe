import * as fs from 'fs';
import * as lineReader from 'line-reader';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const FILES_TO_AVOID = ['_types.ts', '_index.ts'];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_SRC = __dirname.substring(0, __dirname.length - 8);
const PATH_CFG_CONTRACT_CONFIGS = PATH_SRC + '/config/contracts/configs';
const PATH_CFG_CONTRACT_TYPES = PATH_SRC + '/config/contracts/configs/_types.ts';
const PATH_CFG_CONTRACT_INDEX = PATH_SRC + '/config/contracts/configs/_index.ts';

function extractInfoFromLine(path) {
    return new Promise((resolve, _) => {
        lineReader.eachLine(path, (line, last) => {
            if (line.includes('const')) {
                const objectName = line.split(' ')[1].split(':')[0];
                resolve(objectName);
            }
        });
    });
}

async function extractDataFromConfigs(pathToFiles, extractedDataArray) {
    const filesInDir = await fs.promises.readdir(pathToFiles);

    for (const file of filesInDir) {
        const pathOfCurrentFile = pathToFiles + `/${file}`;

        if (FILES_TO_AVOID.includes(file)) {
            continue;
        }

        if (path.extname(file) === '.ts') {
            const subDir = pathToFiles.split('/configs')[1] ?? '';

            extractedDataArray.push({
                subDir: subDir.split('/')[1],
                symbol: file.split('.')[0].toUpperCase(),
                configPath: `.${subDir}/${file.split('.')[0]}`,
                objName: await extractInfoFromLine(pathOfCurrentFile),
            });
        } else if (file === 'assets') {
            extractedDataArray.concat(await extractDataFromConfigs(pathOfCurrentFile, extractedDataArray));
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
                contractStructure.push(`\t${info.symbol} = '${info.symbol}',`);
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
        `import { createContractCfg } from "../_index";`,
    ];
    const contractCreate = [];

    for (const info of extractedDataArray) {
        imports.push(`import ${info.objName} from '${info.configPath}';`);

        switch (info.subDir) {
            case 'assets':
                contractCreate.push(`createContractCfg(EAssets.${info.symbol}, ${info.objName});`);
                break;
            default:
                contractCreate.push(`createContractCfg(EContracts.${info.symbol}, ${info.objName});`);
                break;
        }
    }

    imports.push(` `);

    await fs.promises.truncate(PATH_CFG_CONTRACT_INDEX, 0);
    await fs.promises.appendFile(PATH_CFG_CONTRACT_INDEX, [].concat(imports, contractCreate).join('\n'), 'utf-8');
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
