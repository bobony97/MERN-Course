import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

/*
    Un "thunk" es una función que encapsula una expresión para ser evaluada más tarde. En el contexto de Redux, un "thunk" es una función especial 
    que permite realizar operaciones asíncronas y condicionales dentro de las acciones de Redux.

    En Redux Toolkit y en el ecosistema de Redux en general, los "thunks" son una forma de interactuar con la capa asíncrona de una aplicación Redux, 
    como las llamadas a API, la gestión de efectos secundarios, las operaciones de carga de datos, entre otras tareas complejas que no se pueden manejar directamente en un reducer síncrono.
*/
export const getPokemons = ( page = 0 ) => {
    return  async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        //TODO: Realizar peticion http
        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${ page * 10 }`);
        console.log(resp)

        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }
}