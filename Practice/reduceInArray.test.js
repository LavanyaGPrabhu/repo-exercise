import { describe, test, expect } from "vitest";
/**
 * Reduce in array
 * The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 * The reducer function takes four arguments:
 * 1. Accumulator
 * 2. Current Value
 * 3. Current Index (optional)
 * 4. Source Array (optional)
 * The reduce() method can accept an initial value as the second argument.
 */

// declare the arrays
const arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrOfStr = ["a", "ab", "abc", "abcd", "a", "ab"];
const arrOfObj = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 35 },
  { name: "Jill", age: 40 },
  { name: "John", age: 45 },
  { name: "Jane", age: 60 },
  { name: "Jack", age: 65 },
];
const arrOfArrays = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];

// using vitest to test the reduce method
describe("Reduce in array", () => {
  test("Sum", () => {
    const A = arrOfNum.reduce((total, num) => total + num, 0);
    expect(A).toBe(55);
  });
  test("Product with initial val as 0.25", () => {
    const B = arrOfNum.reduce((total, num) => total * num, 0.25);
    expect(B).toBe(907200);
  });
  test("Concat", () => {
    const C = arrOfStr.reduce((res, str) => res + str, "");
    expect(C).toBe("aababcabcdaab");
  });
  test("Concat of obj.name", () => {
    const D = arrOfObj.reduce((res, obj) => res + obj.name, "");
    expect(D).toBe("JohnJaneJackJillJohnJaneJack");
  });

  // This is called flatening an array of arrays
  test("Concat of arrays", () => {
    const E = arrOfArrays.reduce((res, arr) => res.concat(arr), []);
    expect(E).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test("Sum of even", () => {
    const F = arrOfNum.reduce(
      (total, num) => (num % 2 === 0 ? total + num : total),
      0
    );
    expect(F).toBe(30);
  });
  test("Count of obj.name", () => {
    const G = arrOfStr.reduce((accumulator, currentValue) => {
      if (accumulator[currentValue]) {
        accumulator[currentValue]++;
      } else {
        accumulator[currentValue] = 1;
      }
      return accumulator;
    }, {});
    expect(G).toEqual({ a: 2, ab: 2, abc: 1, abcd: 1 });
  });
  test("Group by name", () => {
    const H = arrOfObj.reduce((accumulator, currentValue) => {
      const key = currentValue.name;
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(currentValue);
      return accumulator;
    }, {});
    expect(H).toEqual({
      John: [
        { name: "John", age: 25 },
        { name: "John", age: 45 },
      ],
      Jane: [
        { name: "Jane", age: 30 },
        { name: "Jane", age: 60 },
      ],
      Jack: [
        { name: "Jack", age: 35 },
        { name: "Jack", age: 65 },
      ],
      Jill: [{ name: "Jill", age: 40 }],
    });
  });
  test("Group by name and sum age", () => {
    const I = arrOfObj.reduce((accumulator, currentValue) => {
      const key = currentValue.name;
      if (!accumulator[key]) {
        accumulator[key] = 0;
      }
      accumulator[key] += currentValue.age;
      return accumulator;
    }, {});
    expect(I).toEqual({ John: 70, Jane: 90, Jack: 100, Jill: 40 });
  });
  test("Remove duplicates", () => {
    const J = arrOfStr.reduce((accumulator, currentValue) => {
      if (!accumulator.includes(currentValue)) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);
    expect(J).toEqual(["a", "ab", "abc", "abcd"]);
  });
});
