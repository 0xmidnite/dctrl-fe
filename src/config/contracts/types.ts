import { EAssets } from '../assets';
import { EContracts } from './contracts';

export enum ENetworks {
    ETHEREUM_MAINNET = 'Ethereum',
    POLYGON = 'Polygon',
    ARBITRUM = 'Arbitrum One',
}

export type TAddressString = `0x${string}`;

export type TContractConfigData = { abi: any; address: TAddressString };

export type TContractConfigs = { [index in EContracts | EAssets]: TContractConfigData };

export type TContracts = {
    [index in ENetworks]: TContractConfigs;
};
