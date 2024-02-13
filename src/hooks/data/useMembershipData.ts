import { EContracts } from '@/config/contracts/_types';
import { CovalentClient, NftData } from '@covalenthq/client-sdk';
import { useQuery } from '@tanstack/react-query';
import { useAccount, useContractReads, useNetwork } from 'wagmi';
import { useContractConfig } from '../useContractConfig';
import { useMemo } from 'react';
import { COVALENT_CLIENT } from '@/config/app';

type TNFTMembership = {
    token_id: string;
    creation_date: string;
    name: string;
    addr6551: string;
};

export function useCovalentMembershipData() {
    const { chain } = useNetwork();
    const { address } = useAccount();

    const membershipConfig = useContractConfig(EContracts.MEMBERSHIP);
    const membershipAddress = membershipConfig.address.toLowerCase();

    const query = useQuery({
        queryKey: ['Covalent-Membership-Data', chain?.id],
        queryFn: async () => {
            let calls: any[] = [];

            try {
                const resp = await COVALENT_CLIENT.NftService.getNftsForAddress('eth-sepolia', address ?? '0x0', {
                    withUncached: true,
                });

                console.log(resp);

                // extract all NFTs in MembershipNFT from response
                let nftData: NftData[] = [];

                for (let obj in resp.data.items) {
                    if (resp.data.items[obj].contract_address.toLowerCase() === membershipAddress) {
                        nftData = resp.data.items[obj].nft_data;
                        break;
                    }
                }

                // Go through each token and format the data to be printed
                for (let token of nftData) {
                    calls.push([
                        {
                            ...membershipConfig,
                            functionName: 'idToMetadata',
                            args: [token.token_id],
                            tid: token.token_id,
                        },
                        {
                            ...membershipConfig,
                            functionName: 'getMembershipAddressById',
                            args: [token.token_id],
                            tid: token.token_id,
                        },
                    ]);
                }
            } catch (e) {
                console.log('Failed to retrieve from Covalent...', e);
            }

            return calls.flat();
        },
    });

    return query;
}

export function useMembershipData() {
    const nftCalls = useCovalentMembershipData();

    const nftData = useContractReads({
        contracts: nftCalls.data ?? [],
        enabled: nftCalls.data !== undefined && nftCalls.data.length > 0,
    });

    const memberships = useMemo(() => {
        let memberships: TNFTMembership[] = [];

        if (!nftData || !nftData.data || nftData.data?.length <= 0) {
            return [];
        }

        for (let i = 0; i < (nftData.data?.length ?? 0); i += 2) {
            const tokenId: number = nftCalls.data?.[i].tid ?? 0;
            const [creationDate, name] = nftData.data[i].result as [number, string];
            const addr6551 = nftData.data[i + 1].result as string;

            const date = new Date((creationDate ?? 0) * 1000);
            const dateString = date.toLocaleString();

            let data = {
                token_id: tokenId.toString(),
                creation_date: dateString,
                name: name,
                addr6551: addr6551,
            };

            memberships.push(data);
        }

        return memberships;
    }, [nftData.data]);

    return {
        ...nftData,
        data: memberships,
        refetch: async () => {
            await nftCalls.refetch();
            await nftData.refetch();
        },
    };
}
