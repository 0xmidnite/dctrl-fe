import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { mainnet, arbitrum, polygon, optimism, localhost } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const pId = 'bf35b09683d0b3d926c76c6d3872d136';

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
    ETHEREUM_MAINNET = 'Ethereum',
    POLYGON = 'Polygon',
    ARBITRUM = 'Arbitrum One',
    OPTIMISM = 'OP Mainnet',
    LOCALHOST = 'Localhost',
}
