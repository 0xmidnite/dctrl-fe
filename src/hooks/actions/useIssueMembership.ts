import { EContracts } from '@/config/contracts/_types';
import { useAccount, useContractWrite, useWaitForTransaction } from 'wagmi';
import { useContractConfig } from '../useContractConfig';
import { useMembershipData } from '../data/useMembershipData';
import { useNameToId } from '../data/useNameToId';

export function useIssueMembership(name: string, onConfirmed: () => void) {
    const { address } = useAccount();
    const minterCfg = useContractConfig(EContracts.MINTER);
    const membership = useMembershipData();
    const { exists } = useNameToId(name);

    const action = useContractWrite({
        ...minterCfg,
        functionName: 'issueMembership',
        args: [address, name],
    });

    useWaitForTransaction({
        hash: action.data?.hash,
        confirmations: 1,
        onReplaced: async res => {
            onConfirmed ? onConfirmed() : null;
            await membership.refetch();
        },
    });

    return {
        ...action,
        writeAsync: async () => {
            if (exists || !membership.data || membership.isLoading) {
                return;
            }

            await action.writeAsync();
        },
    };
}
