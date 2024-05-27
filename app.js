// ¿Que son las VARIABLES?: son contenedores en donde guardamos información y para acceder a dicha información debemos nombrar a nuestras variables:
// user.Name = Ricardo; en este ejemplo estoy indicando que mi variable se llama "user.Name" y el valor de la variable es Ricardo.

// TIPOS DE VARIABLES EN JAVASCRIPT:

// tipo string: es aquella que nos permite colocar texto, la identificamos porque siempre va entre comillas 'Ricardo Velasquez'
let fullName = 'Ricardo Velasquez'; 

// tipo numerico: es aquella que almacena numeros, ya sean enteros o decimales
let age = 29;

// tipo boolean: aquella que representa uno de dos valores: verdadero o falso
let havePassport = false;

// Con LET se puede crear una variable, declararla y NO DEFINIRLE un valor.
let fullName;
// Y aquí posteriormente le estoy asignando un valor
fullName = 'Hola Ricardo';

// // En el caso de crear una variable con CONST, nos permite declararla pero nos pide definirle UN VALOR al momento,
const year = 2024;
// ya que luego no se le puede cambiar el valor.
year = 2025; (No permite)