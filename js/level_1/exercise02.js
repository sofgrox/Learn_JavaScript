/**
 * Ejercicio 2:
 * Variables (var - let - const)
 * Se debe usar el estandar camelCase para variables y archivos en JS
 */

var userName = "Pepita"; // Se debe evitar su uso ya que deja volver a declarar la variable
let player = "Pepito"; // No permite volver a declarar la variable
const nickName = "Sofgrox"; // No permite volver a declarar la variable y no permite cambiar el valor de la variable

// Mostrar contenido de las variables
console.log(userName, player, nickName);

// Mostrar contenido de las variables con concatenación (+) y salto de linea usando "\n"
console.log(
  "Variable usando var: " +
    userName +
    "\n" +
    "Usando let: " +
    player +
    "\n" +
    "Usando const: " +
    nickName
);

/**
 * Tipos de datos
 * String: cadena de texto - caracteres
 * int - numeros enteros
 * float - numeros flotantes admite decimales
 * booleano - maneja true o false
 */

let userNickName = "Pepita"; // String
let age = 35; // Int
const dni = "2345677854"; // String (no se hace operaciones matematicas con el)
let childrens = false; // Booleano
let celPhone = "2345676732"; // String (no se hace operaciones matematicas con el)
let height = 1.5; // Float
let salary = 3000000; // Int - puede ser float tambien si se usa decimal

/**
 * APUNTES:
 * camelCase: userName
 * PascalCase: UserName
 * SNAKE_CASE: user_name o USER_NAME
 * kebab-case: user-name o USER-NAME
 */
