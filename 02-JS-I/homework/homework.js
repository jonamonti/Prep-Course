// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// 1- Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'fafafa ';

// 2- Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 19;

// 3- Crea una variable booleana:
const nuevoBool = true;

// 4- Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// 5- Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// 6- Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

// 7
function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
    return str;
}

// 8
function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  valor = x + y;
  return valor;
  
}

// 9
function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  resta = x - y;
  return resta;
}

//10
function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  producto = x * y;
  return producto;
}

// 11
function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  division = x / y;
  return division;
  
}

// 12
function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  igualdad = x == y;
  return igualdad;
}

//13
function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  mismaLongitud = str1.length == str2.length;
  return mismaLongitud;
  
}

// 14
function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90) {
    return true;
  }
  return false;
  
}

// 15
function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50) {
    return true;
  }
  return false;
  
}

// 16
function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  resto = x % y;
  return resto;
}

// 17
function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  par = num % 2 == 0;
  return par;
}

// 18
function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  impar = num % 2 != 0;
  return impar;
  
}

// 19
function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  square = Math.pow(num,2);
  return square;
}

// 20
function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  cubo = Math.pow(num,3);
  return cubo;
  
}

// 21
function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  potencia = Math.pow(num,exponent);
  return potencia;
}

// 22
function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  round1 = Math.round(num);
  return round1;
}

// 23
function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  round2 = Math.ceil(num);
  return round2;
  
}

// 24
function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  aleatorio = Math.random();
  return aleatorio;
}

// 25
function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0) {
    return 'Es positivo';
  }
  if (numero < 0) {
    return 'Es negativo';
  }
  return false;

}

// 26
function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + '!';
}

// 27
function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return nombre + " " + apellido;
}

// 28
function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return 'Hola ' + nombre + '!';
}

// 29
function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  area = alto * ancho;
  return area;
}

// 30
function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  perimetro = lado * 4;
  return perimetro;
}

// 31
function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  areaTriangulo = base * altura / 2;
  return areaTriangulo;

}

// 32
function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  usd = euro * 1.2;
  return usd;
  
}

// 33
function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra.length != 1) {
    return 'Dato incorrecto';
  }
  if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
    return 'Es vocal';
  }
  return 'Dato incorrecto';

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
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
