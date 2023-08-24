const btnExerciseOne = document.getElementById("btnExercise1");
/**
 * Ejercicio 1:
 * Ciclo FOR
 */
function ejercicioUno() {
  let escalones = 5;
  let piramide = "";
  // index siempre inicia en 0  -  i = i + 1
  for (let i = 0; i < escalones; i++) {
    piramide = piramide + "*";
  }
  console.log(piramide);
}

/**
 * Eventos click
 * es lo mismo que tener en el html onclick="exerciseOne()"
 */
btnExerciseOne.onclick = function () {
  ejercicioUno();
};
