import { describe, test, expect } from "vitest";
/**
 * sort in array
 * The sort() method sorts the elements of an array in place and returns the sorted array.
 * The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
 * The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
 * The sort() method does not change the original array.
 * The sort() method also has an optional argument for a compare function.
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
describe("sort in array", () => {
  test("sorts the array in ascending order by default", () => {
    expect(arrOfNum.sort()).toEqual([1, 10, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(arrOfStr.sort()).toEqual(["a", "a", "ab", "ab", "abc", "abcd"]);
    expect(arrOfArrays.sort()).toEqual([[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]]);
    expect(arrOfObj.sort()).toEqual([
      { age: 25, name: "John" },
      { age: 30, name: "Jane" },
      { age: 35, name: "Jack" },
      { age: 40, name: "Jill" },
      { age: 45, name: "John" },
      { age: 60, name: "Jane" },
      { age: 65, name: "Jack" },
    ]);
  });
  test("sorts the array in descending order using compare function", () => {
    expect(arrOfNum.sort((a, b) => b - a)).toEqual([
      10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    ]);
    expect(arrOfStr.sort((a, b) => b.length - a.length)).toEqual([
      "abcd",
      "abc",
      "ab",
      "ab",
      "a",
      "a",
    ]);
    expect(arrOfArrays.sort((a, b) => b.length - a.length)).toEqual([
      [7, 8, 9, 10],
      [4, 5, 6],
      [2, 3],
      [1],
    ]);
    expect(arrOfObj.sort((a, b) => b.age - a.age)).toEqual([
      { age: 65, name: "Jack" },
      { age: 60, name: "Jane" },
      { age: 45, name: "John" },
      { age: 40, name: "Jill" },
      { age: 35, name: "Jack" },
      { age: 30, name: "Jane" },
      { age: 25, name: "John" },
    ]);
  });
  test("sorts the array in ascending order using compare function", () => {
    expect(arrOfNum.sort((a, b) => a - b)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(arrOfStr.sort((a, b) => a.length - b.length)).toEqual([
      "a",
      "a",
      "ab",
      "ab",
      "abc",
      "abcd",
    ]);
    expect(arrOfArrays.sort((a, b) => a.length - b.length)).toEqual([
      [1],
      [2, 3],
      [4, 5, 6],
      [7, 8, 9, 10],
    ]);
    expect(arrOfObj.sort((a, b) => a.age - b.age)).toEqual([
      { age: 25, name: "John" },
      { age: 30, name: "Jane" },
      { age: 35, name: "Jack" },
      { age: 40, name: "Jill" },
      { age: 45, name: "John" },
      { age: 60, name: "Jane" },
      { age: 65, name: "Jack" },
    ]);
  });
});
