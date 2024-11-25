import { useState } from "react";
import { guess, board } from "./types.ts";
import * as validate from "./validate.ts";

import Guess from "./Guess.tsx";

function newGame(): board {
    const b: board = [];
    const width = 5;
    const height = 6;
    for (let y = 0; y < height; y++) {
        const g: guess = [];
        for (let x = 0; x < width; x++) {
            g.push({ value: "", status: null });
        }
        b.push(g);
    }
    return b;
}

export default function App() {
    const [game, setGame] = useState(newGame());
    const [currentGuess, setCurrentGuess] = useState(0);

    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault();
        const results = validate.guess(
            game[currentGuess].map((l) => l.value),
            "apple",
        );
        const updatedLetters = game[currentGuess].map((letter, i) => {
            letter.status = results[i];
            return letter;
        });
        const updatedGame = [...game];
        updatedGame[currentGuess] = updatedLetters;
        setGame(updatedGame);
        setCurrentGuess(currentGuess + 1);
    }

    function handleChange(g: guess): void {
        const updatedGame = [...game];
        updatedGame[currentGuess] = g;
        setGame(updatedGame);
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                {game.map((guess, i) => (
                    <Guess
                        current={currentGuess === i}
                        letters={guess}
                        onChange={handleChange}
                    />
                ))}
                <button>Submit</button>
            </form>
        </main>
    );
}
