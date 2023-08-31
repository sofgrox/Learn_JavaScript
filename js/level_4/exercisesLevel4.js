const btnExerciseOne = document.getElementById("btnExercise1");
const btnExerciseTwo = document.getElementById("btnExercise2");
const btnExerciseThree = document.getElementById("btnExercise3");
const btnExerciseFour = document.getElementById("btnExercise4");
const btnExerciseFive = document.getElementById("btnExercise5");
const btnExerciseSix = document.getElementById("btnExercise6");
const btnExerciseSeven = document.getElementById("btnExercise7");
const btnExerciseEight = document.getElementById("btnExercise8");
const btnExerciseNine = document.getElementById("btnExercise9");
const btnExerciseTen = document.getElementById("btnExercise10");

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
 * Ejercicio 4
 * Array
 */
function ejercicioCuatro() {
  // Lista de animales
  const animales = ["Perro", "Gato", "Lobo", "Serpiente", "Conejo"];
  // Mostrar el contenido del array
  //alert("Lista de animales: " + animales);
  //alert("Cantidad de animales: " + animales.length); // 5
  //console.log(animales);
  //console.log(animales[2]);
  // Recorrer Array
  let animal = "";
  let encontro = false;
  for (let i = 0; i < animales.length; i++) {
    animal = animales[i];
    if (animal === "Lobo") {
      encontro = true;
      return alert("Si esta el animal");
    }
  }
  if (!encontro) {
    alert("No esta el animal en la lista");
  }
}

function ejercicioCinco() {
  const animales = ["Perro", "Gato", "Lobo", "Serpiente", "Conejo"];

  // Cuando necesitamos recoorrer todo el array
  animales.forEach((e) => {
    console.log(e);
  });
}

function ejercicioSeis() {
  // Array de 6 personas
  const personas = ["Pepita", "Pepito", "Juanita", "Juanito", "Pepe", "Pepa"];
  console.log("Paso 1", personas);
  // Agregar persona nueva en el array (en la ultima posicion)
  personas.push("Paco");
  console.log("Paso 2", personas);
  personas.push("Sara");
  console.log("Paso 3", personas);
  // Eliminar el ultimo elemento de un array
  personas.pop();
  console.log("Paso 4", personas);
  // Agregar elemento al inicio del array
  personas.unshift("Karen");
  console.log("Paso 5", personas);
  // Eliminar el primer elemento de un array
  personas.shift();
  console.log("Paso 6", personas);
  // Eliminar un elemento cualquiera del array
  personas.splice(3, 2);
  console.log("Paso 7", personas);
  // delete personas[2]; (NO UTILIZAR)

  // Nuevo array
  const colores = [
    "Amarillo",
    "Gris",
    "Negro",
    "Blanco",
    "Rojo",
    "Verde",
    "Azul",
  ];
  const nuevoArray = personas.concat(colores);
  console.log("Paso 8", nuevoArray);

  // Repaso
  personas.forEach((t) => {
    console.log("forEach ", t);
  });

  for (let i = 0; i < personas.length; i++) {
    console.log("for normal ", personas[i]);
  }
}

function ejercicioSiete() {
  // Array
  const personas = ["Pepita", "Pepito", "Juanita", "Juanito", "Pepe", "Pepa"];
  // Mostrar todas las personas en el HTML
  const listaPersonas = document.getElementById("personas");
  listaPersonas.innerHTML = "Lista personas: " + personas;

  // Mostrar persona por persona (interpolacion)
  const listaPersonasDiv = document.getElementById("listaPersonas");
  let listaPersonasHtml = "";
  let separadores = "";
  personas.forEach((e) => {
    separadores += '<h2 style="color:red">-----</h2>';
    listaPersonasHtml += `<h2> ${e} </h2>`;
  });
  listaPersonasDiv.innerHTML = listaPersonasHtml + separadores;
}

/**
 * ejercicio 8:
 * While
 */
function ejercicioOcho() {
  let contador = 10;

  while (contador < 10) {
    console.log(`Numero : ${contador}`);
    contador++; // contador = contador + 1
  }

  //respuesta correcta
  let respuesta = prompt("Ingresa la capital del quindio");

  respuesta = respuesta.toLowerCase();

  while (respuesta !== "armenia") {
    alert("Intentalo de nuevo");
    respuesta = prompt("Ingresa la capital del quindio").toLowerCase();
  }
}

/**
 * ejercicio 9:
 * Do While
 */
function ejercicioNueve() {
  let contador = 10;

  do {
    console.log(`Numero : ${contador}`);
    contador++; // contador = contador + 1
  } while (contador < 10);
}

/**
 * Ejercicio 10
 * Input
 */
function ejercicioDiez() {
  // traemos el input
  const campoTexto = document.getElementById("inputText");
  // Agregar texto al input
  campoTexto.value = "Hola Input Text"
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
btnExerciseFour.onclick = function () {
  ejercicioCuatro();
};
btnExerciseFive.onclick = function () {
  ejercicioCinco();
};
btnExerciseSix.onclick = function () {
  ejercicioSeis();
};
btnExerciseSeven.onclick = function () {
  ejercicioSiete();
};
btnExerciseEight.onclick = function () {
  ejercicioOcho();
};
btnExerciseNine.onclick = function () {
  ejercicioNueve();
};
btnExerciseTen.onclick = function () {
  ejercicioDiez();
};
