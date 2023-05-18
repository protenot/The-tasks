import { day, month, year } from "./8-dates.js";
// const input = '13.02.2023';
describe("day, month, year", () => {
  it("day, month and year is exist", () => {
    expect(day).toBeDefined();
    expect(month).toBeDefined();
    expect(year).toBeDefined();
  });
});

import { array } from "./8-dates.js";
describe("array", () => {
  it("array is an array", () => {
    expect(array).toBeDefined();
    expect(array).toBeInstanceOf(Object);
    expect(array.length).toEqual(7);
  });
});
import { inputDate } from "./8-dates.js";
describe("inputDate", () => {
  it("13.02.2023 will have date format", () => {
    // expect(inputDate).equalDate('2023-02-13T00:00:00.000Z');
    expect(inputDate).toBeInstanceOf(Object);
    expect(inputDate.getTime()).toEqual(1676246400000);
  });
});
import { dayOfWeek } from "./8-dates.js";
describe("dayOfWeek", () => {
  it("13.02.2023 will be понедельник", () => {
    expect(array[dayOfWeek]).toBe("Понедельник");
  });
});
