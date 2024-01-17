import { EAssets } from '@/config/contracts/assets';
import { EContracts } from '@/config/contracts/contracts';
import { ENetworks, TAddressString } from '@/config/contracts/types';
import { getContractConfig } from '@/config/helper';
import { useNetwork } from 'wagmi';

export function useContractConfig(ct: EContracts | EAssets): {
  abi: any;
  address: TAddressString;
} {
  const { chain } = useNetwork();
  const network = (chain?.name ?? ENetworks.ETHEREUM_MAINNET) as ENetworks;

  return getContractConfig(ct, network);
}
