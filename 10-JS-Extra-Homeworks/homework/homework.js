// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var contenedor = [];
  var resultado = [];

  for (var i in objeto) {
    contenedor[0] = i;
    contenedor[1] = objeto[i];
    resultado.push(contenedor);
    contenedor = [];
    }

    return resultado;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  // convierto el string en un array cuyos elementos son cada una de las letras.
  var a = string.split('');

  // creo un objeto Set, que no permite duplicados, para tener los caracteres unicos del string.
  var set1 = new Set()

  // uso bucle for para recorrer el array con el string y agrego los elementos al objeto Set. Si hay elementos duplicados en
  // string, ingresan solo una vez.

  for (let i = 0; i < a.length; i++) {
    set1.add(a[i]);
  }

  // creo un objeto vacio para guardar el resultado
  var resultado = {};

  // creo un contador en cero
  var count = 0;

  for ( let i of set1 ) {                   // recorro los elementos del objeto Set
    console.log(i);           
    for ( let j = 0; j < a.length; j++ ) {  // recorro los elementos del array con el string
      if ( i === a[j] ) {                   // si el elemento del objeto set es equivalente al elemento del array, sumo al contador
        count = count + 1;
      }
    }
    resultado[i] = count;                   // guardo el par clave-valor en el objeto resultado
    count = 0;                              // vuelvo a cero el contador para la siguiente iteracion
  }
  return resultado;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var fullUpper = s.toUpperCase();
  var upper = [];
  var lower = [];

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === fullUpper.charAt(i)) {
      upper.push(s.charAt(i));
    }
    else {
      lower.push(s.charAt(i));
    }
  }

  return upper.join('') + lower.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  // creo array cuyos elementos son las palabras de la frase.
  var a = str.split(' '); 

  // creo array vacio para guardar el resultado
  var resultado = [];

  //
  for (let i = 0; i < a.length; i++) {
    let b = a[i].split('').reverse().join('');
    resultado.push(b);
  }
  return resultado.join(' ');

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var a = numero.toFixed().split('').reverse().join('') * 1;

  if (a === numero) {
    return "Es capicua";
  }
  else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var a = cadena.split('');
  var resultado = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === 'a' || a[i] === 'b' || a[i] === 'c') {
      continue;
    }
    else {
      resultado.push(a[i]);
    }
  }
  return resultado.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

