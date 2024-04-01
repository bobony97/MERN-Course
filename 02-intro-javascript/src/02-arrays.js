// ARRAY:
// -Los arrays son mutables por defecto

//ARRAYS MUTABLES
// Array inicial (mutable)
let array1 = [1, 2, 3];

// Creamos una referencia al array1 llamada array2
let array2 = array1;

// Modificamos array2
array2.push(4);

// Mostramos el estado de ambos arrays
console.log('Estado de array1 (mutabilidad):', array1);
console.log('Estado de array2 (mutabilidad):', array2);


//Inmutabilidad (Creación de un Nuevo Array):


// Array inicial (mutable)
let arrayOriginal = [1, 2, 3];

// Creamos un nuevo array con los elementos de arrayOriginal y agregamos un nuevo elemento
let newArray = [...arrayOriginal, 4];

// Mostramos el estado del arrayOriginal y del nuevo array
console.log('Estado de arrayOriginal (inmutabilidad):', arrayOriginal);
console.log('Nuevo array (inmutabilidad):', newArray);


//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
let arr = [1, 2 ,3 ,4 ,5]
let arr2 = arr.map(e => {
  console.log(e);  //Imprime todos los valores del arr
})

let numeros = [1, 5, 10, 15];
let multiplicacion = numeros.map(function (x) {
  return x * 2;
});
// numeros es: [1, 5, 10, 15]
// multiplicacion is ahora: [2, 10, 20, 30]





