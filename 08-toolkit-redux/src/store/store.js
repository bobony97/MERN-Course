import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter/counterSlice';
import { pokemonSlice } from './slices/pokemon/pokemonSlice';


export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer, //Y luego se llama al reducer. 
        pokemons: pokemonSlice.reducer,
    }
});