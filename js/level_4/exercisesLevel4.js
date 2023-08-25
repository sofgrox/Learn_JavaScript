const btnExerciseOne = document.getElementById("btnExercise1");
const btnExerciseTwo = document.getElementById("btnExercise2");
const btnExerciseThree = document.getElementById("btnExercise3");
/**
 * Ejercicio 1:
 * Ciclo FOR
 */
function ejercicioUno() {
  const asteriscos = parseInt(prompt("Ingresa el numero de asteriscos"));
  let resultado = "";

  if (asteriscos > 100) {
    return alert("Ingresa un dato menos a 100");
  }
  // index siempre inicia en 0  -  i = i + 1
  for (let i = 0; i < asteriscos; i++) {
    resultado += "*";
  }
  console.log(resultado);
}
/**
 * ejercicio 2
 * FOR - Piramide
 */
function ejercicioDos() {
  // Pedir los niveles
  const niveles = parseInt(prompt("Ingrese los niveles de la piramide"));
  // validar limite de niveles
  if (niveles > 20) {
    return alert("Debe ser un rango de 20 o menor");
  }
  // Validamos si es diferente a un numero
  if (isNaN(niveles)) {
    alert("Favor ingrese un numero del 1 al 20");
  } else {
    let espacio = ""; // asigna espacio en la piramide
    // Colocar niveles
    for (let i = 0; i < niveles; i++) {
      espacio = "";

      // Poner espacios en blanco
      for (let j = 0; j < niveles - i; j++) {
        // porque aqui hay un -i
        espacio += " ";
      }

      // Poner asteriscos
      for (let k = 0; k < 2 * i - 1; k++) {
        // porque esta esa formula loca matematica y el -1
        espacio += "*";
      }

      console.log(espacio);
    }
  }
}

function ejercicioTres() {
  const tabla = parseInt(prompt("Ingrese el numero de la tabla que desea ver"));

  for (let i = 1; i <= 10; i++) {
    console.log(tabla + " X " + i + " = " + tabla * i);
  }
}

/**
 * Eventos click
 * es lo mismo que tener en el html onclick="exerciseOne()"
 */
btnExerciseOne.onclick = function () {
  ejercicioUno();
};
btnExerciseTwo.onclick = function () {
  ejercicioDos();
};
btnExerciseThree.onclick = function () {
  ejercicioTres();
};
