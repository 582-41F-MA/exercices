export type letter = {
    value: string;
    status: string | null;
};

export type guess = letter[];
export type board = guess[];
