'use client';
import '@rainbow-me/rainbowkit/styles.css';

import { Link } from '@mui/material';
import { useAssetPrices } from '@/hooks/data/useAssetPrices';
import CONTRACT_MEMBERSHIP_NFT_CONFIG from '@/config/contracts/configs/membership';
import { CONTRACT_CONFIG } from '@/config/contracts/_index';

export default function Home() {
    const asd = useAssetPrices();
    console.log(asd, CONTRACT_CONFIG, CONTRACT_MEMBERSHIP_NFT_CONFIG);

    return (
        <main>
            <Link href={'/userProfile'}>Go to userProfile</Link>
        </main>
    );
}
