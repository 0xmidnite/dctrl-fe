import { CovalentClient } from '@covalenthq/client-sdk';
import { ENetworks } from './wagmi';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_REACT_APP_COVALENT_CLIENTID: string;
            NEXT_PUBLIC_SECRET_KEY: number;
        }
    }
}

export const COVALENT_CLIENT = new CovalentClient(process.env.NEXT_PUBLIC_REACT_APP_COVALENT_CLIENTID);

export const DEFAULT_NETWORK: ENetworks = ENetworks.OPTIMISM;
export const USE_SEPOLIA_PRE_V2 = true;

export const ASSET_CONFIG = {};
export const CONTRACT_CONFIG = {};
export const CG_REVERSE_ASSET_LOOKUP = {};
