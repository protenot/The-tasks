export const button = document.querySelector("button");

export const input = document.querySelector(".text-field");
if (button) {
  button.hidden = true;
}
input &&
  input.addEventListener("keyup", (e) => {
    if (input.value) {
      button.hidden = false;
    } else {
      button.hidden = true;
    }
  });
button && button.addEventListener("click", addParagraph);
export function addParagraph() {
  const input = document.querySelector(".text-field");
  if (input) {
    const text = input.value;
    getElementToList(text);
    clearField();
    return text;
  }
}

export function getElementToList(text) {
  const paragraph = document.createElement("p");
  paragraph.innerText = text;
  const blockParagraphs = document.querySelector(".block-with-paragraphs");
  if (blockParagraphs) {
    blockParagraphs.append(paragraph);
  }
}
export function clearField() {
  if (input) {
    input.value = "";
    button.hidden = true;
  }
}
