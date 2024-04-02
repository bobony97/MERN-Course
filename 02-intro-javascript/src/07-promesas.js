import { heroeById } from "./06-importaciones";
// const promesa = new Promise( ( resolve, reject ) => {   //"resolve" se ejecuta cuando la promesa es exitosa y "reject" cuando falla o algo no se puede cumplir
//     setTimeout( () => {
//         const heroe = heroeById(1);
//         resolve( heroe )    //"resolve()" le manda la informacion traida de la peticion al "then"
//         reject("No se pudo encontrar el heroe"); //En caso de no poder encontrar el heroe, manda la informacion al "catch"
//     }, 2000 );
// });

// promesa.then( (heroe) => {   //then, en caso de que la promesa sea correcta
//     console.log(`Heroe: ${ heroe }`);
// })
// .catch( err => console.warn( err ) );   //Error de la promesa

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = heroeById(1);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar el heroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(4)
.then( console.log )
.catch( console.warn );
