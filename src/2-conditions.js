export function getMax(a, b) {
  if (a > b) {
    console.log(a);
    return a;
  } else {
    console.log(b);
    return b;
  }
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
    "декабрь",
  ];

  return weekDays[number - 1];
}
