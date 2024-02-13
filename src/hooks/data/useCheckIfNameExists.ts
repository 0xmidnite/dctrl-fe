import { EContracts } from '@/config/contracts/_types';
import { useContractConfig } from '../useContractConfig';
import { useContractRead } from 'wagmi';

export function useNameToId(name: string) {
    const membershipConfig = useContractConfig(EContracts.MEMBERSHIP);

    const id = useContractRead({ ...membershipConfig, functionName: 'nameToId', args: [name] });
    const exists = id.data && (id.data as any).toString() === '0';

    return { ...id, data: id.data ?? '0', exists };
}
