import { EAssets } from '../contracts/configs/_types';

export type TAssetConfig = { decimals: number; coingeckiApiID: string };
export type TAssetConfigs = { [index in EAssets]: TAssetConfig };
