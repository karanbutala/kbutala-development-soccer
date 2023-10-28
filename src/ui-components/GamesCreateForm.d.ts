/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GamesCreateFormInputValues = {
    gameName?: string;
    gameLocation?: string;
    gameTimestamp?: number;
    gamePlayersCount?: number;
};
export declare type GamesCreateFormValidationValues = {
    gameName?: ValidationFunction<string>;
    gameLocation?: ValidationFunction<string>;
    gameTimestamp?: ValidationFunction<number>;
    gamePlayersCount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GamesCreateFormOverridesProps = {
    GamesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    gameName?: PrimitiveOverrideProps<TextFieldProps>;
    gameLocation?: PrimitiveOverrideProps<TextFieldProps>;
    gameTimestamp?: PrimitiveOverrideProps<TextFieldProps>;
    gamePlayersCount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GamesCreateFormProps = React.PropsWithChildren<{
    overrides?: GamesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GamesCreateFormInputValues) => GamesCreateFormInputValues;
    onSuccess?: (fields: GamesCreateFormInputValues) => void;
    onError?: (fields: GamesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GamesCreateFormInputValues) => GamesCreateFormInputValues;
    onValidate?: GamesCreateFormValidationValues;
} & React.CSSProperties>;
export default function GamesCreateForm(props: GamesCreateFormProps): React.ReactElement;
