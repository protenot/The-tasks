export function triangle(a, b, c) {
  if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
    return "Треугольник прямоугольный";
  } else {
    return "Треугольник не прямоугольный";
  }
}
