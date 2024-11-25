import { useState } from "react";

import Cell from "./Cell.tsx";

export default function Board() {
    const [game, setGame] = useState(Array(9).fill(""));
    const [nextMark, setNextMark] = useState("x");

    const winner = getWinner(game);

    function handleChange(pos: number): () => void {
        return () => {
            const updatedGame = game.map((mark, i) => {
                if (mark) return mark;
                if (i !== pos) return mark;
                setNextMark(nextMark === "x" ? "o" : "x");
                return nextMark;
            });
            setGame(updatedGame);
        };
    }

    const board: React.ReactElement[] = [];
    game.map((mark, i) => {
        board.push(
            <li>
                <Cell mark={mark} onChange={handleChange(i)} />
            </li>,
        );
    });

    return (
        <>
            <ul>{board}</ul>
            {winner && <p>{winner} gagne</p>}
        </>
    );
}

function getWinner(game: string[]): string {
    const winLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const line of winLines) {
        const winCells = [game[line[0]], game[line[1]], game[line[2]]];
        const marksAreSame = winCells.every((c) => c === winCells[0]);
        const lineIsEmpty = winCells[0] === "";
        if (lineIsEmpty || !marksAreSame) continue;
        return winCells[0];
    }
    return "";
}
