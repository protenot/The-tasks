import { triangle } from "./9-triangle.js";
describe("triangle", () => {
  it("if a = 4, b = 3, c=5 return 'Треугольник прямоугольный'", () => {
    const catet1 = 4;
    const catet2 = 3;
    const a = 5;

    expect(triangle(a, catet1, catet2)).toEqual("Треугольник прямоугольный");
  });

  it("if a = 5, b = 3, c=5 return 'Треугольник прямоугольный'", () => {
    const catet1 = 5;
    const catet2 = 3;
    const a = 5;

    expect(triangle(a, catet1, catet2)).toEqual("Треугольник не прямоугольный");
  });
  it("is a function", () => {
    expect(triangle).toBeInstanceOf(Function);
  });
});
