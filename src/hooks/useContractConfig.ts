import { EContracts, EAssets } from '@/config/contracts/cfgs/_types';
import { ENetworks, TAddress } from '@/config/contracts/_types';
import { getContractConfig } from '@/config/helper';
import {  } from 'wagmi';

export function useContractConfig(ct: EContracts | EAssets): {
    abi: any;
    address: TAddress;
} {
    const { chain } = useAccountEffect();
    const network = (chain?.name ?? ENetworks.ETHEREUM_MAINNET) as ENetworks;

    return getContractConfig(ct, network);
}
