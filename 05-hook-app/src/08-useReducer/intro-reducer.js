const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del alma",
    done: false,
  },
];

//Si no se le proporciona nada al "state", el estado inicial va a ser "initialState" y "action" es quien va a decir al reducer como debe cambiar el estado
const todoReducer = (state = initialState, action = {}) => {

    if(action.type === "[TODO] add todo") {  //Validamos la accion 
        return [...state, action.payload]    //Y desestructuramos el estado anterior, agregando el estado nuevo
    }

  return state;
};

let todos = todoReducer();

//Esto no se debe hacer ya que es una mutacion al array
// todos.push({
//     id: 2,
//     todo: "Recolectar la piedra del poder",
//     done: false
// })

//Nuevo todo
const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

//Accion para modificar el estado inicial
const addTodoAction = {
    type: `[TODO] add todo`,   //Nombre de la accion
    payload: newTodo           //Carga de la accion
}

//Enviamos el estado original "todos" y la accion "addTodoAction"
todos = todoReducer( todos, addTodoAction );

console.log({ state: todos })
