'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arregloFactores =[1]
  var divisor = 2
  while (num > 1){
    if(num % divisor ===0){
      arregloFactores.push(divisor)
      num = num/divisor
    }
    else{
      divisor ++
    }
  }
return arregloFactores
}
console.log(factorear(180))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var flag = true; //  false(NOcambio) true(cambio)  
  while(flag){
    flag = false; // para evitar un bucle infinito
    for (let i = 0; i < array.length - 1; i++) { // -1 para que no salga su comparacion del array
      if(array[i] > array[i+1]){ // si i es mayor a i+1
        var aux = array[i] // guarda para no perder en aux es igual a i para no pisarlo
        array[i] = array[i+1] // i es igual a i+1
        array[i+1] = aux // +1 igual a lo que guarde
        flag = true; // cambio flag a true
      }        
    }
  }
  return array
}

console.log(bubbleSort([5,1,4,2,8]))



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i =1; i <array.length; i++){
       let  j = i -1;
       var aux = array[i]
       while(j >=0 && array[j] > aux){
        array [j+1] =array[j]
        j = j-1

       }
       array[j+1]= aux
  }
return array
}
console.log(insertionSort([5,1,4,2,8]))

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length -1; i++) { // termina una posicion antes
    var min = i // guardo en una variable la posicion que el iterador considere menor

    for (let j = i + 1; j < array.length; j++) { // comienza i + 1      
      if(array[j] < array[min]){ // comparo el valor de j con el valor de min
        min = j // en el min cambio por la referencia en j
      }
    }      
    var aux = array[i] // guardo en una variable aux el valor de i
    array[i] = array[min] // designo donde esta i la referencia de (min)
    array[min] = aux // guardo en min ahora tiene el valor de aux.
  }
  return array;
}
console.log(selectionSort([5,1,4,2,8]))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
