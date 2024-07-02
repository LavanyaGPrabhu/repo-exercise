import { describe, test, expect } from "vitest";
/**
 * concat in array
 * The concat() method is used to merge two or more arrays.
 * This method does not change the existing arrays, but instead returns a new array.
 * The concat() method also has an optional argument for additional elements to be added to the new array.
 */

// declare the arrays
const arrOfNum1 = [1, 3, 5, 7, 9];
const arrOfNum2 = [2, 4, 6, 8, 10];
const arrOfStr1 = ["a", "b", "c"];
const arrOfStr2 = ["ab", "cd", "efg"];
const arrOfArrays = [[1], [2, 3]];
const arrOfObj1 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 35 },
];
const arrOfObj2 = [
  { name: "Jill", age: 40 },
  { name: "John", age: 45 },
  { name: "Jane", age: 60 },
  { name: "Jack", age: 65 },
];

// test cases
describe("concat in array", () => {
  test("merges two num arrays", () => {
    expect(arrOfNum1.concat(arrOfNum2)).toEqual([
      1, 3, 5, 7, 9, 2, 4, 6, 8, 10,
    ]);

    expect(arrOfStr1.concat(arrOfStr2)).toEqual([
      "a",
      "b",
      "c",
      "ab",
      "cd",
      "efg",
    ]);

    // the arrays is added as a single element
    expect(arrOfArrays.concat([arrOfArrays])).toEqual([
      [1],
      [2, 3],
      [[1], [2, 3]],
    ]);

    expect(arrOfObj1.concat(arrOfObj2)).toEqual([
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Jack", age: 35 },
      { name: "Jill", age: 40 },
      { name: "John", age: 45 },
      { name: "Jane", age: 60 },
      { name: "Jack", age: 65 },
    ]);
  });

  test("merges num array with additional elements", () => {
    expect(arrOfNum1.concat(2, 4, 6, 8, 10)).toEqual([
      1, 3, 5, 7, 9, 2, 4, 6, 8, 10,
    ]);

    expect(arrOfStr1.concat("ab", "cd", "efg")).toEqual([
      "a",
      "b",
      "c",
      "ab",
      "cd",
      "efg",
    ]);

    // only the elements are added to the array
    expect(arrOfArrays.concat([11], [12, 13])).toEqual([
      [1],
      [2, 3],
      11,
      12,
      13,
    ]);

    expect(
      arrOfObj1.concat({ name: "Jill", age: 40 }, { name: "John", age: 45 })
    ).toEqual([
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Jack", age: 35 },
      { name: "Jill", age: 40 },
      { name: "John", age: 45 },
    ]);
  });

  test("merges empty array with additional elements", () => {
    expect([].concat(1, 2, 3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
  });
});
