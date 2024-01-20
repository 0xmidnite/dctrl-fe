import { TContract, TContractsTypes } from '@/config/_types';
import { getContractConfig } from '@/config/utils';
import { ENetworks } from '@/config/wagmi';
import { useNetwork } from 'wagmi';

export function useContractConfig(ct: TContractsTypes): TContract {
    const { chain } = useNetwork();
    const network = (chain?.name ?? ENetworks.ETHEREUM_MAINNET) as ENetworks;

    return getContractConfig(network, ct);
}
