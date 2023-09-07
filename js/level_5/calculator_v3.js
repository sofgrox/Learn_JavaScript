// Elements
const numberInput = document.getElementById("inputNumber");
const historyElement = document.getElementById("history");

// State
let firstNumber = 0;
let secondNumber = 0;
let currentOperator = "";
let operationHistory = [];

// Numeric and operation buttons configuration
const numericButtonsConfig = [
  { id: "btn1", value: "1" },
  { id: "btn2", value: "2" },
  { id: "btn3", value: "3" },
  { id: "btn4", value: "4" },
  { id: "btn5", value: "5" },
  { id: "btn6", value: "6" },
  { id: "btn7", value: "7" },
  { id: "btn8", value: "8" },
  { id: "btn9", value: "9" },
  { id: "btn0", value: "0" },
];

const operationButtonsConfig = [
  { id: "btnSubtract", value: "-" },
  { id: "btnMultiply", value: "*" },
  { id: "btnDivide", value: "/" },
];

function appendToInput(value) {
  if (secondNumber) {
    secondNumber = 0;
    numberInput.value = value;
  } else {
    numberInput.value += value;
  }
}

function setOperation(value) {
  if (numberInput.value) {
    firstNumber = parseFloat(numberInput.value);
    currentOperator = value;
    numberInput.value = "";
    updateDisplay(firstNumber, currentOperator);
  }
}

function updateDisplay(firstNum, operation, secondNum = "", result = "") {
  historyElement.innerHTML = `${firstNum} ${operation} ${secondNum} ${result}`;
}

function performCalculation() {
  if (numberInput.value && currentOperator) {
    secondNumber = parseFloat(numberInput.value);
    const result = calculate(firstNumber, secondNumber, currentOperator);
    numberInput.value = result;
    addToHistory(firstNumber, currentOperator, secondNumber, result);
  }
}

function calculate(a, b, operation) {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b ? a / b : "Cannot divide by zero";
    default:
      return 0;
  }
}

function clearCalculator() {
  numberInput.value = "";
  firstNumber = 0;
  secondNumber = 0;
  currentOperator = "";
}

function applyPercentage() {
  if (firstNumber && currentOperator && numberInput.value) {
    secondNumber = parseFloat(numberInput.value);
    numberInput.value = secondNumber / 100;
  }
}

function calculateSquareRoot() {
  if (numberInput.value) {
    firstNumber = parseFloat(numberInput.value);
    numberInput.value = Math.sqrt(firstNumber);
  }
}

function addToHistory(firstNum, operation, secondNum, result) {
  const operationString = `<h2> ${firstNum} ${operation} ${secondNum} = ${result} </h2>`;
  operationHistory.push(operationString);
  historyElement.innerHTML = operationHistory.join("");
}

// Attach Event listeners
numericButtonsConfig.forEach((button) => {
  document
    .getElementById(button.id)
    .addEventListener("click", () => appendToInput(button.value));
});

operationButtonsConfig.forEach((button) => {
  document
    .getElementById(button.id)
    .addEventListener("click", () => setOperation(button.value));
});

document
  .getElementById("btnEqual")
  .addEventListener("click", performCalculation);
document.getElementById("btnClear").addEventListener("click", clearCalculator);
document
  .getElementById("btnPercentage")
  .addEventListener("click", applyPercentage);
document
  .getElementById("btnSquareRoot")
  .addEventListener("click", calculateSquareRoot);
