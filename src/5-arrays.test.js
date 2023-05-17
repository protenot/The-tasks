import { array, sumDigits, anotherArr } from "./5-arrays.js";
describe("Arrays", () => {
  it("should create array", () => {
    expect(typeof array).toEqual("object");
    expect(array.length).toEqual(10);
  });

  it("should count sum", () => {
    expect(sumDigits).toEqual(55);
  });
  it("should create array from 10 items ", () => {
    expect(anotherArr.length).toEqual(10);
  });
  it("should create array *2 ", () => {
    expect(anotherArr).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
});
