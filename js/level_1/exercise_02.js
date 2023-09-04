/**
 * Ejercicio 2:
 * Introducción a las Variables en JavaScript.
 * En esta lección, vamos a explorar los diferentes tipos de declaraciones de variables: var, let y const.
 * Es una buena práctica seguir el estándar camelCase al nombrar variables y archivos en JS.
 */

// Declaración usando 'var': Su alcance es función-global y puede ser re-declarada.
// Sin embargo, su uso es desaconsejado en las versiones modernas de JavaScript.
var userName = "Pepita";

// Declaración usando 'let': Tiene alcance de bloque y no puede ser re-declarada.
let player = "Pepito";

// Declaración usando 'const': Como 'let', tiene alcance de bloque. Pero además, su valor no puede ser reasignado.
const nickName = "Sofgrox";

// Mostrar el contenido de las variables usando console.log.
console.log(userName, player, nickName);

// Mostrar el contenido de las variables mediante concatenación (+).
// Utilizamos "\n" para crear saltos de línea entre las variables.
console.log(
  "Variable usando var: " +
    userName +
    "\nUsando let: " +
    player +
    "\nUsando const: " +
    nickName
);

/**
 * Exploración de los Tipos de Datos en JavaScript.
 * - String: Cadena de caracteres.
 * - int: Números enteros.
 * - float: Números con decimales.
 * - booleano: Valores lógicos (true o false).
 */

let userNickName = "Pepita"; // String
let age = 35; // Número entero (int)
const dni = "2345677854"; // String (usualmente los DNIs son tratados como cadenas porque no se hacen operaciones matemáticas con ellos)
let childrens = false; // Booleano
let celPhone = "2345676732"; // String (similar al DNI, los números de teléfono se tratan generalmente como cadenas)
let height = 1.5; // Número con decimales (float)
let salary = 3000000; // Número entero (int). Si incluyera decimales, sería un float.

/**
 * APUNTES:
 * Convenciones de nomenclatura en programación:
 * - camelCase: (ejemplo: userName) - usado comúnmente para variables y nombres de funciones en JS.
 * - PascalCase: (ejemplo: UserName) - frecuentemente usado para clases en ciertos lenguajes de programación.
 * - SNAKE_CASE: (ejemplo: user_name o USER_NAME) - usualmente en constantes o configuraciones.
 * - kebab-case: (ejemplo: user-name) - común en nombres de archivos o URLs.
 */

/**
 * var
Alcance (Scope): var tiene un alcance de función. Esto significa que una variable declarada con var dentro de una función es accesible desde cualquier lugar dentro de esa función

Re-declaración: Puedes declarar la misma variable usando var múltiples veces en el mismo alcance sin errores.

Hoisting: Las variables declaradas con var son "elevadas" al inicio de su alcance y se les asigna undefined. Esto significa que puedes referenciar una variable declarada con var antes de que se haya declarado en el código.

*let
Alcance (Scope): let tiene un alcance de bloque. Esto significa que su visibilidad se limita al bloque (if, for, while, {}, etc.) en el que se declara.

Re-declaración: No puedes declarar la misma variable con let más de una vez en el mismo alcance.

Temporal Dead Zone (TDZ): Las variables declaradas con let no son elevadas (hoisted) de la misma manera que var. Están en una "zona muerta temporal" desde el inicio del bloque hasta que se declara la variable.


*const
Alcance (Scope): Igual que let, const tiene un alcance de bloque.

Re-declaración: No puedes re-declarar una variable con const en el mismo alcance.

Re-asignación: Una vez que se asigna un valor a una variable const, no puedes reasignar un nuevo valor a esa variable. Sin embargo, si es un objeto, puedes modificar sus propiedades.

Temporal Dead Zone (TDZ): Igual que con let, las variables declaradas con const están en una "zona muerta temporal".

*CONCLUSIÓN:
var se considera obsoleto para la declaración de variables en JavaScript moderno debido a sus peculiaridades y problemas potenciales.
let y const fueron introducidos en ES6 (ECMAScript 2015) y ofrecen una mejor solución en términos de alcance de bloque y predecibilidad.
Se recomienda usar const por defecto y usar let solo cuando sepas que necesitarás reasignar la variable.
Evita usar var en código moderno para evitar comportamientos inesperados y hacer que tu código sea más legible y predecible.
 */
