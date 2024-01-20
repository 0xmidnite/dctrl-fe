'use client';
import '@rainbow-me/rainbowkit/styles.css';

import { Link } from '@mui/material';
import { useAssetPrices } from '@/hooks/data/useAssetPrices';

export default function Home() {
    return (
        <main>
            <Link href={'/userProfile'}>Go to userProfile</Link>
        </main>
    );
}
