export function dayOfBirthday() {
  const input = prompt("ДД.ММ.ГГГГ:");
  // const input = "13.02.2023";
  const [day, month, year] = input.split(".");
  const array = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const inputDate = new Date(`${year}-${month}-${day}`);
  console.log(inputDate);
  const dayOfWeek = inputDate.getDay();

  console.log(array[dayOfWeek]);
  return array[dayOfWeek];
}
