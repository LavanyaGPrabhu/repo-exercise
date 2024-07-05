import { describe, test, expect } from "vitest";
/**
 * Find in array
 * The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
 * If no values satisfy the testing function, undefined is returned.
 * The find() method does not change the original array.
 * The find() method also has an optional second argument for the index of the array.
 */

// declare the arrays
const arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrOfStr = ["a", "ab", "abc", "abcd", "a", "ab"];
const arrOfObj = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 35 },
  { name: "Jill", age: 40 },
  { name: "John", age: 45 },
  { name: "Jane", age: 60 },
  { name: "Jack", age: 65 },
];
const arrOfArrays = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];

// using vitest to test the find method
describe("Find in array", () => {
  test("Find the first even number", () => {
    const A = arrOfNum.find((x) => x % 2 === 0);
    expect(A).toBe(2);
  });

  test("Find the first string with length > 3", () => {
    const B = arrOfStr.find((x) => x.length > 3);
    expect(B).toBe("abcd");
  });

  test("Find the first string that contains 'a'", () => {
    const C = arrOfStr.find((x) => x.includes("a"));
    expect(C).toBe("a");
  });

  test("Find the first number divisible by 11", () => {
    const D = arrOfNum.find((x) => x % 11 === 0);
    expect(D).toBe(undefined);
  });

  test("Find the first object with age > 30", () => {
    const E = arrOfObj.find((x) => x.age > 30);
    expect(E).toEqual({ name: "Jack", age: 35 });
  });

  test("Find the first object with name 'Jane'", () => {
    const F = arrOfObj.find((x) => x.name === "Jane");
    expect(F).toEqual({ name: "Jane", age: 30 });
  });

  test("Find the first even number after index 5", () => {
    const G = arrOfNum.find((x, i) => i > 5 && x % 2 === 0);
    expect(G).toBe(8);
  });
});
