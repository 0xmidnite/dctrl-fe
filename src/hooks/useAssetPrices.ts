import { ASSET_CONFIG, EAssets } from '@/config/contracts/assets';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { useNetwork } from 'wagmi';

export function useAssetPrices() {
    const { chain } = useNetwork();

    const query = useQuery({
        queryKey: [chain?.name ?? 'Ethereum', 'assetPrices'],
        queryFn: async () => {
            const ids = Object.values(EAssets)
                .map(asset => {
                    ASSET_CONFIG[asset].coingeckoApiID;
                })
                .reduce((acc, id) => acc.concat(`${id},`), '');

            const req = await axios.get(
                'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
            );

            return req;
        },
    });

    const formattedData = query.data?.data.reduce((acc: any, asset: any) => {
        console.log(asset);
    }, {});

    return query;
}
