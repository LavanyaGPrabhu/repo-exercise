import { describe, test, expect, beforeEach } from "vitest";
/**
 * splice in array
 * The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 * The splice() method returns an array containing the deleted elements.
 * The splice() method also has an optional second argument for the number of elements to be removed.
 */

// test cases
describe("splice in array", () => {
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
  test("remove elements from the array", () => {
    expect(arrOfNum.splice(2, 3)).toEqual([3, 4, 5]);
    expect(arrOfStr.splice(2, 3)).toEqual(["abc", "abcd", "a"]);
    expect(arrOfArrays.splice(1, 2)).toEqual([
      [2, 3],
      [4, 5, 6],
    ]);
    expect(arrOfObj.splice(2, 3)).toEqual([
      { name: "Jack", age: 35 },
      { name: "Jill", age: 40 },
      { name: "John", age: 45 },
    ]);
  });
  test("remove elements and add new elements", () => {
    expect(arrOfNum.splice(2, 0, 3, 4, 5)).toEqual([]);
    expect(arrOfStr.splice(2, 0, "abc", "abcd")).toEqual([]);
    expect(arrOfArrays.splice(1, 0, [2, 3], [4, 5, 6])).toEqual([]);
    expect(
      arrOfObj.splice(
        2,
        0,
        { name: "Jack", age: 35 },
        { name: "Jill", age: 40 }
      )
    ).toEqual([]);
  });
  test("replace elements", () => {
    // remove 3 elements starting from index 2 and add 5, 5, 5
    expect(arrOfNum.splice(2, 3, 5, 5, 5)).toEqual([3, 4, 5]);
    expect(arrOfNum).toEqual([1, 2, 5, 5, 5, 6, 7, 8, 9, 10]);

    // remove 3 elements starting from index 2 and add "y", "z", "x"
    expect(arrOfStr.splice(2, 3, "y", "z", "x")).toEqual(["abc", "abcd", "a"]);
    expect(arrOfStr).toEqual(["a", "ab", "y", "z", "x", "ab"]);

    //remove 2 elements starting from index 1 and add [20, 3], [4, 50, 6]
    expect(arrOfArrays.splice(1, 2, [20, 3], [4, 50, 6])).toEqual([
      [2, 3],
      [4, 5, 6],
    ]);
    expect(arrOfArrays).toEqual([[1], [20, 3], [4, 50, 6], [7, 8, 9, 10]]);

    // remove 3 elements starting from index 2 and add { name: "Jessie", age: 35 }, { name: "James", age: 40 }
    expect(
      arrOfObj.splice(
        2,
        3,
        { name: "Jessie", age: 35 },
        { name: "James", age: 40 }
      )
    ).toEqual([
      { name: "Jack", age: 35 },
      { name: "Jill", age: 40 },
      { name: "John", age: 45 },
    ]);
    expect(arrOfObj).toEqual([
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Jessie", age: 35 },
      { name: "James", age: 40 },
      { name: "Jane", age: 60 },
      { name: "Jack", age: 65 },
    ]);
  });
});
