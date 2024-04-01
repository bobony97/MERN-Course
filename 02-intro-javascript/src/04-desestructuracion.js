//Desestructuraron
//Asignación Desestructurante
const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Iron Man",
    rango: "Capitan"
}

const { nombre:nombre2 } = persona;  //En caso de que la variable "nombre" ya exista la renombramos de esta manera a "nombre2"
const { nombre, edad, clave } = persona;  //También se puede desestructurar de esta forma, incluso se puede cambiar el orden de los atributos

console.log(nombre2);
console.log(nombre, clave, edad);


//DESESTRUCTURANDO CON FUNCIÓN
// const retornaPersona = ( usuario ) => {   //Objeto entero
//     const { nombre, edad, clave } = usuario;
//     console.log( nombre, clave, edad );
// }

// retornaPersona( persona );

// const retornaPersona = ({ nombre }) => {  //Por cantidad de atributos
//     console.log( nombre );
// }

// retornaPersona( persona );

// const retornaPersona = ( nombre, edad, clave, rango = "Capitan" ) => {  //Agrega otro atributo
//     console.log( nombre, clave, edad );
// }

// retornaPersona( persona );

const useContext = ( {clave, nombre, edad, rango} ) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.132156165,
            lng: 13.564665
        }
    }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const { nombreClave, anios, latlng:{lat, lng} } = useContext( persona );  //Desestructurando objeto (en caso de la propiedad "latlng", al desestructurar el objeto, ambas propiedades 
                                                                          //son constantes)
console.log( nombreClave, anios );
console.log( lat, lng );

