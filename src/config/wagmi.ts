import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { mainnet, arbitrum, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const pId = 'bf35b09683d0b3d926c76c6d3872d136';

export const { chains, publicClient } = configureChains([mainnet, arbitrum, polygon], [publicProvider()]);

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
