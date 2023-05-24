import { getMax } from "./2-conditions.js";

describe("getMax", () => {
  it("is a function", () => {
    expect(getMax).toBeInstanceOf(Function);
  });
});

test("comparision of 3 & 5", () => {
  expect(getMax(3, 5)).toBe(5);
});

test("comparision of 10 & 7", () => {
  expect(getMax(10, 7)).toBe(10);
});

import { findMonth } from "./2-conditions.js";

describe("findMonth", () => {
  it("is a function", () => {
    expect(findMonth).toBeInstanceOf(Function);
  });

  test("if number = 2 will be февраль", () => {
    expect(findMonth(2)).toBe("февраль");
  });
});
