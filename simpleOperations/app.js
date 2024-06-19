//get html references
const input1 = document.querySelector(".js-num1");
const input2 = document.querySelector(".js-num2");
const buttons = document.querySelectorAll("button");
const resultScreen = document.querySelector(".result");

const multiplyFunc = (num1, num2) => {
  const multiply = num1 * num2;
  resultScreen.innerHTML = `${num1} multiplied by ${num2} equals: ${multiply}`;
};
const divideFunc = (num1, num2) => {
  const divide = num1 / num2;
  resultScreen.innerHTML = `${num1} divided by ${num2} equals: ${divide}`;
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const num1 = input1.value;
    const num2 = input2.value;
    if (e.target.className === "multiplyBtn") {
      multiplyFunc(num1, num2);
    }
    if (e.target.className === "divideBtn") divideFunc(num1, num2);
  });
});
