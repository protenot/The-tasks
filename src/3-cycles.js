export function sum() {
  let sumAll = 0;
  for (let i = 50; i <= 100; i++) {
    sumAll = sumAll + i;
  }
  console.log(sumAll);
  return sumAll;
}

export function multyTable(number) {
  // let number = 7;
  for (let i = 1; i <= 9; i++) {
    console.log(number + " * " + i + " = " + i * number);
  }
}
