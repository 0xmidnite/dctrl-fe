import { EAssets } from '@/config/contracts/_types';
import { TContractsTypes } from '@/config/_types';
import { useContractWrite } from 'wagmi';
import { useContractConfig } from '../useContractConfig';

export function useApproveAction({
    asset,
    spender = EAssets.ETH,
    userInput = BigInt(0),
    callback,
}: {
    asset: EAssets;
    spender?: TContractsTypes;
    userInput?: bigint;
    callback?: () => void;
}) {
    const assetConfig = useContractConfig(asset);
    const spenderConfig = useContractConfig(spender ?? EAssets.ETH);

    return useContractWrite({
        ...assetConfig,
        functionName: 'approve',
        args: [spenderConfig.address, userInput + BigInt(10 ** 18)],
        onSuccess: callback,
    });
}
