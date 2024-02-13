import { EAssets } from '@/config/contracts/_types';
import { TContractsTypes } from '@/config/_types';
import { useContractWrite, useWaitForTransaction } from 'wagmi';
import { useContractConfig } from '../useContractConfig';
import { useAllowance } from '../data/useAllowance';

export function useApproveAction({
    asset,
    spender = EAssets.ETH,
    userInput = BigInt(0),
    onConfirmed,
}: {
    asset: EAssets;
    spender?: TContractsTypes;
    userInput?: bigint;
    onConfirmed?: () => void;
}) {
    const allowance = useAllowance(asset, spender);
    const assetConfig = useContractConfig(asset);
    const spenderConfig = useContractConfig(spender ?? EAssets.ETH);

    const approve = useContractWrite({
        ...assetConfig,
        functionName: 'approve',
        args: [spenderConfig.address, userInput + BigInt(10 ** 18)],
    });

    useWaitForTransaction({
        hash: approve.data?.hash ?? '0x0',
        confirmations: 1,
        onReplaced: async res => {
            onConfirmed ? onConfirmed : null;
            await allowance.refetch();
        },
    });

    return approve;
}
