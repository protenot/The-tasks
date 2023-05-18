// let input=prompt ('ДД.ММ.ГГГГ');
const input = "13.02.2023";
export const [day, month, year] = input.split(".");
export const array = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
];
export const inputDate = new Date(`${year}-${month}-${day}`);
console.log(inputDate);
export const dayOfWeek = inputDate.getDay();

console.log(array[dayOfWeek]);
