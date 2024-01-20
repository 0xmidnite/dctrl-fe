import { TContractConfig } from '../../_types';
import FobNFT from '../abis/FobNFT.json';
import { ENetworks } from '@/config/wagmi';
import { createContractConfig } from '@/config/utils';

const CONTRACT_FOB_NFT_CONFIG: TContractConfig = createContractConfig(FobNFT.abi, {
    [ENetworks.ETHEREUM_MAINNET]: '0x0',
    [ENetworks.ARBITRUM]: '0x0',
    [ENetworks.POLYGON]: '0x0',
    [ENetworks.OPTIMISM]: '0x0',
    [ENetworks.LOCALHOST]: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
});

export default CONTRACT_FOB_NFT_CONFIG;
