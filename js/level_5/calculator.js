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
let operator = ""

// Funciones botones numeros
function boton1() {
  inputNumber.value += "1"
}
function boton2() {
  inputNumber.value += "2"
}
function boton3() {
  inputNumber.value += "3"
}
function boton4() {
  inputNumber.value += "4"
}
function boton5() {
  inputNumber.value += "5"
}
function boton6() {
  inputNumber.value += "6"
}
function boton7() {
  inputNumber.value += "7"
}
function boton8() {
  inputNumber.value += "8"
}
function boton9() {
  inputNumber.value += "9"
}
function boton0() {
  inputNumber.value += "0"
}
// Operadores
function botonSuma() {
  if (inputNumber.value !== "") {
    num1 = parseFloat(inputNumber.value)
    operator = "+"
    inputNumber.value = ""
    console.log(num1, operator); // LOG
  } else {
    
  }
 
}

// Clear all
function botonC() {
  inputNumber.value = ""
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
btnC.onclick = function () {
  botonC();
};
