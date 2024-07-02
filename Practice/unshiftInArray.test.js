import { describe, test, expect, beforeEach } from "vitest";
/**
 * unshift in array
 * The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
 * The unshift() method changes the length of the array.
 */

// test cases
describe("unshift in array", () => {
  // declare the arrays
  let arrOfNum;
  let arrOfStr;
  let arrOfArrays;
  let arrOfObj;

  beforeEach(() => {
    arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    arrOfStr = ["a", "ab", "abc", "abcd", "a", "ab"];
    arrOfArrays = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];
    arrOfObj = [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Jack", age: 35 },
      { name: "Jill", age: 40 },
      { name: "John", age: 45 },
      { name: "Jane", age: 60 },
      { name: "Jack", age: 65 },
    ];
  });
  test("adds an element to the beginning of the array", () => {
    expect(arrOfNum.unshift(0)).toBe(11);
    expect(arrOfNum).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    expect(arrOfStr.unshift("z")).toBe(7);
    expect(arrOfStr).toEqual(["z", "a", "ab", "abc", "abcd", "a", "ab"]);

    expect(arrOfArrays.unshift([0])).toBe(5);
    expect(arrOfArrays).toEqual([[0], [1], [2, 3], [4, 5, 6], [7, 8, 9, 10]]);

    expect(arrOfObj.unshift({ name: "Jill", age: 20 })).toBe(8);
    expect(arrOfObj).toEqual([
      { name: "Jill", age: 20 },
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Jack", age: 35 },
      { name: "Jill", age: 40 },
      { name: "John", age: 45 },
      { name: "Jane", age: 60 },
      { name: "Jack", age: 65 },
    ]);
  });
  test("changes the length of the array", () => {
    arrOfNum.unshift(0);
    expect(arrOfNum.length).toBe(11);
    arrOfStr.unshift("x", "z");
    expect(arrOfStr.length).toBe(8);
    arrOfArrays.unshift([0]);
    expect(arrOfArrays.length).toBe(5);
    arrOfObj.unshift({ name: "Jill", age: 20 });
    expect(arrOfObj.length).toBe(8);
  });
  test("adds multiple elements to the beginning of the array", () => {
    expect(arrOfNum.unshift(0, -1, -2)).toBe(13);
    expect(arrOfNum).toEqual([0, -1, -2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    expect(arrOfStr.unshift("x", "z", "y")).toBe(9);
    expect(arrOfStr).toEqual([
      "x",
      "z",
      "y",
      "a",
      "ab",
      "abc",
      "abcd",
      "a",
      "ab",
    ]);

    expect(arrOfArrays.unshift([0], [1, 2])).toBe(6);
    expect(arrOfArrays).toEqual([
      [0],
      [1, 2],
      [1],
      [2, 3],
      [4, 5, 6],
      [7, 8, 9, 10],
    ]);

    expect(
      arrOfObj.unshift({ name: "Jill", age: 20 }, { name: "John", age: 15 })
    ).toBe(9);
    expect(arrOfObj).toEqual([
      { name: "Jill", age: 20 },
      { name: "John", age: 15 },
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Jack", age: 35 },
      { name: "Jill", age: 40 },
      { name: "John", age: 45 },
      { name: "Jane", age: 60 },
      { name: "Jack", age: 65 },
    ]);
  });
});
