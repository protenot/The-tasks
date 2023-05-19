import { addInObject } from "./4-objects.js";

describe("addInObject", () => {
  it("is a function", () => {
    expect(addInObject).toBeInstanceOf(Function);
  });
  test("Console log should have been called", () => {
    const logSpy = jest.spyOn(global.console, "log");

    addInObject();

    expect(logSpy).toHaveBeenCalledTimes(2);

    expect(logSpy).toHaveBeenCalledWith({
      name: "Jhon",
      age: 25,
      role: "admin"
    });
  });

  test("addInObject", () => {
    expect(addInObject()).toBeInstanceOf(Object);
  });
  test("addInObject", () => {
    expect(addInObject()).not.toContainEqual({ name: "Jhon", age: 25 });
  });

  // it ('admin is new array',()=>{

  // expect(admin).toContainEqual({ 'name': 'Jhon', 'age': 25, 'role': 'admin'});

  // })
});
