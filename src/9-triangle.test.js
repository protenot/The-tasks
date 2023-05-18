import { triangle } from "./9-triangle.js";
describe("triangle", () => {
  it("if a = 4, b = 3, c=5 return 'Треугольник прямоугольный'", () => {
    const a = 4;
    const b = 3;
    const c = 5;

    expect(triangle(a, b, c)).toEqual("Треугольник прямоугольный");
  });

  it("if a = 5, b = 3, c=5 return 'Треугольник прямоугольный'", () => {
    const a = 5;
    const b = 3;
    const c = 5;

    expect(triangle(a, b, c)).toEqual("Треугольник не прямоугольный");
  });
  it("is a function", () => {
    expect(triangle).toBeInstanceOf(Function);
  });
});
