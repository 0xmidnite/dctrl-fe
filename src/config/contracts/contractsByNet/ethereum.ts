import { erc20ABI } from 'wagmi';
import { EAssets } from '../../assets';
import { EContracts } from '../contracts';
import { TContractConfigs } from '../types';

export const ETHEREUM_CONTRACTS: TContractConfigs = {
    [EContracts.MEMBERSHIP_MANAGER]: {
        abi: {},
        address: '0x',
    },
    [EAssets.ETH]: { abi: erc20ABI, address: '0x' },
    [EAssets.DAI]: { abi: erc20ABI, address: '0x' },
    [EAssets.USDC]: { abi: erc20ABI, address: '0x' },
    [EAssets.USDT]: { abi: erc20ABI, address: '0x' },
};
