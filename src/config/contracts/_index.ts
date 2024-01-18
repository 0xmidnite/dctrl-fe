import { ENetworks } from '@/config/wagmi';
import { initConfigs } from './configs/_index';
import { TContractsTypes, TContractConfig, TContracts } from './_types';

export const CONTRACT_CONFIG: TContracts = {};

export function loadContractCfg(
    contract: TContractsTypes,
    cfg: TContractConfig,
    masterConfig: TContracts = CONTRACT_CONFIG,
) {
    // console.log(`loadContractCfg(${contract},cfg`, cfg, `mstrCfg:`, masterConfig);
    for (const [key, value] of Object.entries(cfg)) {
        const network = key as any as ENetworks;
        masterConfig[network] = {
            ...masterConfig[network],
            [contract]: value,
        };
    }
}

initConfigs();

console.log('contract master config');
