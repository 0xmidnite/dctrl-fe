import { TContractConfig } from '../../_types';
import MembershipNFT from '../abis/MembershipNFT.json';
import { ENetworks } from '@/config/wagmi';
import { createContractConfig } from '@/config/utils';

const CONTRACT_MEMBERSHIP_NFT_CONFIG: TContractConfig = createContractConfig(MembershipNFT.abi, {
    [ENetworks.ETHEREUM_MAINNET]: '0x0',
    [ENetworks.ARBITRUM]: '0x0',
    [ENetworks.POLYGON]: '0x0',
    [ENetworks.OPTIMISM]: '0x0',
    [ENetworks.LOCALHOST]: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
});

export default CONTRACT_MEMBERSHIP_NFT_CONFIG;
