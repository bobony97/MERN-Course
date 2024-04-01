const personajes = ["goku", "vegeta", "trunks"];
const [ , , p3 ] = personajes; //Extrae a trunks
console.log(p3);

const retornaArreglo = () => {
    return["ABC", 132];
}

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros);

const useState = ( valor ) => {
    return [valor, () => {console.log("Hola Mundo") } ]
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [ nombre, setNombre ] = useState( "goku" );
console.log( nombre );
setNombre();