//accept two numbers from the user
const firstNumber = Number(prompt("Enter first number"));
const secondNumber = Number(prompt("Enter second number"));

const largerNumber = (firstNumber, secondNumber) => {
  if (firstNumber > secondNumber) {
    document.write(`${firstNumber} is larger than ${secondNumber}`);
  } else {
    document.write(`${secondNumber} is larger than ${firstNumber}`);
  }
};

largerNumber(firstNumber, secondNumber);
