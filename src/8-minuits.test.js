import { getMinuites } from "./8-minuits.js";
describe("getMinuites", () => {
  it("is a function", () => {
    expect(getMinuites).toBeInstanceOf(Function);
  });
  it("function returns minuites", () => {
    const now = new Date("2023-05-18T15:00:00.000Z");

    expect(getMinuites(now)).toEqual(360);
  });
});
