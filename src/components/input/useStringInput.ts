import React from 'react';

import { InputArgs, InputReturn, IValidationResponse } from './types';

const defaultErrorStatus = { error: false };

type StringInputReturn = Omit<InputReturn<string>, 'setRealValue' | 'realValue'>;
type StringInputArgs = Omit<InputArgs<string>, 'asset' | 'defaultMax'>;

export const useStringInput = ({
    validate,
    initialValue,
    initialValidation = defaultErrorStatus,
}: StringInputArgs): StringInputReturn => {
    const [validationResponse, setValidationResponse] = React.useState<IValidationResponse>(initialValidation);

    const [value, setValue] = React.useState<string | undefined>(initialValue);

    const reset = () => {
        setValue(initialValue ?? '');
        setValidationResponse(initialValidation);
    };

    return {
        value,
        validationResponse,
        triggerValidation: () => {
            setValidationResponse(validate(value ?? ''));
        },
        setValue: (value?: string) => {
            setValue(value ?? '');
            setValidationResponse(validate(value ?? ''));
        },
        setValidationResponse,
        reset,
    };
};
