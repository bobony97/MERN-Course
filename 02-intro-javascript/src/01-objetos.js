/*
    OBJETOS:
    -Los objetos son mutables por defecto
    -Los objetos trabajan con pares de valores: clave, valor
*/

//OBJETO INMUTABLE
// Estado inicial (objeto mutable)
let ejemploPersona = {
  nombre: "Juan",
  edad: 30,
};

// Crear una nueva instancia con los cambios aplicados (inmutabilidad)
let nuevoEjemploPersona = {
  ...ejemploPersona, // Clonar todas las propiedades del objeto original
  edad: 31, // Aplicar el cambio
};

// Mostrar el estado inicial y el estado modificado
console.log("Estado inicial:", ejemploPersona);
console.log("Estado modificado:", nuevoEjemploPersona);


//OBJETO MUTABLE


// Estado inicial (objeto mutable)
let ejemploPersona2 = {
  nombre: "Juan",
  edad: 30,
};

// Mutar el objeto original
ejemploPersona2.edad = 31;

// Mostrar el estado modificado
console.log("Estado modificado:", ejemploPersona2);

// Agregar un nuevo atributo
ejemploPersona2.altura = 180;

// Eliminar un atributo existente
delete ejemploPersona2.edad;
