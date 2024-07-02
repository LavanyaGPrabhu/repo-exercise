import { describe, test, expect } from "vitest";
/**
 * some in array
 * The some() method tests whether at least one element in the array passes the test implemented by the provided function.
 * It returns a Boolean value.
 * The some() method does not change the original array.
 * The some() method also has an optional second argument for the index of the array.
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
describe("some in array", () => {
  test("true if atleast one element satisfies condition", () => {
    expect(arrOfNum.some((num) => num > 5)).toBe(true);
    expect(arrOfStr.some((str) => str.length > 3)).toBe(true);
    expect(arrOfArrays.some((arr) => arr.length > 3)).toBe(true);
    expect(arrOfObj.some((obj) => obj.age > 60)).toBe(true);
  });

  test("false if no element satisfies condition", () => {
    expect(arrOfNum.some((num) => num > 10)).toBe(false);
    expect(arrOfStr.some((str) => str.length > 5)).toBe(false);
    expect(arrOfArrays.some((arr) => arr.length > 10)).toBe(false);
    expect(arrOfObj.some((obj) => obj.age > 100)).toBe(false);
  });

  test("false if array is empty", () => {
    expect([].some((num) => num > 5)).toBe(false);
  });
});
