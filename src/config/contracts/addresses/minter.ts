import { TContractConfig } from '../../_types';
import Minter from '../abis/Minter.json';
import { createContractConfig } from '@/config/utils';
import { ENetworks } from '@/config/wagmi';

const CONTRACT_MINTER_CONFIG: TContractConfig = createContractConfig(Minter.abi, {
    [ENetworks.ETHEREUM_MAINNET]: '0x0',
    [ENetworks.ARBITRUM]: '0x0',
    [ENetworks.POLYGON]: '0x0',
    [ENetworks.OPTIMISM]: '0x0',
    [ENetworks.LOCALHOST]: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
});

export default CONTRACT_MINTER_CONFIG;
