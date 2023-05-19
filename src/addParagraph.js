export function addParagraph(wrapper) {
  const input = document.createElement("input");
  wrapper.append(input);
  const button = document.createElement("button");
  button.innerText = "Добавьте текст";
  wrapper.append(button);
  const list = document.createElement("div");
  list.classList.add("list");
  wrapper.append(list);

  const p1 = document.createElement("p");
  p1.innerText = "1";
  list.append(p1);
  const p2 = document.createElement("p");
  p2.innerText = "2";
  list.append(p2);
  const p3 = document.createElement("p");
  p3.innerText = "3";
  list.append(p3);

  button.hidden = true;
  //  на input вешаем обработчик событий
  input.addEventListener("input", () => {
    if (input.value) {
      button.hidden = false;
    } else {
      button.hidden = true;
    }
  });

  button.addEventListener("click", () => {
    const p = document.createElement("p");
    p.innerHTML = input.value;
    list.prepend(p);
    input.value = "";
    button.hidden = true;
  });
}
