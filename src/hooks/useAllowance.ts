import { useAccount, useContractRead } from 'wagmi';
import { useContractConfig } from './useContractConfig';
import { EAssets } from '@/config/contracts/assets';
import { EContracts } from '@/config/contracts/contracts';

export function useAllowance(asset: EAssets, spender: EContracts | EAssets) {
  const { address } = useAccount();
  const assetConfig = useContractConfig(asset);
  const spenderConfig = useContractConfig(spender);

  const { data, refetch, isLoading, isSuccess } = useContractRead({
    address: assetConfig.address,
    abi: assetConfig.abi,
    functionName: 'allowance',
    args: [address, spenderConfig.address],
    watch: true,
  });

  return { data, refetch, isLoading, isSuccess };
}
