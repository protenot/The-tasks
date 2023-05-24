import { multiply } from "./1-linear-algorithms.js";

test("adds 5 + 3 to equal 8 & multiply 5 * 3 to equal 15", () => {
  expect(multiply(5, 3)).toBe("8 и 15");
});
describe("multiply", () => {
  it("is a function", () => {
    expect(multiply).toBeInstanceOf(Function);
  });
});

import { summarize } from "./1-linear-algorithms.js";
test("fish plus meat to equal 8", () => {
  expect(summarize("fish", "meat")).toBe(8);
});
describe("summarize", () => {
  it("is a function", () => {
    expect(summarize).toBeInstanceOf(Function);
  });
});
