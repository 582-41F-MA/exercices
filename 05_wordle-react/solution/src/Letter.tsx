type LetterProps = {
    value: string;
    status: string | null;
    disabled: boolean;
    onChange: (value: string) => void;
};

export default function Letter({
    value,
    status,
    disabled = false,
    onChange,
}: LetterProps) {
    function handleChange(e: React.ChangeEvent): void {
        const input = e.target as HTMLInputElement;
        onChange(input.value);
    }

    const classNames = [status || undefined, disabled || "current"];

    return (
        <input
            value={value}
            onChange={handleChange}
            className={classNames.join(" ")}
            minLength={1}
            maxLength={1}
            disabled={disabled}
            required={!disabled}
        />
    );
}
