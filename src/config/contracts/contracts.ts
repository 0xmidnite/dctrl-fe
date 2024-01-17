import { ENetworks, TContracts } from './types';
import { ETHEREUM_CONTRACTS } from './contractsByNet/ethereum';
import { ARBITRUM_CONTRACTS } from './contractsByNet/arbitrum';
import { POLYGON_CONTRACTS } from './contractsByNet/polygon';

export enum EContracts {
    MEMBERSHIP_MANAGER,
}

export const CONTRACT_CONFIG: TContracts = {
    [ENetworks.ETHEREUM_MAINNET]: ETHEREUM_CONTRACTS,
    [ENetworks.ARBITRUM]: ARBITRUM_CONTRACTS,
    [ENetworks.POLYGON]: POLYGON_CONTRACTS,
};
