export enum EAssets {
    ETH = 'Ethereum',
    DAI = 'DAI',
    USDT = 'USD Tether',
    USDC = 'USD Coin',
}

export type TAssetConfig = { decimals: number; coingeckiApiID: string };
export type TAssetConfigs = { [index in EAssets]: TAssetConfig };
