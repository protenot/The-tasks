export function isItDate(string) {
  // проверяем на соответствие даты в формате дд/мм/гггг
  const regexp =
    /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
  return regexp.test(string);
}
export function isItEmail(stringemail) {
  const regexp1 = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
  return regexp1.test(stringemail);
}
