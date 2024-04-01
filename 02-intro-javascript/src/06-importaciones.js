import { heroes } from "./data/06-heroes";
// import heroes from "./data/06-heroes";  //Importacion por defecto
// import owners, { heroes } from "./data/06-heroes";  //Si tenemos una importacion por defecto y una individual lo hacemos de esta forma
// import { heroes, owners } from "./data/06-heroes";  //Varias importaciones

//Trae un Heroe por id
const getHeroeById = (id) => {
    return  heroes.find(heroe => heroe.id === id) };
    
console.log( getHeroeById(2) );

//Trae varios heroes por owner
const getHeroesByOwner = ( owner ) => {
    return  heroes.filter(heroe => heroe.owner === owner) };
    
console.log( getHeroesByOwner("DC") );