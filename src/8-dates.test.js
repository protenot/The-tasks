import { dayOfBirthday } from "./8-dates.js";

describe("dayOfBirthday", () => {
  beforeEach(() => {
    jest.spyOn(window, "prompt").mockImplementation(() => "13.02.2023");
    dayOfBirthday();
  });
  it("is a function", () => {
    expect(dayOfBirthday).toBeInstanceOf(Function);
  });

  it("13.02.1969 will be четверг", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "13.02.1969");
    expect(dayOfBirthday()).toBe("Четверг");
  });

  it("13.02.2023 will be понедельник", () => {
    expect(dayOfBirthday()).toBe("Понедельник");
  });
});
