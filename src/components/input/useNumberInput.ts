import React from 'react';

import { formatUnits, parseUnits } from 'viem';
import { InputArgs, InputReturn, IValidationResponse } from './types';
import { getAssetConfig } from '@/config/utils';

export const MAX_INPUT_LENGTH = 10;

const defaultErrorStatus = { error: false };

export const useNumberInput = ({
    validate,
    initialValue,
    asset,
    initialValidation = defaultErrorStatus,
    defaultMax = 10 ** 12,
}: InputArgs<bigint>): InputReturn<bigint> => {
    const [validationResponse, setValidationResponse] = React.useState<IValidationResponse>(initialValidation);

    const [realValue, setRealValue] = React.useState<bigint>(BigInt(initialValue ?? 0));

    const [value, setValue] = React.useState<number | undefined>(initialValue);

    const decimals = getAssetConfig(asset).decimals;

    const reset = () => {
        setValue(initialValue ?? 0);
        setRealValue(BigInt(initialValue ?? 0));
        setValidationResponse(initialValidation);
    };

    return {
        value,
        realValue,
        validationResponse,
        triggerValidation: () => {
            setValidationResponse(validate(realValue));
        },
        setValue: (value?: number) => {
            const realVal = value === undefined ? BigInt(0) : parseUnits(`${Math.min(defaultMax, value)}`, decimals);

            setRealValue(realVal);
            setValue(value === undefined ? undefined : Math.min(defaultMax, Math.round(value * 10 ** 6) / 10 ** 6));
            setValidationResponse(validate(realVal));
        },
        setRealValue: (realValue: bigint) => {
            const displayValue = Number(formatUnits(realValue, decimals));

            setRealValue(realValue);
            setValue(Math.round(displayValue * 10 ** 6) / 10 ** 6);
            setValidationResponse(validate(realValue));
        },
        setValidationResponse,
        reset,
    };
};
