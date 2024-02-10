import { TContractConfig } from '../../_types';
import FobNFT from '../abis/FobNFT.json';
import { ENetworks } from '@/config/wagmi';
import { createContractConfig } from '@/config/utils';

const CONTRACT_FOB_NFT_CONFIG: TContractConfig = createContractConfig(FobNFT.abi, {
    [ENetworks.ETHEREUM_MAINNET]: '0x0',
    [ENetworks.ARBITRUM]: '0x0',
    [ENetworks.POLYGON]: '0x0',
    [ENetworks.OPTIMISM]: '0x0',
    [ENetworks.LOCALHOST]: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
});

export default CONTRACT_FOB_NFT_CONFIG;
