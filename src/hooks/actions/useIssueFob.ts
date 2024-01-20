import { EContracts } from '@/config/contracts/_types';
import { useAccount, useContractWrite } from 'wagmi';
import { useContractConfig } from '../useContractConfig';

export function useIssueFob(fobNumber: number, months: number) {
    const { address } = useAccount();
    const minterCfg = useContractConfig(EContracts.MINTER);
    const action = useContractWrite({
        ...minterCfg,
        functionName: 'issueFob',
        args: [address, fobNumber, months],
    });

    return action;
}
