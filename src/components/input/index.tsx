import { Button, FormControl, Stack, TextField, TextFieldProps, Tooltip } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNumberInput } from './useNumberInput';
import { IValidationResponse } from './types';
import { useAccount, useBalance } from 'wagmi';
import numbro from 'numbro';
import { EAssets } from '@/config/contracts/_types';
import { useContractConfig } from '@/hooks/useContractConfig';

type TToolTipValueTypes = 'deposit' | 'balance';

export const NormalNumberInput: FC<{
    InputProps: TextFieldProps;
    asset: EAssets;
    showMax?: boolean;
    maxValue?: bigint;
    tooltipValueType?: TToolTipValueTypes;
    onInputChanged?: (val: number, realVal: bigint) => void;
    onValidationChanged?: (valid: boolean) => void;
    validation?: (v: bigint) => IValidationResponse;
}> = ({
    InputProps,
    asset,
    showMax,
    maxValue,
    tooltipValueType = 'Balance',
    onInputChanged,
    onValidationChanged,
    validation = v => ({ error: false }),
}) => {
    const { address } = useAccount();
    const assetConfig = useContractConfig(asset);
    const input = useNumberInput({
        validate: validation,
        asset,
    });
    const [shrink, setShrink] = useState<boolean>(false);
    const userAssetBalance = useBalance({
        address,
        token: assetConfig.address,
        watch: true,
    });

    const maxVal = maxValue !== undefined ? maxValue : userAssetBalance.data?.value ?? BigInt(0);

    const displayBalance = () => {
        const maxValFormatted = Number(maxVal) / 10 ** 18;
        if (isNaN(maxValFormatted)) {
            return 0;
        }
        return Number(maxValFormatted);
    };

    useEffect(() => {
        onInputChanged ? onInputChanged(input.value ?? 0, input.realValue) : null;
        if (input.value !== undefined) setShrink(true);
    }, [input.realValue, input.value]);

    useEffect(() => {
        onValidationChanged ? onValidationChanged(!input.validationResponse.error) : null;
    }, [input.validationResponse]);

    useEffect(() => {
        input.reset();
    }, [asset]);

    return (
        <FormControl sx={{ width: '100%' }}>
            <TextField
                {...InputProps}
                type="number"
                sx={{
                    'input::-webkit-outer-spin-button,input::-webkit-inner-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0,
                    },
                    'input[type=number]': {
                        MozAppearance: 'textfield',
                    },
                }}
                onChange={e => {
                    const val = Number(e.target.value);
                    input.setValue(isNaN(val) || val === undefined ? 0 : val);
                }}
                error={input.validationResponse.error}
                helperText={input.validationResponse.helperText}
                onFocus={() => setShrink(true)}
                onBlur={e => setShrink(!!e.target.value)}
                value={input.value}
                InputLabelProps={{
                    shrink,
                }}
                InputProps={{
                    ...InputProps.InputProps,
                    endAdornment: showMax ? (
                        <Stack direction={'row'} sx={{ mr: -1.8 }}>
                            {InputProps.InputProps?.endAdornment}
                            <Tooltip
                                title={`Your ${asset} ${tooltipValueType}: ${numbro(displayBalance()).format({
                                    thousandSeparated: true,
                                    mantissa: 5,
                                })}`}>
                                <Button
                                    sx={{ height: 56 }}
                                    variant="contained"
                                    onClick={() => input.setRealValue(maxVal)}>
                                    MAX
                                </Button>
                            </Tooltip>
                        </Stack>
                    ) : undefined,
                }}
            />
        </FormControl>
    );
};
