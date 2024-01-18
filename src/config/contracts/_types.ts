///<reference path="../wagmi.ts"/>
import { ENetworks } from '../wagmi';
import { EAssets, EContracts } from './configs/_types';

export type TContractConfig = { [index in ENetworks]: TContractConfigData };

export type TContractsTypes = EContracts | EAssets;

export type TAddress = `0x${string}`;

export type TContractConfigData = { abi: any; address: TAddress };

export type TContracts = {
    [index in ENetworks]?: {
        [index in TContractsTypes]?: TContractConfigData;
    };
};
