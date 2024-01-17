import { ASSET_CONFIG, CG_REVERSE_ASSET_LOOKUP } from './assets/_index';
import { EAssets } from './contracts/cfgs/_types';
import { CONTRACT_CONFIG } from './contracts/_index';
import { ENetworks, TContractsTypes } from './contracts/_types';

export function createCGReverseAssetLookup() {
    return Object.values(EAssets)
        .map(asset => ({ [ASSET_CONFIG[asset].coingeckoApiID]: asset }))
        .reduce((acc, lookup) => ({ ...acc, ...lookup }), {});
}

export function getContractConfig(network: ENetworks, indexer: TContractsTypes) {
    return CONTRACT_CONFIG[network]![indexer]!;
}

export function getAssetFromCGID(cgId: string) {
    return CG_REVERSE_ASSET_LOOKUP[cgId];
}
