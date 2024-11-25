type CellProps = { mark: "x" | "o" | ""; onChange: () => void };

export default function Cell({ mark, onChange }: CellProps) {
    return <button onClick={onChange}>{mark}</button>;
}
