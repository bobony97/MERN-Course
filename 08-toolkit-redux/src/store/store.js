import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter/counterSlice';


export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer, //Y luego se llama al reducer. 
    }
});