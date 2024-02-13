import { EContracts } from '@/config/contracts/_types';
import { useContractConfig } from '../useContractConfig';
import { useContractWrite, useWaitForTransaction } from 'wagmi';
import { TAddress } from '@/config/_types';
import { encryptBigint } from '@/config/utils';
import { useMinterData } from '../data/useMinterData';
import { useFobKeyList } from '../data/useFobKeyList';

export function useRenewFob(fobNumber: bigint, days: number, onConfirmed?: () => void) {
    const minterConfig = useContractConfig(EContracts.MINTER);
    const fobData = useFobKeyList();
    const etherPerDay = useMinterData();

    const renew = useContractWrite({
        ...minterConfig,
        functionName: 'extendFob',
        args: [encryptBigint(fobNumber), BigInt(days)],
        value: (etherPerDay.data as bigint) * BigInt(days),
    });

    useWaitForTransaction({
        hash: renew.data?.hash ?? '0x0',
        confirmations: 1,
        onReplaced: async res => {
            onConfirmed ? onConfirmed() : null;
            await fobData.refetch();
            await etherPerDay.refetch();
        },
    });

    return renew;
}
