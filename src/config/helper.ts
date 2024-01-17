import { ASSET_CONFIG, EAssets } from './assets';
import { CONTRACT_CONFIG, EContracts } from './contracts/contracts';
import { ENetworks } from './contracts/types';

export function createCGReverseAssetLookup() {
    return Object.values(EAssets)
        .map(asset => ({ [ASSET_CONFIG[asset].coingeckoApiID]: asset }))
        .reduce((acc, lookup) => ({ ...acc, ...lookup }), {});
}

export function getContractConfig(indexer: EAssets | EContracts, network: ENetworks) {
    return CONTRACT_CONFIG[network][indexer];
}

export function coinGeckoIdToAssetSymbol(str: string) {}
