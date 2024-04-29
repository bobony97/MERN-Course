import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

/*
    Un "thunk" es una función que encapsula una expresión para ser evaluada más tarde. En el contexto de Redux, un "thunk" es una función especial 
    que permite realizar operaciones asíncronas y condicionales dentro de las acciones de Redux.

    En Redux Toolkit y en el ecosistema de Redux en general, los "thunks" son una forma de interactuar con la capa asíncrona de una aplicación Redux, 
    como las llamadas a API, la gestión de efectos secundarios, las operaciones de carga de datos, entre otras tareas complejas que no se pueden manejar directamente en un reducer síncrono.
*/

//Los parámetros "dispatch" y "getState" que recibe la función asíncrona son proporcionados por Redux Toolkit automáticamente cuando se utiliza createAsyncThunk para crear el thunk.
/*
    Cuando defines un thunk con createAsyncThunk, no necesitas pasar explícitamente dispatch o getState como argumentos al invocar el thunk.
    Redux Toolkit se encarga de inyectar estos argumentos automáticamente cuando se llama al thunk, de manera que puedas utilizarlos dentro de la función asíncrona para despachar 
    acciones y obtener el estado actual.
*/
export const getPokemons = ( page = 0 ) => {
    return  async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${ page * 10 }`);

        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }
}