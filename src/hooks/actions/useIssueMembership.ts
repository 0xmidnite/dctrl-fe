import { EContracts } from '@/config/contracts/_types';
import { useAccount, useContractWrite } from 'wagmi';
import { useContractConfig } from '../useContractConfig';

export function useIssueMembership(name: string) {
    const { address } = useAccount();
    const minterCfg = useContractConfig(EContracts.MINTER);
    const action = useContractWrite({
        ...minterCfg,
        functionName: 'issueMembership',
        args: [address, name],
    });

    return action;
}
