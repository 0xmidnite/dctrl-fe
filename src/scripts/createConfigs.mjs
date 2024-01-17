import * as fs from 'fs';
import * as lineReader from 'line-reader';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const FILES_TO_AVOID = ['_types.ts', '_index.ts'];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_SRC = __dirname.substring(0, __dirname.length - 8);
const PATH_CFG_CONTRACT_CONFIGS = PATH_SRC + '/config/contracts/cfgs';
const PATH_CFG_CONTRACT_TYPES = PATH_SRC + '/config/contracts/cfgs/_types.ts';
const PATH_CFG_CONTRACT_INDEX = PATH_SRC + '/config/contracts/cfgs/_index.ts';
let extractedParsedInfo = [];

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

async function extractDataFromConfigs(pathToFiles) {
    const filesInDir = await fs.promises.readdir(pathToFiles);

    for (const file of filesInDir) {
        const pathOfCurrentFile = pathToFiles + `/${file}`;

        if (FILES_TO_AVOID.includes(file)) {
            continue;
        }

        if (path.extname(file) === '.ts') {
            const subDir = pathToFiles.split('/cfgs')[1] ?? '';

            extractedParsedInfo.push({
                subDir: subDir.split('/')[1],
                symbol: file.split('.')[0].toUpperCase(),
                configPath: `.${subDir}/${file.split('.')[0]}`,
                objName: await extractInfoFromLine(pathOfCurrentFile),
            });
        } else if (file === 'assets') {
            extractedParsedInfo.concat(await extractDataFromConfigs(pathOfCurrentFile));
        }
    }
}

async function writeTypes() {
    const assetStructure = ['export enum EAssets {'];
    const contractStructure = ['export enum EContracts {'];

    for (const info of extractedParsedInfo) {
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

async function writeConfig() {
    const imports = [`import { EContracts, EAssets } from './types';`, `import { createContractCfg } from "../index";`];
    const contractCreate = [];

    for (const info of extractedParsedInfo) {
        imports.push(`import ${info.objName} from '${info.configPath}';`);

        switch (info.subDir) {
            case 'assets':
                contractCreate.push(`createContractCfg(EAssets.${info.contract}, ${info.objName});`);
                break;
            default:
                contractCreate.push(`createContractCfg(EContracts.${info.contract}, ${info.objName});`);
                break;
        }
    }

    imports.push(` `);

    await fs.promises.truncate(PATH_CFG_CONTRACT_INDEX, 0);
    await fs.promises.appendFile(PATH_CFG_CONTRACT_INDEX, [].concat(imports, contractCreate).join('\n'), 'utf-8');
}

async function main() {
    console.log(`Searching for configs in '${PATH_CFG_CONTRACT_CONFIGS}'...`);
    await extractDataFromConfigs(PATH_CFG_CONTRACT_CONFIGS);

    console.log(`Generating types for configs...`);
    await writeTypes();

    console.log(`Generating configs...`);
    await writeConfig();

    console.log('Done!');
}

main();
