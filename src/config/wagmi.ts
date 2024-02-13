import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { mainnet, arbitrum, polygon, optimism } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const pId = 'bf35b09683d0b3d926c76c6d3872d136';

const localhost = {
    id: 31337,
    name: 'Localhost',
    network: 'localhost',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['http://127.0.0.1:8545'],
        },
        public: {
            http: ['http://127.0.0.1:8545'],
        },
    },
};

export const { chains, publicClient } = configureChains(
    [mainnet, arbitrum, polygon, optimism, localhost],
    [publicProvider()],
);

const { connectors } = getDefaultWallets({
    appName: 'DCTRL',
    projectId: pId,
    chains,
});

export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
});

export enum ENetworks {
    ETHEREUM_MAINNET = 1,
    POLYGON = 137,
    ARBITRUM = 42161,
    OPTIMISM = 10,
    LOCALHOST = 31337,
}
