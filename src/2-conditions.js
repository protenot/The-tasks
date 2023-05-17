export function getMax(a, b) {
  let x;

  if (a > b) {
    console.log(a);
    x = a;
  } else {
    console.log(b);
    x = b;
  }
  return x;
}

export function findMonth(number) {
  const weekDays = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь"
  ];
  const month = weekDays[number - 1];
  return month;
}
