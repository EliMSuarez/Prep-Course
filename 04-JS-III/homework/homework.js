// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  console.log(array[0]);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return(array.pop());
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  console.log(array.length);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i=0; i<array.length; i++){
    array[i]+1;
  console.log(array[i]);
  }

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  console.log(array);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  console.log(array);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  for(let i=0; i<palabras.length; i++){
    a=' ';
    b=palabras[i]+a;
  }
  return b;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i=0; i<array.length; i++){
    if(array[i]===elemento){
      return true;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  a=0;
  for(let i=0; i<numeros.length; i++){
    a=a+numeros[i];
  }
  return a;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  promedio=0;
  suma=0;
  for(let i=0; i<resultadosTest.length; i++){
    suma=suma+resultadosTest[i];
  }
  promedio=suma/resultadosTest.length;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  x=0;
  for(let i=0; i<numeros.length; i++){
    if(numeros[i]>x){
      masgrande=numeros[i];
      x=masgrande;
    }
  }
  return masgrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
if(arguments.length===0){
  return 0;
}else if(arguments.length===1){
  return arguments;
}else if(arguments.length>=2){
  let producto=0;
  for(let i=0; i<arguments.length; i++){
    producto=producto*arguments[i];
  }
  return producto;
}
}



function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  cantidad=0;
for(let i=0; i<arreglo.length; i++){
  if(arreglo[i]>=18){
    cantidad=cantidad+1;
  }
}
return cantidad;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
if(numeroDeDia===1 || numeroDeDia===7){
  return "Es fin de semana";
}else if(numeroDeDia>1 && numeroDeDia<7){
  return "Es dia Laboral";
}
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if(n===9 || (n>=90 && n<=99) || (n>=900 && n<=999) || (n>=9000 && n<=9999)){
    return true;
  }else{
    return false;
  }

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
let aa=arreglo[0];
for(let i=0; i<arreglo.length; i++){
  if(aa!==arreglo[i]){
    return false;
  }
}
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  const meses=[];
  for(let i=0; i<array.length; i++){
    if(array[i]==='Enero'){
      meses.push('Enero');
    }else if(array[i]==='Marzo'){
      meses.push('Marzo');
    }else if(array[i]==='Noviembre'){
      meses.push('Noviembre');
  }
  if(meses.length>0){
    return meses;
  }else{
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
let otroarray=[];
  for(let i=0; i<array.length; i++){
    if(array[i]>100){
      otroarray.push(i);
    }
}
return otroarray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let arraydesumas=[];
  i=0;
  suma=numero;
  do{
    suma=suma+2;

    i++;
    if(suma===i){
      return "Se iterrumpió la ejecución";
      break;
    }
    arraydesumas.push(suma);
  } while (i>11);
  return arraydesumas;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let arraycont=[];
  bb=numero;
  do{
    if(i===5){
      continue;
    }
    bb=bb+2;
    i++;
    arraycont.push(bb)
  }while(i>11);
  return arraycont;
}

//aa
// No modificar nada debajo de esta línea
// --------------------------------

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
  mayorACien,
  breakStatement,
  continueStatement
};