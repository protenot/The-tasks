import { addInObject } from "./4-objects.js";

describe("addInObject", () => {
  beforeEach(() => {
    jest.spyOn(window, "prompt").mockImplementation(() => 26);
    addInObject();
  });
  it("is a function", () => {
    expect(addInObject).toBeInstanceOf(Function);
  });

  test("prompt working and object user has name: Jhon and age:26 ", () => {
    const logSpy = jest.spyOn(global.console, "log");

    addInObject();

    expect(logSpy).toHaveBeenCalled();

    expect(logSpy).toHaveBeenCalledWith({
      name: "Jhon",
      age: 26,
    });
  });

  it("admin has name:Jhon, age: 26, role:admin ", () => {
    expect(addInObject()).toEqual({ age: 26, name: "Jhon", role: "admin" });
  });

  it("admin is object", () => {
    expect(addInObject()).toBeInstanceOf(Object);
  });
  it("admin not equal user", () => {
    expect(addInObject()).not.toContainEqual({ name: "Jhon", age: 26 });
  });
});
