const absent = "absent";
const present = "present";
const correct = "correct";

type result = "absent" | "present" | "correct";

export function guess(letters: string[], wordToGuess: string): result[] {
    const results: result[] = [];
    for (let i = 0; i < letters.length; i++) {
        const { word, result } = letter(letters[i], i, wordToGuess);
        wordToGuess = word;
        results.push(result);
    }
    return results;
}

function letter(
    letter: string,
    position: number,
    word: string,
): { result: result; word: string } {
    letter = letter.toLowerCase();
    const isCorrect = letter === word[position];
    const isPresent = word.includes(letter);
    if (isCorrect) return { result: correct, word: word.replace(letter, " ") };
    if (isPresent) {
        const i = word.indexOf(letter);
        return {
            result: present,
            word: word.slice(0, i) + " " + word.slice(i + 1),
        };
    }
    return { result: absent, word: word };
}

export async function word(w: string): Promise<boolean> {
    const data = new URLSearchParams();
    data.append("word", w);
    const options = {
        method: "POST",
        body: data,
        headers: { "Content-type": "application/x-www-form-urlencoded" },
    };
    const res = await fetch("/api/validate", options);
    if (!res.ok) return false;
    return true;
}
