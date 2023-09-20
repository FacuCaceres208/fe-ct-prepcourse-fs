/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:
  return array.shift();
}

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:
  return array.pop();
}

function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido por parámetro.
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
  let incrementos = array.map((el) => {
    return el + 1;
  });
  return incrementos;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  let frase = palabras.join(" ");
  return frase;
}

function arrayContiene(array, elemento) {
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar true si está, o false si no está.
  // Tu código:
  let contiene = array.includes(elemento) ? true : false;
  return contiene;
}

function agregarNumeros(arrayOfNums) {
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:
  let suma = arrayOfNums.reduce((posActual, posSiguiente) => {
    return (posActual += posSiguiente);
  }, 0);
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // El parámetro "resultadosTest" es un arreglo de números.
  // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  // Tu código:
  let valorDeNotas = resultadosTest.reduce((posActual, posSiguiente) => {
    return posActual + posSiguiente;
  }, 0);
  let promedio = valorDeNotas / resultadosTest.length;
  return promedio;
}

function numeroMasGrande(arrayOfNums) {
  // El parámetro "arrayOfNums" es un arreglo de números.
  // Retornar el número más grande.
  // Tu código:
  let valorMasAlto = arrayOfNums.reduce((posActual, posSiguiente) => {
    let acumulador = 0;
    let sumador = 0;
    while (acumulador < arrayOfNums.length) {
      if (posActual < posSiguiente) {
        sumador = posSiguiente;
      } else {
        sumador = posActual;
      }
      acumulador++;
    }
    return sumador;
  });
  return valorMasAlto;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) {
    return 0;
  } else if (arguments.length === 1) {
    let valor = arguments[0];
    return valor;
  } else {
    var resultado = 1;
    for (h = 0; h < arguments.length; h++) {
      resultado *= arguments[h];
    }
  }
  return resultado;
}

function cuentoElementos(array) {
  // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
  // Tu código:
  let cont = 0;
  for (h = 0; h < array.length; h++) {
    if (array[h] > 18) {
      cont++;
    }
  }
  return cont;
}

function diaDeLaSemana(numeroDeDia) {
  // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
  // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  // Tu código:
  let dias = [2,3,4,5,6];
  let dia = '';
  if(dias.includes(numeroDeDia)){
    dia = 'Es dia laboral';
  }else{
    dia = 'Es fin de semana'
  }
  return dia;

}

function empiezaConNueve(num) {
  // Esta función recibe por parámetro un número.
  // Debe retornar true si el entero inicia con 9 y false en otro caso.
  // Tu código:
  num = num.toString();
  // console.log(typeof(precio))
  let numArray = num.split("");
  if (numArray[0] === "9") {
    return true;
  } else {
    return false;
  }
}

function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  // Tu código:
  for (var h = 0; h < array.length-1; h++) {
    if(array[h] !== array[0]){
      return false;
    }
  }
  return true;
}

function mesesDelAño(array) {
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let mesesBuscados = [];
  let recorre = array.map((el)=>{
    if(el === 'Enero' || el === 'Marzo' || el === 'Noviembre'){
      mesesBuscados.push(el);
    }
  })
  if(mesesBuscados.length === 3){
    return mesesBuscados;
  }else{
      return rta = 'No se encontraron los meses pedidos'
  }
}

function tablaDelSeis() {
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
  let tabla = [];
  for(let h = 0; h < 11 ; h++){
    tabla.push(6*h);
  }
  return tabla;

}

function mayorACien(array) {
  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:
  let mayores = [];
  let recorreNros = array.map((el)=>{
    if(el > 100){
      mayores.push(el);
    }
  })
  return mayores;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // [PISTA]: utiliza el statement 'break'.
  // Tu código:
  let nuevoArreglo = [];
  let valor = false;
  for(let h = 0; h < 10 ; h++){
    if(num+2 === h){
      valor = 'Se interrumpió la ejecución'
    }else{
      num+=2;
      nuevoArreglo.push(num)
    }
    }
    if(valor){
      return valor;
    }else{
      return nuevoArreglo;
    }
}

function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continua con la siguiente iteración.
  // [PISTA]: utiliza el statement 'continue'.
  // Tu código:
  let arregloContinue = [];
  for (let h = 0; h < 10; h++) {
    if(h === 5){
    continue;
    }
    num+=2;
    arregloContinue.push(num);
  }
  return arregloContinue;
}
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  tablaDelSeis,
  mayorACien,
  breakStatement,
  continueStatement,
};
