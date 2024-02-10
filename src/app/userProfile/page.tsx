'use client';
import { TransactionButton } from '@/components/buttons/transactionButton/transactionButton';
import { NormalStringInput } from '@/components/input/stringInput';
import { CONTRACT_CONFIG } from '@/config/app';
import { EAssets } from '@/config/contracts/_types';
import { useIssueMembership } from '@/hooks/actions/useIssueMembership';
import { UserInfoContainer } from '@/layout/userProfile/userInfo';
import { Box, Stack, Typography } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from 'react';

export default function UserProfile() {
    const [name, setName] = useState<string>('');
    const issueMembership = useIssueMembership(name);

    return (
        <Box>
            <ConnectButton />

            <UserInfoContainer />

            <Stack direction={'row'}>
                <TransactionButton asset={EAssets.ETH} onClick={issueMembership.write} status={issueMembership.status}>
                    Issue Membership
                </TransactionButton>

                <NormalStringInput onInputChanged={v => setName(v)} InputProps={{}} title="Name" />
            </Stack>
            <Stack>
                <Typography>ID: {}</Typography>
                <Typography>Name: {name}</Typography>
            </Stack>
        </Box>
    );
}
