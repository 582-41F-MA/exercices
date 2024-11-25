import Letter from "./Letter.tsx";
import { letter, guess } from "./types.ts";

type GuessProps = {
    letters: letter[];
    current: boolean;
    onChange: (g: guess) => void;
};

export default function Guess({
    letters,
    onChange,
    current = false,
}: GuessProps) {
    function handleChange(i: number): (value: string) => void {
        return (value) => {
            const updatedGuess = [...letters];
            updatedGuess[i].value = value;
            onChange(updatedGuess);
        };
    }

    return (
        <fieldset>
            {letters.map((l, i) => (
                <Letter {...l} onChange={handleChange(i)} disabled={!current} />
            ))}
        </fieldset>
    );
}
