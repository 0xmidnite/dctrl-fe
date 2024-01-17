import { EAssets } from '../contracts/cfgs/_types';

export type TAssetConfig = { decimals: number; coingeckiApiID: string };
export type TAssetConfigs = { [index in EAssets]: TAssetConfig };
