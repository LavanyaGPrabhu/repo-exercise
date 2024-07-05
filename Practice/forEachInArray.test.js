import { describe, test, expect } from "vitest";
/**
 * ForEach in array
 * The forEach() method executes a provided function once for each array element.
 * forEach() does not mutate the array on which it is called.
 * forEach() does not return a value.
 */

// declare the arrays
const arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrOfStr = ["a", "ab", "aBc", "Abcd"];
const arrOfObj = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 35 },
  { name: "Jill", age: 40 },
];

// using vitest to test the forEach method
describe("forEach in array", () => {
  test("Multiply by 2", () => {
    const A = [];
    arrOfNum.forEach((x) => A.push(x * 2));
    expect(A).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
  test("Multiply only even by 2", () => {
    const B = [];
    arrOfNum.forEach((x) => (x % 2 === 0 ? B.push(x * 2) : B.push(x)));
    expect(B).toEqual([1, 4, 3, 8, 5, 12, 7, 16, 9, 20]);
  });
  test("Uppercase", () => {
    const C = [];
    arrOfStr.forEach((x) => C.push(x.toUpperCase()));
    expect(C).toEqual(["A", "AB", "ABC", "ABCD"]);
  });
  test("Toggle case", () => {
    const D = [];
    arrOfStr.forEach((x) => {
      let str = "";
      for (let i = 0; i < x.length; i++) {
        str +=
          x[i] === x[i].toUpperCase() ? x[i].toLowerCase() : x[i].toUpperCase();
      }
      D.push(str);
    });
    expect(D).toEqual(["A", "AB", "AbC", "aBCD"]);
  });
  test("Extract name", () => {
    const E = [];
    arrOfObj.forEach((x) => E.push(x.name));
    expect(E).toEqual(["John", "Jane", "Jack", "Jill"]);
  });
  test("Extract name and uppercase", () => {
    const F = [];
    arrOfObj.forEach((x) => F.push(x.name.toUpperCase()));
    expect(F).toEqual(["JOHN", "JANE", "JACK", "JILL"]);
  });
  test("Filter out even", () => {
    const G = [];
    arrOfNum.forEach((x) => (x % 2 !== 0 ? G.push(x) : null));
    expect(G).toEqual([1, 3, 5, 7, 9]);
  });
  test("Filter out length > 3", () => {
    const H = [];
    arrOfStr.forEach((x) => (x.length <= 3 ? H.push(x) : null));
    expect(H).toEqual(["a", "ab", "aBc"]);
  });
  test("Filter in contain a", () => {
    const I = [];
    arrOfStr.forEach((x) => (x.includes("a") ? I.push(x) : null));
    expect(I).toEqual(["a", "ab", "aBc"]);
  });
});
