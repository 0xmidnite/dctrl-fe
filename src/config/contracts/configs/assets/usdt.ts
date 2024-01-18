import { createContractConfigData } from '@/config/helper';
import { ENetworks } from '@/config/wagmi';
import { erc20ABI } from 'wagmi';
import { TContractConfig } from '../../_types';

const CONTRACT_USDT_CONFIG: TContractConfig = createContractConfigData(erc20ABI, {
    [ENetworks.ETHEREUM_MAINNET]: '0x0',
    [ENetworks.ARBITRUM]: '0x0',
    [ENetworks.POLYGON]: '0x0',
    [ENetworks.OPTIMISM]: '0x0',
    [ENetworks.LOCALHOST]: '0x0',
});

export default CONTRACT_USDT_CONFIG;
