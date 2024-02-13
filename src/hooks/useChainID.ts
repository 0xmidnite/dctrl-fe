import { DEFAULT_NETWORK } from '@/config/app';
import { ENetworks } from '@/config/wagmi';
import { useNetwork } from 'wagmi';

export function useChainID() {
    const { chain } = useNetwork();
    const id = chain && !chain.unsupported ? (chain.id as ENetworks) : DEFAULT_NETWORK;

    return { chain: chain, id };
}
