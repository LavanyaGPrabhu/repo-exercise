import { describe, test, expect } from "vitest";
/**
 * slice in array
 * The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
 * The original array will not be modified.
 * The slice() method also has an optional second argument for the end index.
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
describe("slice in array", () => {
  test("returns a shallow copy of the array from start to end", () => {
    expect(arrOfNum.slice(2, 5)).toEqual([3, 4, 5]);
    expect(arrOfStr.slice(2, 4)).toEqual(["abc", "abcd"]);
    expect(arrOfArrays.slice(1, 3)).toEqual([
      [2, 3],
      [4, 5, 6],
    ]);
    expect(arrOfObj.slice(2, 5)).toEqual([
      { name: "Jack", age: 35 },
      { name: "Jill", age: 40 },
      { name: "John", age: 45 },
    ]);
  });
  test("returns a shallow copy of the array from start to end if end is negative", () => {
    expect(arrOfNum.slice(2, -3)).toEqual([3, 4, 5, 6, 7]);
    expect(arrOfStr.slice(2, -2)).toEqual(["abc", "abcd"]);
    expect(arrOfArrays.slice(1, -2)).toEqual([[2, 3]]);
    expect(arrOfObj.slice(2, -4)).toEqual([{ name: "Jack", age: 35 }]);
  });
  test("returns a shallow copy of the array from start to end if start is negative", () => {
    expect(arrOfNum.slice(-5, 8)).toEqual([6, 7, 8]);
    expect(arrOfStr.slice(-5, 4)).toEqual(["ab", "abc", "abcd"]);
    expect(arrOfArrays.slice(-3, 3)).toEqual([
      [2, 3],
      [4, 5, 6],
    ]);
    expect(arrOfObj.slice(-5, 5)).toEqual([
      { name: "Jack", age: 35 },
      { name: "Jill", age: 40 },
      { name: "John", age: 45 },
    ]);
  });
  test("returns a shallow copy of the array from start to end if start and end are negative", () => {
    expect(arrOfNum.slice(-5, -2)).toEqual([6, 7, 8]);
    expect(arrOfStr.slice(-5, -2)).toEqual(["ab", "abc", "abcd"]);
    expect(arrOfArrays.slice(-3, -1)).toEqual([
      [2, 3],
      [4, 5, 6],
    ]);
    expect(arrOfObj.slice(-5, -2)).toEqual([
      { name: "Jack", age: 35 },
      { name: "Jill", age: 40 },
      { name: "John", age: 45 },
    ]);
  });
  test("returns a shallow copy of the array from start if end is not provided", () => {
    expect(arrOfNum.slice(5)).toEqual([6, 7, 8, 9, 10]);
    expect(arrOfStr.slice(3)).toEqual(["abcd", "a", "ab"]);
    expect(arrOfArrays.slice(2)).toEqual([
      [4, 5, 6],
      [7, 8, 9, 10],
    ]);
    expect(arrOfObj.slice(4)).toEqual([
      { name: "John", age: 45 },
      { name: "Jane", age: 60 },
      { name: "Jack", age: 65 },
    ]);
  });
  test("returns a shallow copy of the array if start is greater than end", () => {
    expect(arrOfNum.slice(5, 2)).toEqual([]);
    expect(arrOfStr.slice(4, 2)).toEqual([]);
    expect(arrOfArrays.slice(3, 1)).toEqual([]);
    expect(arrOfObj.slice(5, 2)).toEqual([]);
  });
});
