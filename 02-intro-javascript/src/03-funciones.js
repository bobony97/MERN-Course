//Incorrecto al usar ya que se puede asignar otros valores a la función Ej: saludar = 30;
function saludar(nombre) {
    return `Hola, mi nombre es ${nombre}`;
}

const saludar1 = function(nombre) {
    return `Hola, mi nombre es ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, mi nombre es ${nombre}`;
}

const saludar3 = (nombre) => `Hola, mi nombre es ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar("Agustin"));
console.log(saludar2("Agustin"));
console.log(saludar3("Agustin"));
console.log(saludar4()); 

//Devolviendo un objeto implícito, si fuese un valor primitivo no es necesario los paréntesis
const getUser = () => ({
    uid: "ABC123",
    nombre: "Agustin"
})

console.log(getUser());

//Transformar funcion
// function getUsuarioActivo(nombre) {
//     return {
//       uid: 123,
//       nombre: nombre,
//     }
//   }

const getUsuarioActivo = (nombre) => ({
    uid: 123,
    nombre: nombre
})

const usuarioActivo = getUsuarioActivo("Fernando");

console.log(usuarioActivo);
  



