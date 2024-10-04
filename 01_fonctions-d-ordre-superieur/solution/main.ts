// @ts-ignore
import { test, expect } from "https://maxime-pigeon.github.io/t/test.js";

function forEach(arr: any[], callback: (e: any) => void): void {
    for (let e of arr) callback(e);
}

function forEachRecur(arr: any[], callback: (e: any) => void): void {
    if (arr.length === 0) return;
    callback(arr[0]);
    return forEachRecur(arr.slice(1), callback);
}

function map(arr: any[], callback: (e: any) => any): any[] {
    const res: any[] = [];
    for (let e of arr) res.push(callback(e));
    return res;
}

test("add 1 to each element of array", () => {
    const actual = map([1, 2, 3], (e) => e + 1);
    const expected = [2, 3, 4];
    expect(actual).toBe(expected);
});

function mapRecur(arr: any[], callback: (e: any) => any): any[] {
    if (arr.length === 0) return [];
    return [callback(arr[0])].concat(map(arr.slice(1), callback));
}

test("add 1 to each element of array", () => {
    const actual = mapRecur([1, 2, 3], (e) => e + 1);
    const expected = [2, 3, 4];
    expect(actual).toBe(expected);
});

function filter(arr: any[], callback: (e: any) => boolean): any[] {
    const res: any[] = [];
    for (let e of arr) {
        if (!callback(e)) continue;
        res.push(e);
    }
    return res;
}

test("return even numbers", () => {
    const actual = filter([1, 2, 3], (e) => e % 2 === 0);
    const expected = [2];
    expect(actual).toBe(expected);
});

function filterRecur(arr: any[], callback: (e: any) => boolean): any[] {
    if (arr.length === 0) return [];
    if (!callback(arr[0])) return filterRecur(arr.slice(1), callback);
    return [arr[0]].concat(filter(arr.slice(1), callback));
}

test("return even numbers", () => {
    const actual = filterRecur([1, 2, 3], (e) => e % 2 === 0);
    const expected = [2];
    expect(actual).toBe(expected);
});

function newAccount(balance: number): {
    deposit: (amount: number) => number;
    withdraw: (amount: number) => number;
} {
    return {
        deposit: (a) => (balance += a),
        withdraw: (a) => (balance -= a),
    };
}

test("deposit the correct amount", () => {
    const a = newAccount(0);
    a.deposit(1);
    const actual = a.deposit(1);
    const expected = 2;
    expect(actual).toBe(expected);
});

test("withdraw the correct amount", () => {
    const a = newAccount(2);
    a.withdraw(1);
    const actual = a.withdraw(1);
    const expected = 0;
    expect(actual).toBe(expected);
});

function unless(condition: boolean, callback: () => void): void {
    if (!condition) return;
    callback();
}

function reduce(
    arr: any[],
    callback: (a: any, b: any) => any,
    start: any,
): any {
    for (let e of arr) start = callback(e, start);
    return start;
}

test("calculate the sum of the array", () => {
    const actual = reduce([1, 2, 3], (a, b) => a + b, 0);
    const expected = 6;
    expect(actual).toBe(expected);
});

function reduceRecur(
    arr: any[],
    callback: (a: any, b: any) => any,
    start: any,
): any {
    if (arr.length === 0) return start;
    return reduceRecur(arr.slice(1), callback, callback(arr[0], start));
}

test("calculate the sum of the array", () => {
    const actual = reduceRecur([1, 2, 3], (a, b) => a + b, 0);
    const expected = 6;
    expect(actual).toBe(expected);
});

function decorate(callback: (...args: any) => any): (...args: any) => any {
    return (...args: any): any => {
        console.log(
            `J'applique la fonction sur les arguments ${args.join(", ")} `,
        );
        const value = callback(...args);
        console.log(`Le résultat est ${value}`);
        return value;
    };
}
