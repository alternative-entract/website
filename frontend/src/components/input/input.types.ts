export type InputProps = {
    value: string;
    onChange?: (value: string) => void;
    [key: string]: unknown;
};

export type InputTextProps = InputProps & {
    isReadonly?: boolean;
};