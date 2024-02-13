import { useContractRead } from 'wagmi';
import { useContractConfig } from '../useContractConfig';
import { EContracts } from '@/config/contracts/_types';

export function useMinterData() {
    const minterConfig = useContractConfig(EContracts.MINTER);

    const fobDailyPrice = useContractRead({
        ...minterConfig,
        functionName: 'fobDaily',
    });

    return { ...fobDailyPrice, data: fobDailyPrice.data ? fobDailyPrice.data : BigInt(0) };
}
