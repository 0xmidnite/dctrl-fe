'use client';
import { AppProviders } from '@/components/appProvider';
import { AppContainer } from '@/components/containers/appContainer';
import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { useMeasure } from 'react-use';

function RootLayout({ children }: { children: ReactNode }) {
    const [ref, { height }] = useMeasure();

    return (
        <html lang="en">
            <head></head>
            <body>
                <AppProviders>
                    <AppContainer minHeight={height}>
                        <Box ref={ref}>{children}</Box>
                    </AppContainer>
                </AppProviders>
            </body>
        </html>
    );
}

export default RootLayout;
