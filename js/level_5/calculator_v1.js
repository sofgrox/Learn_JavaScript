// elementos del HTML
const inputNumber = document.getElementById("inputNumber");
// Button numbers
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
// Operation buttons
const btnDiv = document.getElementById("btnDiv");
const btnMulti = document.getElementById("btnMulti");
const btnresta = document.getElementById("btnresta");
const btnSuma = document.getElementById("btnSuma");
const btnPorcentaje = document.getElementById("btnPorcentaje");
// Other buttons
const btnCe = document.getElementById("btnCe");
const btnC = document.getElementById("btnC");
const btnDel = document.getElementById("btnDel");
const btnIgual = document.getElementById("btnIgual");
const btnPunto = document.getElementById("btnPunto");
// Numbers
let num1 = 0;
let num2 = 0;
let operator = "";

// Funciones botones numeros
function boton1() {
  inputNumber.value += "1";
}
function boton2() {
  inputNumber.value += "2";
}
function boton3() {
  inputNumber.value += "3";
}
function boton4() {
  inputNumber.value += "4";
}
function boton5() {
  inputNumber.value += "5";
}
function boton6() {
  inputNumber.value += "6";
}
function boton7() {
  inputNumber.value += "7";
}
function boton8() {
  inputNumber.value += "8";
}
function boton9() {
  inputNumber.value += "9";
}
function boton0() {
  inputNumber.value += "0";
}
// Operadores
function botonSuma() {
  if (inputNumber.value !== "") {
    num1 = parseFloat(inputNumber.value);
    operator = "+";
    inputNumber.value = "";
  }
}
function botonResta() {
  if (inputNumber.value !== "") {
    num1 = parseFloat(inputNumber.value);
    operator = "-";
    inputNumber.value = "";
  }
}
function botonMultiplicar() {
  if (inputNumber.value !== "") {
    num1 = parseFloat(inputNumber.value);
    operator = "*";
    inputNumber.value = "";
  }
}
function botonDividir() {
  if (inputNumber.value !== "") {
    num1 = parseFloat(inputNumber.value);
    operator = "/";
    inputNumber.value = "";
  }
}
function botonIgual() {
  if (inputNumber.value !== "" && operator !== "") {
    num2 = parseFloat(inputNumber.value);
    console.log(num1, operator, num2); // LOG -
    operaciones(num1, num2, operator);
  }
}

// Operaciones
function operaciones(numero1, numero2, operador) {
 
  switch (operador) {
    case "+":
      inputNumber.value = numero1 + numero2;
      break;
    case "-":
      inputNumber.value = numero1 - numero2;
      break;
    case "*":
      inputNumber.value = numero1 * numero2;
      break;
    case "/":
      if (num2 === 0) {
        inputNumber.value = "No se puede dividir entre cero";
      } else {
        inputNumber.value = numero1 / numero2;
      }
      break;

    default:
      break;
  }
 
}

// Clear all
function botonC() {
  inputNumber.value = "";
  num1 = 0;
  num2 = 0;
  operator = "";
}

// onclick
btn1.onclick = function () {
  boton1();
};
btn2.onclick = function () {
  boton2();
};
btn3.onclick = function () {
  boton3();
};
btn4.onclick = function () {
  boton4();
};
btn5.onclick = function () {
  boton5();
};
btn6.onclick = function () {
  boton6();
};
btn7.onclick = function () {
  boton7();
};
btn8.onclick = function () {
  boton8();
};
btn9.onclick = function () {
  boton9();
};
btn0.onclick = function () {
  boton0();
};
btnSuma.onclick = function () {
  botonSuma();
};
btnResta.onclick = function () {
  botonResta();
};
btnMulti.onclick = function () {
  botonMultiplicar();
};
btnDiv.onclick = function () {
  botonDividir();
};

btnIgual.onclick = function () {
  botonIgual();
};
btnC.onclick =  () => {
  botonC();
};

// btnC.addEventListener('click', function () { 
//   botonC();
// })

