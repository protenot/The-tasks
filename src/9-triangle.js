export function triangle(a, catet1, catet2) {
  if (Math.pow(catet1, 2) + Math.pow(catet2, 2) == Math.pow(a, 2)) {
    return "Треугольник прямоугольный";
  } else {
    return "Треугольник не прямоугольный";
  }
}
