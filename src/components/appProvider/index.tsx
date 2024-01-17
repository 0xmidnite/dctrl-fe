import { chains, wagmiConfig } from '@/config/wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { FC, ReactNode } from 'react';
import { WagmiConfig } from 'wagmi';
import ThemeRegistry from './themeRegistry';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const AppProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeRegistry>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ThemeRegistry>
  );
};
