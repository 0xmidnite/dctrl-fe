///<reference path="./wagmi.ts"/>
import { ENetworks } from './wagmi';
import { ASSET_CONFIG, CG_REVERSE_ASSET_LOOKUP } from './assets/_index';
import { EAssets } from './contracts/configs/_types';
import { CONTRACT_CONFIG } from './contracts/_index';
import { TAddress, TContractConfig, TContractsTypes } from './contracts/_types';

export function createContractConfigData(abi: any, config: { [index in ENetworks]: TAddress }) {
    return Object.values(ENetworks)
        .map(network => ({
            network,
            value: { abi, address: config[network] },
        }))
        .reduce((acc, pair) => ({ ...acc, [pair.network]: pair.value }), {} as TContractConfig);
}

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

console.log('helpers');
