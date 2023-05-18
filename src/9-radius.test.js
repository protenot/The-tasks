import { circumference, areaOfCircle } from "./9-radius.js";
describe("circumference", () => {
  it("if radius 5 Длина окружности :31", () => {
    expect(circumference).toBe(31);
  });
  it("if radius 5 Площадь круга :78", () => {
    expect(areaOfCircle).toBe(78);
  });
});
