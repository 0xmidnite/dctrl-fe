///<reference path="./wagmi.ts"/>
import { EAssets, EContracts } from './contracts/_types';
import { ENetworks } from './wagmi';

export type TAssetInfo = { decimals: number; coingeckoApiID: string };

export type TAssetConfigs = { [index in EAssets]?: TAssetInfo };

export type TContractConfig = { [index in ENetworks]: TContract };

export type TContractsTypes = EContracts | EAssets;

export type TAddress = `0x${string}`;

export type TContract = { abi: any; address: TAddress };

export type TContracts = {
    [index in ENetworks]?: {
        [index in TContractsTypes]?: TContract;
    };
};
