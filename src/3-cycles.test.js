import { sum } from "./3-cycles.js";

describe("sum", () => {
  it("is a function", () => {
    expect(sum).toBeInstanceOf(Function);
  });

  test("sumAll working", () => {
    expect(sum()).toBe(3825);
  });
});
import { multyTable } from "./3-cycles.js";

describe("multyTable", () => {
  it("is a function", () => {
    expect(multyTable).toBeInstanceOf(Function);
  });

  test("Console log should have been called", () => {
    const logSpy = jest.spyOn(global.console, "log");
    multyTable(7);
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(9);
    expect(logSpy).toHaveBeenCalledWith("7 * 1 = 7");
    expect(logSpy).toHaveBeenCalledWith("7 * 7 = 49");
  });
});
