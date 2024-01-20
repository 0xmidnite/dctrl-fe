import { erc20ABI } from 'wagmi';
import { createContractConfig } from '@/config/utils';
import { ENetworks } from '@/config/wagmi';
import { TAssetInfo, TContractConfig } from '../../../_types';

export const AssetInfo: TAssetInfo = {
    decimals: 18,
    coingeckoApiID: 'dai',
};

const CONTRACT_DAI_CONFIG: TContractConfig = createContractConfig(erc20ABI, {
    [ENetworks.ETHEREUM_MAINNET]: '0x0',
    [ENetworks.ARBITRUM]: '0x0',
    [ENetworks.POLYGON]: '0x0',
    [ENetworks.OPTIMISM]: '0x0',
    [ENetworks.LOCALHOST]: '0x0',
});

export default CONTRACT_DAI_CONFIG;
