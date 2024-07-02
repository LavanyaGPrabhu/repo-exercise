import { describe, test, expect, beforeEach } from "vitest";
/**
 * shift in array
 * The shift() method removes the first element from an array and returns that removed element.
 * This method changes the length of the array.
 */

// test cases
describe("shift in array", () => {
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

  test("removes the first element from the array", () => {
    expect(arrOfNum.shift()).toBe(1);
    expect(arrOfStr.shift()).toBe("a");
    expect(arrOfArrays.shift()).toEqual([1]);
    expect(arrOfObj.shift()).toEqual({ name: "John", age: 25 });
  });
  test("changes the length of the array", () => {
    arrOfNum.shift();
    expect(arrOfNum.length).toBe(9);
    arrOfStr.shift();
    expect(arrOfStr.length).toBe(5);
    arrOfArrays.shift();
    expect(arrOfArrays.length).toBe(3);
    arrOfObj.shift();
    expect(arrOfObj.length).toBe(6);
  });
});
