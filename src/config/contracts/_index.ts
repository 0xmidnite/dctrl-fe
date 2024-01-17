import { TContractsTypes, TContractConfig, ENetworks, TContracts } from './_types';

export function createContractCfg(contract: TContractsTypes, cfg: TContractConfig) {
    for (const [key, value] of Object.entries(cfg)) {
        const network = key as any as ENetworks;
        CONTRACT_CONFIG[network] = {
            ...CONTRACT_CONFIG[network],
            [contract]: value,
        };
    }
}

export const CONTRACT_CONFIG: TContracts = {};
