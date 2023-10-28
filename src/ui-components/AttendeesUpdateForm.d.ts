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
export declare type AttendeesUpdateFormInputValues = {
    attendeeNo?: number;
    attendeeFirstName?: string;
    attendeeLastName?: string;
    attendeeContact?: string;
    registrationTimestamp?: number;
};
export declare type AttendeesUpdateFormValidationValues = {
    attendeeNo?: ValidationFunction<number>;
    attendeeFirstName?: ValidationFunction<string>;
    attendeeLastName?: ValidationFunction<string>;
    attendeeContact?: ValidationFunction<string>;
    registrationTimestamp?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AttendeesUpdateFormOverridesProps = {
    AttendeesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    attendeeNo?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeFirstName?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeLastName?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeContact?: PrimitiveOverrideProps<TextFieldProps>;
    registrationTimestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AttendeesUpdateFormProps = React.PropsWithChildren<{
    overrides?: AttendeesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    attendees?: any;
    onSubmit?: (fields: AttendeesUpdateFormInputValues) => AttendeesUpdateFormInputValues;
    onSuccess?: (fields: AttendeesUpdateFormInputValues) => void;
    onError?: (fields: AttendeesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AttendeesUpdateFormInputValues) => AttendeesUpdateFormInputValues;
    onValidate?: AttendeesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AttendeesUpdateForm(props: AttendeesUpdateFormProps): React.ReactElement;
