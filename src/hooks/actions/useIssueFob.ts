import { EContracts } from '@/config/contracts/_types';
import { useAccount, useContractWrite, useWaitForTransaction } from 'wagmi';
import { useContractConfig } from '../useContractConfig';
import { useMinterData } from '../data/useMinterData';
import { encryptBigint } from '@/config/utils';

export function useIssueFob(fobNumber: bigint, days: number, onConfirmed?: () => void) {
    const { address } = useAccount();
    const { data: fobPricePerDay, isLoading } = useMinterData();
    const minterCfg = useContractConfig(EContracts.MINTER);

    const actualAmount = (fobPricePerDay as bigint) * BigInt(days);

    const action = useContractWrite({
        ...minterCfg,
        functionName: 'issueFob',
        args: [address, encryptBigint(fobNumber), days],
        value: actualAmount,
    });

    useWaitForTransaction({
        hash: action.data?.hash ?? '0x0',
        confirmations: 1,
        onReplaced: res => {
            onConfirmed ? onConfirmed() : null;
        },
    });

    return {
        ...action,
        writeAsync: async () => {
            if (isLoading) {
                return;
            }

            await action.writeAsync();
        },
    };
}
