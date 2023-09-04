/**
 * Funciones
 * Encapsula el código y no se ejecuta hasta que sea llamado
 * en este caso sera llamado con un evento click en el HTML - onclick
 */

/**
 * Ejercicio 1:
 * uso de las funciones
 */
function exerciseOne() {
  // El prompt nos permite ingresar datos por medio del navegador
  const userName = prompt("Ingrese su nombre");
  alert("Tu nombre de usuario ingresado es: " + userName);
}

/**
 * Ejercicio 2:
 * Condicional if/else
 * El ejercicio consiste en que dependiendo de la edad el usuario no puede ver un catalogo de peliculas violentas
 */
function exerciseTwo() {
  const age = prompt("Ingresa tu edad");
  // si la edad es mayor a 16 puede ver el catalogo, de lo contrario se va al else
  if (age >= "16") {
    // Se uso el operador >= (aunque es string lo detecta como numero)
    alert("Se habilito el catalogo de peliculas violentas");
  } else {
    alert("No tienes permiso de ver este catalogo");
  }
}

/**
 * ejercicio 3:
 * Operadores logicos
 * el mismo ejercicio 2 pero con una condicion adicional y es que los habitantes del pais alemania tiene prohibido ver el catalogo
 * && - operador lógico Y, se utiliza para decir que una condicion y otra u otras condiciones se deben cumplir
 * || - operador lógico O, se utiliza para decir que una condición o cualquier otra se puede cumplir y no es necesario que se cumplan todas con solo una basta
 */
function exerciseThree() {
  const age = prompt("Ingresa tu edad");
  const country = prompt("Ingresa tu pais").toLowerCase(); // Usamos el toLowerCase para convertir el texto en minuscula

  // Se usa el operado logico && que exige que todas las condiciones se cumplan
  if (age >= "16" && country !== "alemania") {
    alert("Se habilito el catalogo de peliculas violentas");
  } else {
    alert("No tienes permiso de ver este catalogo");
  }
}

/**
 * ejercicio 3:
 * Operadores logicos
 * Dependiendo de un día a la semana diremos si es entre semana o un fin de semana
 * && - operador lógico Y, se utiliza para decir que una condicion y otra u otras condiciones se deben cumplir
 * || - operador lógico O, se utiliza para decir que una condición o cualquier otra se puede cumplir y no es necesario que se cumplan todas con solo una basta
 */
function exerciseFour() {
  let day = prompt("Ingrese día");
  // Validamos si el dato es null o vacio
  if (day === null || day === "") {
    alert("No ingresaste un día");
  } else {
    day = day.toLowerCase(); // convertimos a minusculas
    // Se usa el operador logico ||
    if (
      day === "lunes" ||
      day === "martes" ||
      day === "miercoles" ||
      day === "miércoles" ||
      day === "jueves" ||
      day === "viernes"
    ) {
      alert("Es un día entre semana");
    } else {
      // los IF/ELSE dentro de un else o un IF se conocen como if anidados
      if (day === "sabado" || day === "sábado" || day === "domingo") {
        alert("Es un fin de semana");
      } else {
        alert("Favor ingresar solo días de la semana"); // si el valor ingresado no es un día a la semana
      }
    }
  }
}

// APUNTES:
/**
 * Operadores de comparación
 *  (==) comparamos valores sin importar el tipo de dato
 *  (===) comparamos valores respetando el tipo de dato
 *  (>) Mayor que 'solo para numeros'
 *  (<) Menor que 'solo para numeros'
 *  (>=) Mayor igual 'solo para numeros'
 *  (<=) Menor igual 'solo para numeros'
 *  (!=) Diferente no respeta tipos de datos
 *  (!==) Diferente respetando tipo de datos
 */

/**
 * toLowerCase() - Convierte el texto a minuscula
 * toUpperCase() - Convierte el texto a mayuscula
 * null - tipo de dato nulo
 * "" - Tipo de dato vacio
 * undefine - Tipo de dato indefinido
 */

// Las tildes se tienen que validar a parte ya que en ingles no existen
