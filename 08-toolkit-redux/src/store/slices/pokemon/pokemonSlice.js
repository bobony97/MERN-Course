import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemons: (state /*, action */) => {
            state.isLoading = true
        },
        setPokemons: (state, action) => {
            state.isLoading = false;                    //Se coloca de nuevo en "false" ya que la pag termino de cargar
            state.page = action.payload.page            //Esperamos la pagina a establecer para ver los pokemons
            state.pokemons = action.payload.pokemons    ////Esperamos los pokemons
        }
    },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;