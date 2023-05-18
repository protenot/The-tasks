import {
  button,
  input,
  addParagraph,
  getElementToList,
  clearField
} from "./index.js";
afterAll(addParagraph);

describe("everithing", () => {
  it("button is exist", () => {
    expect(button).toBeDefined();
    // expect(button.innerHTML).toBe('Button');
  });
  it("input is exist", () => {
    expect(input).toBeDefined();
  });

  // it ("button.hidden is exist",() =>{
  // let bh = button.hidden;
  //   expect(bh).toBeDefined();
  // });
  it("addParagraph is a function", () => {
    expect(addParagraph).toBeInstanceOf(Function);
  });
  it("getElementToList is a function", () => {
    expect(getElementToList).toBeInstanceOf(Function);
  });
  it("getElementToList adds paragraphs", () => {
    const el = input;

    getElementToList(el);
    if (el) {
      expect(el.querySelector("p")).toBeTruthy();
    }
  });
  it("clearField is a function", () => {
    expect(clearField).toBeInstanceOf(Function);
  });
  it("clearField is clear", () => {
    const input1 = input;
    clearField(input1);
    if (input1) {
      input1.querySelector("input").innerHTML = "something";
      input1.querySelector("button").click();

      expect(input1.querySelector("input").innerHTML).toBe("");
    }
  });

  it("addParagraph add paragraph", () => {
    const input2 = input;
    if (input2) {
      input2.value = "Параграф 4";
      const button2 = button;
      if (button2) {
        button2.click();
      }
      addParagraph(input2, button2);
      expect(input2.querySelector("p").innerHTML.toBe("Параграф 4"));
    }
    // const mock = jest.fn();
    // [1].addParagraph(x => mock(x));
    // expect(mock).toEqual(expect.anything());
  });
  // it ("getElementToList to Be Called ", ()=>{
  //   const text1 = jest.fn();
  // getElementToList(text1);
  // expect(text1).toHaveBeenCalled();

  // });
});
