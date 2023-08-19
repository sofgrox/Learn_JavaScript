// Variables de botones globales a las cuales se les aplicara el evento click
const btnExerciseOne = document.getElementById("btnExercise1");
const btnExerciseTwo = document.getElementById("btnExercise2");
const btnExerciseThree = document.getElementById("btnExercise3");

/**
 * Ejercicio 1:
 * DOM (Document Object Model)
 * suma de dos numeros
 */
function exerciseOne() {
  const number1 = parseFloat(prompt("ingresa el numero 1")); // se convierte a Float al momento que le usuario ingresa el dato
  const number2 = parseFloat(prompt("ingresa el numero 2")); // se convierte a Float al momento que le usuario ingresa el dato
  const addition = number1 + number2; // Se realiza la suma donde + ahora si es un operador matematico al no haber Strings
  alert("La suma es" + addition); // Mostramos el result de la suma
}

/**
 * Ejercicio 2:
 * operaciones matematicas (suma - resta - multiplicación - división)
 */
function exerciseTwo() {
  // Pedimos el numero de operation entre 1 y 4  y lo convertimos a entero
  const operation = parseInt(
    prompt(
      "OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."
    )
  );
  // Validamos que la operación no sea errada o mayor 4 o menor que 1
  // isNan() nos permite validar el el valor de la variable es un NaN osea que no ingresaron numeros
  if (isNaN(operation) || operation > 4 || operation < 1) {
    return alert("Opcion invalida, favor ingresar entre 1 y 4"); // return nos devuelve el alert y no permite seguir ejecutando el código
  }
  // Pedimos los numeros
  const num1 = parseFloat(prompt("Ingrese numero 1"));
  const num2 = parseFloat(prompt("Ingrese numero 2"));
  let result = 0;

  // Validamos que los numeros no sean errados
  if (isNaN(num1) || isNaN(num2)) {
    return alert("Favor ingresar solo numeros");
  }
  // Si todo lo anterior esta OK, hacemos las operationes matematicas
  switch (operation) {
    case 1:
      result = num1 + num2;
      alert("El resultado de la suma es: " + result);
      break;
    case 2:
      result = num1 - num2;
      alert(result);
      break;
    case 3:
      result = num1 * num2;
      alert("El resultado de la multiplicación es: " + result);
      break;
    case 4:
      if (num2 === 0) {
        alert("No es posible dividir por cero");
      } else {
        result = num1 / num2;
        alert("El resultado de la división es: " + result);
      }
      break;
  }
}

/**
 * Ejercicio 3
 * Datos personales
 */
function ejercicioTres() {
  // Datos ingresadas por el usuario
  const userName = prompt("Ingresa tu nombre");
  const dni = prompt("Ingrese tu cedula");
  const age = parseInt(prompt("Ingresa tu edad"));
  // etiquetas H2 a sobrescribir en el HTML
  const userNameHtml = document.getElementById("userName");
  const dniHtml = document.getElementById("dni");
  const ageHtml = document.getElementById("age");
  // Guardar datos en HTML
  userNameHtml.innerHTML = "Tu nombre es: " + userName;
  dniHtml.innerHTML = "Tu cédula es: " + dni;
  ageHtml.innerHTML = "Tu edad es: " + age;
}

/**
 * Eventos click
 * es lo mismo que tener en el html onclick="exerciseOne()"
 */
btnExerciseOne.onclick = function () {
  exerciseOne();
};
btnExerciseTwo.onclick = function () {
  exerciseTwo();
};
btnExerciseThree.onclick = function () {
  ejercicioTres();
};
