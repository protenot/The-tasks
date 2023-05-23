import { addInObject } from "./4-objects.js";

describe("addInObject", () => {
  beforeEach(() => {
    jest.spyOn(window, "prompt").mockImplementation(() => 26);
    addInObject();
  });
  it("is a function", () => {
    expect(addInObject).toBeInstanceOf(Function);
  });

  // it("testing prompt", ()=>{

  // jest.spyOn(window, 'prompt').mockReturnValue(26);

  // expect ( addInObject().toBeInstanceOf(Object))

  // });
  test("Console log should have been called", () => {
    const logSpy = jest.spyOn(global.console, "log");

    addInObject();

    expect(logSpy).toHaveBeenCalledTimes(2);

    expect(logSpy).toHaveBeenCalledWith({
      name: "Jhon",
      age: 26,
      role: "admin",
    });
  });

  test("addInObject", () => {
    expect(addInObject()).toBeInstanceOf(Object);
  });
  test("addInObject", () => {
    expect(addInObject()).not.toContainEqual({ name: "Jhon", age: 26 });
  });
});
