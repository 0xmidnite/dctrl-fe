import { createCGReverseAssetLookup } from '../helper';

export enum EAssets {
    ETH = 'Ethereum',
    DAI = 'DAI',
    USDT = 'USD Tether',
    USDC = 'USD Coin',
}

export type TAssetConfig = { decimals: number; coingeckiApiID: string };
export type TAssetConfigs = { [index in EAssets]: TAssetConfig };

export const ASSET_CONFIG = {
    [EAssets.ETH]: {
        decimals: 18,
        coingeckoApiID: 'ethereum',
    },
    [EAssets.DAI]: {
        decimals: 18,
        coingeckoApiID: 'dai',
    },
    [EAssets.USDC]: {
        decimals: 18,
        coingeckoApiID: 'usd-coin',
    },
    [EAssets.USDT]: {
        decimals: 18,
        coingeckoApiID: 'tether',
    },
};

export const CG_REVERSE_ASSET_LOOKUP = createCGReverseAssetLookup();
