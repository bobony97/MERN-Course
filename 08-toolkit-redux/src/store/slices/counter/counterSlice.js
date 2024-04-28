import { createSlice } from '@reduxjs/toolkit' //Se importa el "createSlice" de redux-toolkit para crear el "slice"

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
  },
})

// Action creators are generated for each case reducer function
export const { increment  } = counterSlice.actions //Enviamos los "reducers" desestructurados
