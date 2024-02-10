import { useContractConfig } from '../useContractConfig';
import { useAccount, useContractRead } from 'wagmi';
import { EAssets, EContracts } from '@/config/contracts/_types';

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
