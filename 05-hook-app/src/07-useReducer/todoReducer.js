/*
    1-Creación del reducer:
    Para usar useReducer, primero debes definir una función llamada "reducer". El reducer es una función pura que recibe dos argumentos: el estado actual y una acción, y devuelve el nuevo estado.
*/
export const todoReducer = (initialState = [], action ) => {
    switch (action.type) {  //ACCION A REALIZAR
        case "[TODO] add todo": //Accion en si que va a indicar que se va a cambiar en el estado
            return [ ...initialState, action.payload ]; //Y aca modificamos y devolvemos el cambio en el estado

        case "[TODO] delete Todo":
            //El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
            return initialState.filter( todo => todo.id !== action.payload ) //Indicamos que devuelva todos los "todos" o los elementos del "initialState" siempre y cuando sean diferentes del                                                                 
                                                                             //"id" que se le va a enviar a traves de la accion ("action.payload")
        case "[TODO] toggle Todo":                                           
            return initialState.map( todo => { //El map tambien crea un array nuevo
                if(todo.id === action.payload) { //Verifica si el "todo.id" es el mismo que hay en la accion "action.payload" (suponiendo que el payload es el "id" del "todo")
                    return {
                        ...todo,         //Esparce el todo que recibe
                        done: !todo.done //Invierte el valor del "done"
                    }
                }

                return todo;
            })                                                          
        default:                                                             
            return initialState;
    }
}

//En este ejemplo simple, el reducer toma un estado que tiene una propiedad count y actualiza esa propiedad en función del tipo de acción que recibe.


 