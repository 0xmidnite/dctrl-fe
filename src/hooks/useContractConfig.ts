import { EContracts, EAssets } from '@/config/contracts/cfgs/_types';
import { ENetworks, TAddress, TContractsTypes } from '@/config/contracts/_types';
import { getContractConfig } from '@/config/helper';
import { useNetwork } from 'wagmi';

export function useContractConfig(ct: TContractsTypes): {
    abi: any;
    address: TAddress;
} {
    const { chain } = useNetwork();
    const network = (chain?.name ?? ENetworks.ETHEREUM_MAINNET) as ENetworks;

    return getContractConfig(network, ct);
}
