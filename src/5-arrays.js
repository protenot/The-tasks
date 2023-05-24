export const array = [];
let digit = 0;
for (let i = 0; i <= 9; i++) {
  digit = digit + 1;
  array.push(digit);
}
export let sumDigits = 0;
export const anotherArr = [];
array.forEach(function (item) {
  sumDigits = sumDigits + item;
  anotherArr.push(item * 2);
});
console.log(sumDigits);
console.log(anotherArr);
