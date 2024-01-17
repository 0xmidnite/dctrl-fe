import { EAssets } from '@/config/contracts/assets';
import { EContracts } from '@/config/contracts/_index';
import { useContractWrite } from 'wagmi';
import { useContractConfig } from './useContractConfig';

export function useApproveAction({
    asset,
    spender = EAssets.ETH,
    userInput = BigInt(0),
    callback,
}: {
    asset: EAssets;
    spender?: EContracts | EAssets;
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
