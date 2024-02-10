import { Button, FormControl, Stack, TextField, TextFieldProps, Tooltip } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { IValidationResponse } from './types';
import { useStringInput } from './useStringInput';

interface NormalStringInputArgs {
    InputProps: TextFieldProps;
    rightAdornment?: {
        definedValue: string;
        buttonText: string;
    };
    toolTipText?: string;
    title: string;
    onInputChanged?: (val: string) => void;
    onValidationChanged?: (valid: boolean) => void;
    validation?: (v: string) => IValidationResponse;
}

export const NormalStringInput: FC<NormalStringInputArgs> = ({
    InputProps,
    rightAdornment,
    toolTipText = 'This be a tooltip.',
    onInputChanged,
    onValidationChanged,
    validation = v => ({ error: false }),
}) => {
    const input = useStringInput({
        validate: validation,
    });
    const [shrink, setShrink] = useState<boolean>(false);

    useEffect(() => {
        onInputChanged ? onInputChanged(input.value ?? '') : null;
        if (input.value !== undefined) setShrink(true);
    }, [input.value]);

    useEffect(() => {
        onValidationChanged ? onValidationChanged(!input.validationResponse.error) : null;
    }, [input.validationResponse]);

    return (
        <FormControl sx={{ width: '100%' }}>
            <TextField
                {...InputProps}
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
                    input.setValue(e.target.value);
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
                    endAdornment: rightAdornment ? (
                        <Stack direction={'row'} sx={{ mr: -1.8 }}>
                            {InputProps.InputProps?.endAdornment}
                            <Tooltip title={toolTipText}>
                                <Button
                                    sx={{ height: 56 }}
                                    variant="contained"
                                    onClick={() => input.setValue(rightAdornment.definedValue)}>
                                    {rightAdornment.buttonText}
                                </Button>
                            </Tooltip>
                        </Stack>
                    ) : undefined,
                }}
            />
        </FormControl>
    );
};
