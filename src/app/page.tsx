'use client';
import '@rainbow-me/rainbowkit/styles.css';

import { Link } from '@mui/material';
import { useState } from 'react';
import { AppProviders } from '@/components/appProvider';
import { useAssetPrices } from '@/hooks/useAssetPrices';

export default function Home() {
  const asd = useAssetPrices();

  return (
    <main>
      <Link href={'/userProfile'}>Go to userProfile</Link>
    </main>
  );
}
