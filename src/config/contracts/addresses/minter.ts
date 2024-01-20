import { TContractConfig } from '../../_types';
import Minter from '../abis/Minter.json';
import { createContractConfig } from '@/config/utils';
import { ENetworks } from '@/config/wagmi';

const CONTRACT_MINTER_CONFIG: TContractConfig = createContractConfig(Minter.abi, {
    [ENetworks.ETHEREUM_MAINNET]: '0x0',
    [ENetworks.ARBITRUM]: '0x0',
    [ENetworks.POLYGON]: '0x0',
    [ENetworks.OPTIMISM]: '0x0',
    [ENetworks.LOCALHOST]: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
});

export default CONTRACT_MINTER_CONFIG;
