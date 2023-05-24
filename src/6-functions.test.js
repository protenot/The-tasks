import { diff } from "./6-functions";
describe("diff", () => {
  it("is a function", () => {
    expect(diff).toBeInstanceOf(Function);
  });
  it("return diff", () => {
    expect(diff(7, 5)).toEqual(2);
  });
});

import { isWord } from "./6-functions.js";
describe("isWord", () => {
  it("is a function", () => {
    expect(isWord).toBeInstanceOf(Function);
  });
  it("is string has one item return true", () => {
    expect(isWord("hello")).toBeTruthy();
  });
  it("is string has more then one item return false", () => {
    expect(isWord("hello my friend")).toBeFalsy();
  });

  it("is string has one item and gaps return true", () => {
    expect(isWord(" hello ")).toBeTruthy();
  });
});
