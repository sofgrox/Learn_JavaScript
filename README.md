# Learn_JavaScript
Practical exercises to learn javascript and its syntax.  They also serve to improve logic and solve algorithms.



### Archivo: exercise01.js
### Ruta: 

```
console.log("Hola Sofgrox Community");
```

Esta línea de código tiene dos partes principales:

console.log: console es un objeto que proporciona una interfaz para interactuar con la consola del navegador o el entorno de ejecución de JavaScript. log es un método de este objeto que se utiliza para imprimir mensajes en la consola. Puedes pensar en la consola como una ventana donde puedes ver mensajes y resultados mientras ejecutas tu código.

"Hola Sofgrox Community": Esto es una cadena de texto (también conocida como string) que contiene el mensaje que deseamos imprimir en la consola. En este caso, el mensaje es "Hola Sofgrox Community".

Cuando esta línea se ejecuta, el mensaje "Hola Sofgrox Community" se muestra en la consola. Esto es útil para depurar y verificar el estado de tu código mientras se ejecuta.

```
alert("Hola Sofgrox Community");
```

Esta línea de código también consta de dos partes:

alert: alert es una función incorporada en JavaScript que muestra un cuadro de diálogo emergente (una alerta) en el navegador con el mensaje proporcionado como argumento.

"Hola Sofgrox Community": Al igual que antes, esta es una cadena de texto que contiene el mensaje que deseamos mostrar en la alerta emergente.

Cuando esta línea se ejecuta, se mostrará un cuadro de diálogo en el navegador con el mensaje "Hola Sofgrox Community". Esto es útil para proporcionar información importante o advertencias al usuario.

¿Por qué son importantes estas líneas de código y cuándo se usan?

Estas líneas de código son importantes por varias razones:

Depuración y registro: console.log es una herramienta esencial para depurar tu código. Puedes usarlo para imprimir valores, variables y mensajes en la consola para comprender mejor cómo se está ejecutando tu programa y detectar posibles errores.

Interacción con el usuario: alert te permite interactuar con el usuario mostrando mensajes importantes, advertencias o solicitudes de confirmación. Por ejemplo, puedes usar alert para asegurarte de que el usuario esté consciente de cierta información antes de realizar una acción crítica.

Comunicación en tiempo real: Ambas funciones son valiosas para comunicarse con el usuario o para proporcionar información durante la ejecución del programa, ya sea en el desarrollo o en la producción.

En resumen, console.log y alert son herramientas fundamentales en el arsenal de un desarrollador de JavaScript. Ayudan a comprender el flujo de ejecución, a depurar problemas y a interactuar con los usuarios de manera efectiva.

### Archivo: exercise02.js
### Ruta: 

```
var userName = "Pepita"; // Se debe evitar su uso ya que deja volver a declarar la variable
let player = "Pepito"; // No permite volver a declarar la variable
const nickName = "Sofgrox"; // No permite volver a declarar la variable y no permite cambiar el valor de la variable
```

var: Esta palabra clave se usa para declarar una variable en JavaScript. Sin embargo, su uso está en desuso debido a algunas limitaciones y problemas que puede causar en el ámbito de declaración.
userName: Este es el nombre de la variable que estás declarando. En este caso, se llama "userName".
=: El operador de asignación. Sirve para asignar un valor a la variable.
"Pepita": Este es el valor asignado a la variable "userName". En este caso, es una cadena de texto (string) que contiene "Pepita".
let player = "Pepito";

let: Es una palabra clave utilizada para declarar una variable en JavaScript. A diferencia de var, tiene un ámbito de bloque y no permite redeclarar la misma variable en el mismo ámbito.
player: El nombre de la variable declarada, que es "player".
=: Operador de asignación.
"Pepito": El valor asignado a la variable "player", que es la cadena de texto "Pepito".
const nickName = "Sofgrox";

const: Palabra clave que declara una constante en JavaScript. Una constante es una variable cuyo valor no puede cambiar después de la asignación inicial.
nickName: El nombre de la constante que estás declarando, que es "nickName".
=: Operador de asignación.
"Sofgrox": El valor asignado a la constante "nickName", que es la cadena de texto "Sofgrox".

```
// Mostrar contenido de las variables
console.log(userName, player, nickName);
```

console.log: Es una función incorporada en JavaScript que se utiliza para mostrar información en la consola del navegador o en el entorno de ejecución en el que se esté trabajando. Los argumentos que se le pasan a esta función se imprimirán en la consola.

userName: Esta es la primera variable que se pasa como argumento a console.log. Representa el valor de la variable previamente declarada con el nombre "userName", que es "Pepita".

player: Es el segundo argumento pasado a console.log. Aquí, "player" es el nombre de la variable declarada usando let, y su valor es "Pepito".

nickName: El tercer argumento pasado a console.log. "nickName" es el nombre de la constante declarada usando const, y su valor es "Sofgrox".

```
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
```

console.log(: Comienza la llamada a la función console.log(). Esta función mostrará los argumentos que se le pasen en la consola.

"Variable usando var: " +: Aquí, se está concatenando una cadena de texto con el valor de la variable "userName". La cadena indica "Variable usando var: " y se concatena con el valor de "userName", que es "Pepita".

userName: Inserta el valor de la variable "userName" en la cadena. Como se mencionó antes, el valor de "userName" es "Pepita".

"\n" +: Esta parte agrega un salto de línea (\n) a la cadena. Esto hará que los siguientes contenidos se impriman en una nueva línea en la consola.

"Usando let: " +: Se concatena la cadena "Usando let: " con el valor de la variable "player". La cadena completa indicará "Usando let: Pepito".

player: Inserta el valor de la variable "player", que es "Pepito".

"\n" +: Otro salto de línea para separar el próximo contenido en la consola.

"Usando const: " +: Concatenación de la cadena "Usando const: " con el valor de la constante "nickName". Esto formará la cadena "Usando const: Sofgrox".

nickName: Inserta el valor de la constante "nickName", que es "Sofgrox".

) : Cierra la llamada a la función console.log().

/**
 * Tipos de datos
 * String: cadena de texto - caracteres
 * int - numeros enteros
 * float - numeros flotantes admite decimales
 * booleano - maneja true o false
 */

```
let userNickName = "Pepita"; // String
```

let: Se utiliza para declarar una variable con alcance de bloque. En este caso, se está declarando la variable userNickName.
userNickName: El nombre de la variable que se está declarando.
=: Operador de asignación. Se utiliza para asignar el valor que sigue al lado derecho a la variable en el lado izquierdo.
"Pepita": El valor asignado a la variable userNickName, que es una cadena de texto (string) con el contenido "Pepita".

```
let age = 35; // Int
```
let: Palabra clave que indica que se está declarando una variable llamada age.
age: El nombre de la variable.
=: Operador de asignación que se utiliza para asignar un valor a la variable.
35: El valor que se asigna a la variable age. En este caso, es el número entero 35.

```
const dni = "2345677854"; // String (no se hace operaciones matematicas con el)
```
const: Palabra clave que se utiliza para declarar una constante llamada dni.
dni: El nombre de la constante.
=: Operador de asignación.
"2345677854": El valor que se asigna a la constante dni, que es una cadena de texto (string) ya que no se haran operaciones matematicas con el contenido "2345677854".

```
let childrens = false; // Booleano
```
let: Indica que se está declarando una variable llamada childrens.
childrens: El nombre de la variable.
=: Operador de asignación.
false: El valor asignado a la variable childrens. En este caso, es el valor booleano false.
javascript

```
let celPhone = "2345676732"; // String (no se hace operaciones matematicas con el)
```
let: Indica que se está declarando una variable llamada celPhone.
celPhone: El nombre de la variable.
=: Operador de asignación.
"2345676732": El valor asignado a la variable celPhone, que es una cadena de texto (string)  ya que no se haran operaciones matematicas con el contenido "2345676732".

```
let height = 1.5; // Float
```
let: Indica que se está declarando una variable llamada height.
height: El nombre de la variable.
=: Operador de asignación.
1.5: El valor asignado a la variable height. En este caso, es un número decimal (flotante) con el valor 1.5.
// Float: Comentario que indica que el valor es un número flotante (decimal).

```
let salary = 3000000; // Int - puede ser float tambien si se usa decimal
```
let: Indica que se está declarando una variable llamada salary.
salary: El nombre de la variable.
=: Operador de asignación.
3000000: El valor asignado a la variable salary, que es un número entero.

### Archivo: exercises1.html (El index que ejecuta los ejercicios anteriores)
### Ruta: 

```
 <!-- Titulo -->
    <h1>Ejercicios JavaScript nivel 1</h1>
```
h1: Etiqueta HTML que define un encabezado de nivel 1, es decir, un título principal.
Ejercicios JavaScript nivel 1: El texto que se mostrará dentro del encabezado. En este caso, es "Ejercicios JavaScript nivel 1"
  
```
 <!-- Opciones de navegación -->
    <ul>
      <li><a href="./index.html">Volver a Home</a></li>
      <li><a href="./exercises2.html">Ejercicios nivel 2</a></li>
      <li><a href="./exercises3.html">Ejercicios nivel 3</a></li>
    </ul>
```
ul: Etiqueta que define una lista no ordenada.
li: Etiqueta que define un elemento de lista.
a href="./index.html">Volver a Home /a: Un enlace (a) que apunta al archivo index.html y muestra el texto "Volver a Home".
a href="./exercises2.html">Ejercicios nivel 2/a: Otro enlace que apunta al archivo exercises2.html y muestra "Ejercicios nivel 2".
a href="./exercises3.html">Ejercicios nivel 3/a: Otro enlace que apunta al archivo exercises3.html y muestra "Ejercicios nivel 3".

```
    <!-- Scripts -->
    <script src="./js/level_1/exercise01.js"></script>
    <script src="./js/level_1/exercise02.js"></script>
```

script: Etiqueta que se usa para incluir scripts (código JavaScript) en la página.
src="./js/level_1/exercise01.js": Atributo src que especifica la ubicación del archivo JavaScript exercise01.js en la carpeta js/level_1.
src="./js/level_1/exercise02.js": Atributo src que especifica la ubicación del archivo JavaScript exercise02.js en la carpeta js/level_1.


