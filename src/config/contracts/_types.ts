import { EAssets, EContracts } from './cfgs/_types';

export enum ENetworks {
    ETHEREUM_MAINNET = 'Ethereum',
    POLYGON = 'Polygon',
    ARBITRUM = 'Arbitrum One',
}

export type TContractConfig = { [index in ENetworks]: TContractConfigData };

export type TContractsTypes = EContracts | EAssets;

export type TAddress = `0x${string}`;

export type TContractConfigData = { abi: any; address: TAddress };

export type TContracts = {
    [index in ENetworks]?: {
        [index in TContractsTypes]?: TContractConfigData;
    };
};
