import { ASSET_CONFIG } from '@/config/assets/_index';
import { EAssets } from '@/config/contracts/configs/_types';
import { getAssetFromCGID } from '@/config/helper';
import { ENetworks } from '@/config/wagmi';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNetwork } from 'wagmi';

export function useAssetPrices() {
    const { chain } = useNetwork();

    const query = useQuery({
        queryKey: [chain?.name ?? ENetworks.ETHEREUM_MAINNET, 'assetPrices'],
        queryFn: async () => {
            const ids = Object.values(EAssets)
                .map(asset => ASSET_CONFIG[asset].coingeckoApiID)
                .reduce((acc, id, index) => `${acc}${index !== 0 ? ',' : ''}${id}`, '');

            const req = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`);

            return Object.entries(req.data).reduce(
                (acc: any, entry: any) => ({
                    ...acc,
                    [getAssetFromCGID(entry[0])]: entry[1].usd,
                }),
                {},
            );
        },
    });

    return query;
}
