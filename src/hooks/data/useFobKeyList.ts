import { COVALENT_CLIENT } from '@/config/app';
import { useQuery } from '@tanstack/react-query';
import { useAccount } from 'wagmi';
import { useChainID } from '../useChainID';
import { useContractConfig } from '../useContractConfig';
import { EContracts } from '@/config/contracts/_types';
import { NftData } from '@covalenthq/client-sdk';

export function useFobKeyList() {
    const { address } = useAccount();
    const { id } = useChainID();
    const fobConfig = useContractConfig(EContracts.FOB);

    const query = useQuery({
        queryKey: ['fob-key-list', address, id],
        queryFn: async () => {
            const resp = await COVALENT_CLIENT.NftService.getNftsForAddress('eth-sepolia', address ?? '0x0', {
                withUncached: true,
                noNftAssetMetadata: false,
            });

            let newFobs: NftData[] = [];

            for (let obj in resp.data.items) {
                if (resp.data.items[obj].contract_address === fobConfig.address) {
                    newFobs = resp.data.items[obj].nft_data;
                    break;
                }
            }

            return newFobs;
        },
    });

    return { ...query, data: query.data ? query.data : [] };
}
