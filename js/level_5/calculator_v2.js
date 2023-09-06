// Input number
const inputNumber = document.getElementById("inputNumber");
// variables utiles
let num1 = 0;
let num2 = 0;
let operator = "";
// variables de historial
let num1Temp = 0;
let num2Temp = 0;
let operatorTemp = "";
let resultTemp = 0;

// botones numericos
const buttons = [
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
// botones operaciones
const operations = [
  { id: "btnSuma", value: "+" },
  { id: "btnResta", value: "-" },
  { id: "btnMulti", value: "*" },
  { id: "btnDiv", value: "/" },
];
// Recorrer botones
buttons.forEach((e) => {
  document
    .getElementById(e.id)
    .addEventListener("click", () => appendToInput(e.value));
});
// operaciones
operations.forEach((e) => {
  document
    .getElementById(e.id)
    .addEventListener("click", () => setOperation(e.value));
});
// funciones
function appendToInput(value) {
  if (num2) {
    num2 = 0;
    inputNumber.value = value;
  } else {
    inputNumber.value += value;
  }
}
function setOperation(value) {
  if (inputNumber.value !== "") {
    num1 = parseFloat(inputNumber.value);
    operator = value;
    inputNumber.value = "";
    // Cache num1 y operator
    document.getElementById("cache").innerHTML = num1 + " " + operator;
  }
}
// ejecutar operaciones
function operaciones() {
  if (inputNumber.value !== "" && operator !== "") {
    num2 = parseFloat(inputNumber.value);
    switch (operator) {
      case "+":
        inputNumber.value = num1 + num2;
        break;
      case "-":
        inputNumber.value = num1 - num2;
        break;
      case "*":
        inputNumber.value = num1 * num2;
        break;
      case "/":
        inputNumber.value =
          num2 === 0 ? "No se puede dividir entre cero" : num1 / num2;
        break;
    }
    // cache
    document.getElementById("cache").innerHTML +=
      num2 + " = " + inputNumber.value;
  }
}
const percent = () => {
  if (num1 && operator && inputNumber.value) {
    num2 = parseFloat(inputNumber.value);
    inputNumber.value = num2 / 100;
  }
};
const sqrt = () => {
  if (inputNumber.value) {
    num1 = parseFloat(inputNumber.value);
    inputNumber.value = Math.sqrt(num1);
  }
};
// punto
// borrar caracter por caracter

// Clear all
function botonC() {
  inputNumber.value = "";
  num1 = 0;
  num2 = 0;
  operator = "";
}
// enventos
document
  .getElementById("btnIgual")
  .addEventListener("click", () => operaciones());
document.getElementById("btnC").addEventListener("click", () => botonC());
document
  .getElementById("btnPorcentaje")
  .addEventListener("click", () => percent());
document.getElementById("btnRaiz").addEventListener("click", () => sqrt());

//NOTA: historial razi cuadra y borrar casilla
