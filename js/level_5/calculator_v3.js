/**
 Aquí, estamos accediendo a dos elementos del Documento (representado por *la página web) usando su atributo id.
 numberInput será una referencia al elemento con el ID inputNumber y historyElement se referirá al elemento con el ID history.
 */
const numberInput = document.getElementById("inputNumber");
const historyElement = document.getElementById("history");
/**
 Se están inicializando cuatro variables globales:
firstNumber y secondNumber: Guardarán los números con los que estamos trabajando.
currentOperator: Guardará el operador actual (por ejemplo, '+', '-', '*', '/').
operationHistory: Es un arreglo que guardará el historial de operaciones realizadas 
 */
let firstNumber = 0;
let secondNumber = 0;
let currentOperator = "";
let operationHistory = [];
/**
 Estas dos constantes son arreglos de objetos que contienen configuraciones para los botones numéricos y de operación respectivamente. Cada objeto tiene un id (que coincide con el ID de un botón en el HTML) y un value (que es el valor que representa el botón, ya sea un número o un operador).
 */
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
  { id: "btnSum", value: "+" },
  { id: "btnSubtract", value: "-" },
  { id: "btnMultiply", value: "*" },
  { id: "btnDivide", value: "/" },
];
/**
Propósito: Esta función tiene la responsabilidad de agregar un valor al campo de entrada de la calculadora.
if (secondNumber): Evalúa si secondNumber tiene un valor que sea considerado "truthy" (e.g., cualquier número excepto 0).
secondNumber = 0;: Si es el caso, resetea el valor de secondNumber a 0.
numberInput.value = value;: Establece el valor del campo de entrada (representado por numberInput.value) al valor pasado a la función. Esta lógica parece estar diseñada para "empezar de nuevo" si ya teníamos un segundo número.
else: Si secondNumber no tiene un valor "truthy"...
numberInput.value += value;: Concatena (añade) el valor al campo de entrada.
 */
function appendToInput(value) {
  if (secondNumber) {
    secondNumber = 0;
    numberInput.value = value;
  } else {
    numberInput.value += value;
  }
}
/**
Propósito: Esta función establece la operación que el usuario desea realizar.
if (numberInput.value): Evalúa si el campo de entrada tiene un valor.
firstNumber = parseFloat(numberInput.value);: Convierte el valor actual del campo de entrada a un número de punto flotante y lo asigna a firstNumber.
currentOperator = value;: Establece el operador actual (e.g., '+', '-') al valor pasado a la función.
numberInput.value = "";: Limpia el campo de entrada para que el usuario pueda ingresar el siguiente número.
updateDisplay(firstNumber, currentOperator);: Llama a la función updateDisplay para actualizar la pantalla con el primer número y el operador seleccionado.
 */
function setOperation(value) {
  if (numberInput.value) {
    firstNumber = parseFloat(numberInput.value);
    currentOperator = value;
    numberInput.value = "";
    updateDisplay(firstNumber, currentOperator);
  }
}
/**
Propósito: Actualiza el historial de la calculadora mostrando la operación actual.
historyElement.innerHTML: Accede al contenido interno del elemento que muestra el historial.
${firstNum} ${operation} ${secondNum} ${result}: Usa "template literals" para crear una cadena que represente la operación actual y su resultado.
 */
function updateDisplay(firstNum, operation, secondNum = "", result = "") {
  historyElement.innerHTML = `${firstNum} ${operation} ${secondNum} ${result}`;
}

/**
Propósito: Realiza el cálculo basado en el primer número, el segundo número y el operador actual.
if (numberInput.value && currentOperator): Verifica si hay un valor en el campo de entrada y un operador seleccionado.
secondNumber = parseFloat(numberInput.value);: Convierte el valor en el campo de entrada a un número y lo asigna a secondNumber.
const result = calculate(firstNumber, secondNumber, currentOperator);: Llama a la función calculate para obtener el resultado.
numberInput.value = result;: Muestra el resultado en el campo de entrada.
addToHistory(firstNumber, currentOperator, secondNumber, result);: Añade la operación actual al historial.
 */
function performCalculation() {
  if (numberInput.value && currentOperator) {
    secondNumber = parseFloat(numberInput.value);
    const result = calculate(firstNumber, secondNumber, currentOperator);
    numberInput.value = result;
    addToHistory(firstNumber, currentOperator, secondNumber, result);
  }
}
/**
Propósito: Realiza un cálculo matemático dependiendo del operador proporcionado.
switch (operation): Evalúa el operador actual.
case "+":: Si el operador es suma...
return a + b;: Devuelve el resultado de sumar a y b.
case "-":: Si el operador es resta...
return a - b;: Devuelve el resultado de restar a y b.
case "*":: Si el operador es multiplicación...
return a * b;: Devuelve el resultado de multiplicar a y b.
case "/":: Si el operador es división...
return b ? a / b : "Cannot divide by zero";: Si b es diferente de cero, devuelve el resultado de dividir a por b. Si b es cero, devuelve el mensaje "Cannot divide by zero" indicando que no se puede dividir por cero.
default:: Si no hay ningún operador que coincida...
return 0;: Devuelve 0 como resultado por defecto.
 */
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
/**
Propósito: Aplica un porcentaje al número en el campo de entrada.
if (firstNumber && currentOperator && numberInput.value): Verifica si hay un primer número, un operador y un valor en el campo de entrada.
secondNumber = parseFloat(numberInput.value);: Convierte el valor en el campo de entrada a un número y lo asigna a secondNumber.
numberInput.value = secondNumber / 100;: Divide secondNumber por 100 y muestra el resultado en el campo de entrada.
 */
function applyPercentage() {
  if (firstNumber && currentOperator && numberInput.value) {
    secondNumber = parseFloat(numberInput.value);
    numberInput.value = secondNumber / 100;
  }
}
/**
 Propósito: Calcula la raíz cuadrada del número en el campo de entrada.
if (numberInput.value): Verifica si hay un valor en el campo de entrada.
firstNumber = parseFloat(numberInput.value);: Convierte el valor en el campo de entrada a un número y lo asigna a firstNumber.
numberInput.value = Math.sqrt(firstNumber);: Calcula la raíz cuadrada de firstNumber usando el método Math.sqrt() y muestra el resultado en el campo de entrada.
 */
function calculateSquareRoot() {
  if (numberInput.value) {
    firstNumber = parseFloat(numberInput.value);
    numberInput.value = Math.sqrt(firstNumber);
  }
}
/**
Propósito: Añade la operación actual al historial de operaciones.
const operationString = ...: Crea una cadena que representa la operación realizada y su resultado en un formato de encabezado <h2>.
operationHistory.push(operationString);: Añade la cadena de la operación al array operationHistory.
historyElement.innerHTML = operationHistory.join("");: Une todas las cadenas en el array operationHistory y las establece como el contenido interno de historyElement.
 */
function addToHistory(firstNum, operation, secondNum, result) {
  const operationString = `<h2> ${firstNum} ${operation} ${secondNum} = ${result} </h2>`;
  operationHistory.push(operationString);
  historyElement.innerHTML = operationHistory.join("");
}
/**
 Propósito: Limpia todos los valores y el historial de la calculadora.
numberInput.value = "";: Limpia el valor del campo de entrada.
firstNumber = 0;: Resetea firstNumber a 0.
secondNumber = 0;: Resetea secondNumber a 0.
currentOperator = "";: Limpia el operador actual.
operationHistory = [];: Limpia el array del historial de operaciones.
historyElement.innerHTML = "";: Limpia el contenido del elemento que muestra el historial.
 */
function clearCalculator() {
  numberInput.value = "";
  firstNumber = 0;
  secondNumber = 0;
  currentOperator = "";
  operationHistory = [];
  historyElement.innerHTML = "";
}
/**
 numericButtonsConfig: Es un array de objetos, donde cada objeto representa un botón numérico con su respectivo ID y valor.
.forEach((button) => { ... }: Este método itera sobre cada objeto (botón) en numericButtonsConfig.
document.getElementById(button.id): Selecciona el elemento en el DOM con el ID especificado en el objeto actual del array.
.addEventListener("click", ...): Asigna un evento de click al botón seleccionado.
() => appendToInput(button.value): Cuando se hace clic en el botón, se llama a la función appendToInput con el valor del botón actual como argumento. En otras palabras, si haces clic en el botón con el valor "1", la función appendToInput se llamará con "1" como argumento.
 */
numericButtonsConfig.forEach((button) => {
  document
    .getElementById(button.id)
    .addEventListener("click", () => appendToInput(button.value));
});
/**
 operationButtonsConfig: Es un array de objetos similar a numericButtonsConfig, pero para botones de operación (como "+", "-", "*", "/").
El resto de la lógica es análoga a la explicada para numericButtonsConfig, pero en lugar de agregar números al input, se configura una operación.
 */
operationButtonsConfig.forEach((button) => {
  document
    .getElementById(button.id)
    .addEventListener("click", () => setOperation(button.value));
});
/**
 Selecciona el botón con el ID "btnEqual".
Asigna un evento de click que, cuando se presione el botón, llamará a la función performCalculation que realiza la operación matemática.
 */
document
  .getElementById("btnEqual")
  .addEventListener("click", performCalculation);
/**
 Selecciona el botón con el ID "btnClear".
Al hacer clic en este botón, se llama a la función clearCalculator, que restablece la calculadora.
 */
document.getElementById("btnClear").addEventListener("click", clearCalculator);
/**
 Selecciona el botón con el ID "btnPercentage".
Al hacer clic en este botón, se llama a la función applyPercentage que convierte el número ingresado en su valor de porcentaje.
 */
document
  .getElementById("btnPercentage")
  .addEventListener("click", applyPercentage);
/**
   Selecciona el botón con el ID "btnSquareRoot".
Al hacer clic en este botón, se llama a la función calculateSquareRoot que calcula la raíz cuadrada del número ingresado.
   */
document
  .getElementById("btnSquareRoot")
  .addEventListener("click", calculateSquareRoot);
