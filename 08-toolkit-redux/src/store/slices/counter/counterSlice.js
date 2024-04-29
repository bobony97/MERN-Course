import { createSlice } from '@reduxjs/toolkit' //Se importa el "createSlice" de redux-toolkit para crear el "slice"

/*
    Cuando defines un slice utilizando createSlice de Redux Toolkit, este automáticamente genera un conjunto de "action creators" basados en los reducers que has definido en ese slice. 
    En este caso, se definió un reducer llamado "increment", y Redux Toolkit automáticamente crea una acción llamada increment para ese reducer.
*/

export const counterSlice = createSlice({
  name: 'counter',  //Se crea el "state"
  initialState: {
    counter: 10
  },
  reducers: {  //Y el "reducer" va a ser el encargado de ejecutar las acciones
    increment: (state) => {  
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementBy2: (state, action) => {
      state.counter += action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy2 } = counterSlice.actions //Enviamos los "reducers" desestructurados, es este caso es solo "increment"
