import { isItDate } from "./10-regexp.js";
describe("isItDate", () => {
  it("is a function", () => {
    expect(isItDate).toBeInstanceOf(Function);
  });
  it("is return true when 12/12/2012", () => {
    expect(isItDate("12/12/2012")).toBeTruthy();
  });
  it("is return false when 12/13/2012", () => {
    expect(isItDate("12/13/2012")).toBeFalsy();
  });
});

import { isItEmail } from "./10-regexp.js";
describe("isItEmail", () => {
  it("is a function", () => {
    expect(isItEmail).toBeInstanceOf(Function);
  });
  it("is return true when protenot@yandex.ru", () => {
    expect(isItEmail("protenot@yandex.ru")).toBeTruthy();
  });
  it("is return false manymane.boss", () => {
    expect(isItEmail("manymane.boss")).toBeFalsy();
  });
});
