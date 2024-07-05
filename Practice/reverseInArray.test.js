import { describe, test, expect, beforeEach } from "vitest";
/**
 * reverse in array
 * The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
 * The reverse() method returns the reversed array.
 */

// test cases
describe("reverse in array", () => {
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
  test("reverses the array in place", () => {
    arrOfNum.reverse();
    expect(arrOfNum).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

    arrOfStr.reverse();
    expect(arrOfStr).toEqual(["ab", "a", "abcd", "abc", "ab", "a"]);

    arrOfArrays.reverse();
    expect(arrOfArrays).toEqual([[7, 8, 9, 10], [4, 5, 6], [2, 3], [1]]);

    arrOfObj.reverse();
    expect(arrOfObj).toEqual([
      { name: "Jack", age: 65 },
      { name: "Jane", age: 60 },
      { name: "John", age: 45 },
      { name: "Jill", age: 40 },
      { name: "Jack", age: 35 },
      { name: "Jane", age: 30 },
      { name: "John", age: 25 },
    ]);
  });
});
