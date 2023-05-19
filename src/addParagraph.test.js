import { addParagraph } from "./addParagraph.js";

describe("addParagraph", () => {
  // задаем переменные для проверки wrapper
  let el;
  let input;
  let button;
  // перед каждым тестом будем создавать новый div
  beforeEach(() => {
    el = document.createElement("div");
    input = el.querySelector("input");
  });
  function onClickButton() {
    button = el.querySelector("button");
    input = el.querySelector("input");
    button.click();
  }
  it("is a function", () => {
    expect(addParagraph).toBeInstanceOf(Function);
  });

  // проверяем, что создается разметка
  it("creates markup", () => {
    addParagraph(el);
    // проверяем, что наш элемент содержит input
    expect(el.querySelector("input")).not.toBe(null);
    // проверяем, что наш элемент содержит button
    expect(el.querySelector("button")).not.toBe(null);
    // ожидаем, что кнопка скрыта по умолчанию
    expect(el.querySelector("button").hidden).toBe(true);
    // ожидаем, что создаются параграфы
    expect([...el.querySelectorAll("p")].map((p) => p.innerText)).toEqual([
      "1",
      "2",
      "3"
    ]);
  });
  it("shoes button when input with value", () => {
    // вызываем функцию
    addParagraph(el);
    // находим input и задаем ему текст
    el.querySelector("input").value = "123";
    // передаем событие input
    el.querySelector("input").dispatchEvent(new Event("input"));
    // ожидаем, что кнопка покажется
    expect(el.querySelector("button").hidden).toBe(false);
  });
  it("hides button when input without value", () => {
    // вызываем функцию
    addParagraph(el);
    // находим input и задаем пусто
    el.querySelector("input").value = "";
    // передаем событие input
    el.querySelector("input").dispatchEvent(new Event("input"));
    // ожидаем, что кнопка покажется
    expect(el.querySelector("button").hidden).toBe(true);
  });
  it("add paragraphs from bigining", () => {
    addParagraph(el);
    el.querySelector("input").value = "Math(random)";
    onClickButton();
    expect([...el.querySelectorAll("p")].map((p) => p.innerText)).toEqual[
      (el.querySelector("input").value, "1", "2", "3")
    ];
  });
  it("clear input after click", () => {
    addParagraph(el);
    el.querySelector("input").value = "Math(random)";
    onClickButton();
    expect(input.value).toBe("");
    expect(button.hidden).toBe(true);
  });
});
