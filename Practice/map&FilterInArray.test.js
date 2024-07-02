import { describe, test, expect } from "vitest";
/**
 * Map in array
 * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 * The map() method does not change the original array.
 * The map() method can accept an initial value as the second argument.
 */
/**
 * Filter in array
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 * The filter() method does not change the original array.
 * The filter() method can accept an initial value as the second argument.
 *
 */

// declare the arrays
const arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrOfStr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const arrOfObj = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 35 },
  { name: "Jill", age: 40 },
];
const e = [
  "Apple",
  "banana",
  "Cherry",
  "Date",
  "elderberry",
  "Fig",
  "grape",
  "honeydew",
  "Kiwi",
  "Lemon",
];

// using vitest to test the map method
describe("Map in array", () => {
  test("Multiply by 2", () => {
    const A1 = arrOfNum.map((x) => x * 2);
    expect(A1).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
  test("Multiply only even by 2", () => {
    const A2 = arrOfNum.map((x) => (x % 2 === 0 ? x * 2 : x));
    expect(A2).toEqual([1, 4, 3, 8, 5, 12, 7, 16, 9, 20]);
  });
  test("Uppercase", () => {
    const B1 = arrOfStr.map((x) => x.toUpperCase());
    expect(B1).toEqual(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]);
  });
  test("Extract name", () => {
    const C1 = arrOfObj.map((x) => x.name);
    expect(C1).toEqual(["John", "Jane", "Jack", "Jill"]);
  });
  test("Extract name and uppercase", () => {
    const C2 = arrOfObj.map((x) => x.name.toUpperCase());
    expect(C2).toEqual(["JOHN", "JANE", "JACK", "JILL"]);
  });
});
describe("Filter in array", () => {
  test("Filter out even", () => {
    const A3 = arrOfNum.filter((x) => x % 2 !== 0);
    expect(A3).toEqual([1, 3, 5, 7, 9]);
  });
  test("Filter out length > 3", () => {
    const d = [
      "a",
      "ab",
      "abc",
      "abcd",
      "abcde",
      "abcdef",
      "abcdefg",
      "abcdefgh",
      "abcdefghi",
      "abcdefghij",
    ];
    const D = d.filter((x) => x.length <= 3);
    expect(D).toEqual(["a", "ab", "abc"]);
  });
  test("Filter out string with 'a'", () => {
    const E1 = e.filter((x) => x.includes("a"));
    expect(E1).toEqual(["banana", "Date", "grape"]);
  });
  test("Filter out string with capital letter", () => {
    const E2 = e.filter((x) => x[0] === x[0].toUpperCase());
    expect(E2).toEqual(["Apple", "Cherry", "Date", "Fig", "Kiwi", "Lemon"]);
  });
  test("Filter out age > 30", () => {
    const C3 = arrOfObj.filter((x) => x.age <= 30);
    expect(C3).toEqual([
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
    ]);
  });
  test("Filter out name 'Jane'", () => {
    const C4 = arrOfObj.filter((x) => x.name === "Jane");
    expect(C4).toEqual([{ name: "Jane", age: 30 }]);
  });
  test("Filter out name 'Jane' and uppercase", () => {
    const C5 = arrOfObj
      .filter((x) => x.name === "Jane")
      .map((x) => x.name.toUpperCase());
    expect(C5).toEqual(["JANE"]);
  });
});

describe("Map and filter in array", () => {
  test("Multiply by 2 and retain only even", () => {
    const A4 = arrOfNum.map((x) => x * 2);
    const A5 = A4.filter((x) => x % 2 === 0);
    const A6 = arrOfNum.map((x) => x * 2).filter((x) => x % 2 === 0);
    expect(A5).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    expect(A6).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
  test("Multiply only even by 2", () => {
    const A7 = arrOfNum.filter((x) => x % 2 === 0).map((x) => x * 2);
    expect(A7).toEqual([4, 8, 12, 16, 20]);
  });
  test("Uppercase and retain only length < 6", () => {
    const B2 = e.map((x) => x.toUpperCase()).filter((x) => x.length < 6);
    expect(B2).toEqual(["APPLE", "DATE", "FIG", "GRAPE", "KIWI", "LEMON"]);
  });
  test("Extract name and retain only age < 30", () => {
    const C6 = arrOfObj.filter((x) => x.age < 30).map((x) => x.name);
    expect(C6).toEqual(["John"]);
  });
});
