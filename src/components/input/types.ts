import { EAssets } from '@/config/contracts/_types';

export interface IValidationResponse {
    error: boolean;
    helperText?: string;
    warning?: boolean;
}

export type ExtractedTypeFromRealValue<T> = T extends bigint ? number : string;

export interface InputArgs<T> {
    validate: (value: T) => IValidationResponse;
    asset: EAssets;
    initialValue?: ExtractedTypeFromRealValue<T>;
    initialValidation?: IValidationResponse;
    defaultMax?: ExtractedTypeFromRealValue<T>;
}

export interface InputReturn<T> {
    value: ExtractedTypeFromRealValue<T> | undefined;
    realValue: T;
    validationResponse: IValidationResponse;
    setValue: (value?: ExtractedTypeFromRealValue<T>) => void;
    setRealValue: (value: T) => void;
    triggerValidation: () => void;
    setValidationResponse: React.Dispatch<React.SetStateAction<IValidationResponse>>;
    reset: () => void;
}
