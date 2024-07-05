import { describe, test, expect } from "vitest";
/**
 * every in array
 * The every() method tests whether all elements in the array pass the test implemented by the provided function.
 * It returns a Boolean value.
 * The every() method does not change the original array.
 * The every() method also has an optional second argument for the index of the array.
 */

// declare the arrays
const arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrOfStr = ["a", "ab", "abc", "abcd", "a", "ab"];
const arrOfArrays = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];
const arrOfObj = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 35 },
  { name: "Jill", age: 40 },
  { name: "John", age: 45 },
  { name: "Jane", age: 60 },
  { name: "Jack", age: 65 },
];

// test cases
describe("every in array", () => {
  test("true if all elements satisfy condition", () => {
    expect(arrOfNum.every((num) => num > 0)).toBe(true);
    expect(arrOfStr.every((str) => str.length > 0)).toBe(true);
    expect(arrOfArrays.every((arr) => arr.length > 0)).toBe(true);
    expect(arrOfObj.every((obj) => obj.age > 0)).toBe(true);
  });

  test("false if atleast one element does not satisfy condition", () => {
    expect(arrOfNum.every((num) => num < 10)).toBe(false);
    expect(arrOfStr.every((str) => str.length < 3)).toBe(false);
    expect(arrOfArrays.every((arr) => arr.length < 2)).toBe(false);
    expect(arrOfObj.every((obj) => obj.age < 30)).toBe(false);
  });

  test("true if array is empty", () => {
    expect([].every((num) => num > 5)).toBe(true);
  });
});
