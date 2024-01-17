import { ENetworks, TContractConfig } from '../../_types';

const CONTRACT_DAI_CONFIG: TContractConfig = {
    [ENetworks.ETHEREUM_MAINNET]: { abi: {}, address: '0x0' },
    [ENetworks.ARBITRUM]: { abi: {}, address: '0x0' },
    [ENetworks.POLYGON]: { abi: {}, address: '0x0' },
};

export default CONTRACT_DAI_CONFIG;
