// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'estoy feliz y agradecido por esta oportunidad';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 52;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str='hola') {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x=10, y=4) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  suma= x + y;
  return suma;
}


function resta(x=10, y=4) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  resta=x - y;
  return resta;
}

function multiplica(x=10, y=4) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  multiplica= x * y;
  return multiplica;
}

function divide(x=12, y=4) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  divide= x/ y;
  return divide;
}

function sonIguales(x =10, y=4) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x==y){
    return true;
  }
  return false;
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return str1.length=== str2.length;
}

function menosQueNoventa(num=1250) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90){
    return true;
  }
  return false;
}

function mayorQueCincuenta(num=52) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num> 50){
    return true;
  }
  return false;
}

function obtenerResto(x=5, y=6) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  resto= x % y;
  return resto;
}

function esPar(num=0) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if((num % 2) == 0){
    return true;
  }
  return false;
}

function esImpar(num=1) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if((num % 3) == 1){
    return true;
  }
  return false;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num,2);
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return num * num * num;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num,exponent);
}

function redondearNumero(num=26) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var residuo= num % 1;
  var resta= num - residuo;
  if (residuo >= 0.5){
    return resta + 1;
  }
  else{
  return resta;  
  }
  return Math.round(num);

}

function redondearHaciaArriba(num=6.5) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + '!';
}

function combinarNombres(nombre= 'maria', apellido='cortez') {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var nombreCompleto= nombre + ' ' + apellido;
  return nombreCompleto;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var complemento= 'Hola';
  return complemento + ' ' + nombre+ '!';

}

function obtenerAreaRectangulo(alto=10, ancho=10) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto * ancho;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
