import { ENetworks } from './wagmi';
import { EAssets } from './contracts/_types';
import { CONTRACT_CONFIG, CG_REVERSE_ASSET_LOOKUP, ASSET_CONFIG } from './app';
import { TAddress, TAssetConfigs, TAssetInfo, TContractConfig, TContracts, TContractsTypes } from './_types';

export function loadAssetInfoConfig(asset: EAssets, config: TAssetInfo, masterConfig: TAssetConfigs = ASSET_CONFIG) {
    Object.assign(masterConfig, { [asset]: config });
}

export function loadContractConfig(
    contract: TContractsTypes,
    cfg: TContractConfig,
    masterConfig: TContracts = CONTRACT_CONFIG as TContracts,
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

export function createContractConfig(abi: any, config: { [index in ENetworks]: TAddress }) {
    return Object.values(ENetworks)
        .map(network => ({
            network,
            value: { abi, address: config[network] },
        }))
        .reduce((acc, pair) => ({ ...acc, [pair.network]: pair.value }), {} as TContractConfig);
}

export function createCGReverseAssetLookup() {
    Object.assign(
        CG_REVERSE_ASSET_LOOKUP,
        Object.values(EAssets)
            .map(asset => ({ [(ASSET_CONFIG as Required<TAssetConfigs>)[asset].coingeckoApiID]: asset }))
            .reduce((acc, lookup) => ({ ...acc, ...lookup }), {}),
    );
}

export function getContractConfig(network: ENetworks, indexer: TContractsTypes) {
    return (CONTRACT_CONFIG as Required<TContracts>)[network][indexer]!;
}

export function getAssetConfig(asset: EAssets) {
    return (ASSET_CONFIG as Required<TAssetConfigs>)[asset]!;
}

export function getAssetFromCGID(cgId: string) {
    return (CG_REVERSE_ASSET_LOOKUP as { [index: string]: EAssets })[cgId];
}
