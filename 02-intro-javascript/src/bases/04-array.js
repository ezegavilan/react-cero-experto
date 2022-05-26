/*
  El push no es recomendable porque modifica el objeto original
  Es mejor utilizar el operador spread
*/


const array = [1, 2, 3, 4];
// let array2 = array;
// array2.push(5);

// Usando el operador spread, se clona el arreglo original en un nuevo objeto con su propia referencia
let array2 = [...array, 5];

const array3 = array2.map(value => `Value: ${value}`);

console.log(array);
console.log(array2);
console.log(array3);
