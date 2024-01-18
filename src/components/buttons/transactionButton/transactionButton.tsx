import { SwitchFadingContainer } from '@/components/containers/switchFade';
import { EAssets } from '@/config/contracts/assets';
import { EContracts } from '@/config/contracts/_index';
import { useAllowance } from '@/hooks/data/useAllowance';
import { useApproveAction } from '@/hooks/actions/useApprove';
import { Box, Button, ButtonProps, CircularProgress, Stack, SxProps, Typography } from '@mui/material';
import { Check, X } from '@phosphor-icons/react';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useAccount, useNetwork } from 'wagmi';

type TransationStatus = 'idle' | 'error' | 'loading' | 'success';

interface ITransactionButton {
    asset: EAssets;
    allowanceProps?: {
        spender?: EContracts | EAssets;
        userInput?: bigint;
    };
    disabled?: boolean;
    sx?: SxProps;
    children?: ReactNode;
    onClick?: () => any;
    status?: TransationStatus;
    ButtonProps?: ButtonProps;
}

export const TransactionButton: FC<ITransactionButton> = ({
    asset,
    children,
    disabled = false,
    allowanceProps,
    sx,
    onClick,
    status = 'idle',
    ButtonProps,
}) => {
    const { chain } = useNetwork();
    const { isConnected } = useAccount();
    let resetTimeout: NodeJS.Timeout;
    const [txStatus, setTxStatus] = useState<TransationStatus>('idle');
    const allowance = useAllowance(asset, allowanceProps?.spender ?? EAssets.ETH);
    const approve = useApproveAction({
        asset,
        spender: allowanceProps?.spender,
        userInput: allowanceProps?.userInput,
    });

    const usingAllowance = !!allowanceProps;

    const hasEnoughAllowance: boolean =
        ((allowance.data as any) ?? BigInt(0)) >= (allowanceProps?.userInput ?? BigInt(0));

    useEffect(() => {
        const currentStatus = !usingAllowance || hasEnoughAllowance ? status : approve.status;

        setTxStatus(currentStatus);

        if (['success', 'error'].includes(currentStatus)) {
            resetTimeout = setTimeout(() => {
                setTxStatus('idle');
            }, 5000);
        }

        return () => clearTimeout(resetTimeout);
    }, [status, approve.status]);

    function pickStatus() {
        switch (txStatus) {
            default:
                if (usingAllowance && !hasEnoughAllowance && txStatus === 'idle') {
                    return 1;
                }

                return 0;
            case 'loading':
                return 2;
            case 'success':
                return 3;
            case 'error':
                return 4;
        }
    }

    return (
        <Button
            {...ButtonProps}
            disabled={disabled || chain?.unsupported || !isConnected}
            sx={sx}
            onClick={async () => {
                if (usingAllowance && !hasEnoughAllowance && approve.writeAsync) {
                    await approve.writeAsync();
                } else {
                    if (onClick) {
                        await onClick();
                        console.log('afterTx');
                    }
                }
            }}
            fullWidth>
            <SwitchFadingContainer doWidthAnimation showIndex={pickStatus()}>
                <Box>{children}</Box>

                <Typography width={110}>Approve {asset}</Typography>

                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                    <Typography>Sending</Typography>
                    <CircularProgress size={17} color="secondary" />
                </Stack>

                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                    <Typography>Success</Typography>
                    <Check size={18} color={'#00c809'} />
                </Stack>

                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                    <Typography>Failed</Typography>
                    <X size={18} color="#d50000" />
                </Stack>
            </SwitchFadingContainer>
        </Button>
    );
};
