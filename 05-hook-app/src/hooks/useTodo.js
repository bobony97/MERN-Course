import { useEffect, useReducer } from "react";
import { todoReducer } from "../07-useReducer/todoReducer";

    /*
    El parámetro init en useReducer es opcional y se refiere a una función que se utiliza para inicializar el estado del reducer la primera vez que se llama. Si no se proporciona, el estado inicial 
    se tomará del segundo argumento pasado a useReducer.

    La función init se usa para realizar tareas de inicialización más complejas o para calcular el estado inicial de manera dinámica. Si se proporciona, debe ser una función que devuelva el estado 
    inicial deseado.

    Usa initialState cuando el estado inicial es estático y no requiere ningún cálculo o lógica especial para inicializarlo.
    Usa init cuando necesites realizar cálculos dinámicos, inicializar el estado basado en propiedades externas (como valores de URL, datos de una API, etc.), o realizar otras tareas de 
    inicialización más complejas.
    */
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];   //Traemos la informacion del localStorage, en caso no haber nada devuelve un array vacio
    }

    

export const useTodo = () => {

    /*
        2-Uso de useReducer:
        Después de definir el reducer, puedes usar useReducer en tu componente funcional. Tienes que pasarle el reducer y el estado inicial.
    */

    //El primer elemento del array es el "estado". El segundo es la "accion", que se usa para enviar acciones al reducer
    /*
        initialState es el estado inicial que se pasa al reducer cuando el componente se monta por primera vez.
        [state, dispatch] es lo que devuelve useReducer. state representa el estado actual y dispatch es una función que se usa para enviar acciones al reducer.
    */

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    /////////////////////////////////////////////////////////////////////////////////////////////////

    useEffect(() => {
        localStorage.setItem(`todo`, JSON.stringify( todos ) || [] ); //Envia los "todos" al local storage, ahi no se pueden enviar objetos, solamente string. El primer argumento es una "key" y el segundo
                                                                //son los objetos ("todos") transformados a string. Si la pagina se recarga con la Informacion en el localStorage, esta va a desaparecer
    }, [todos])    

    const handleNewTodo = ( todo ) => { //Recibimos el "todo" del componente hijo
        const action = {           //Esta es la accion del "reducer" que va a comprobar el "type", en este caso es "[TODO] add todo" y la accion a ejecutar esta en el reducer que en este caso es agregar el  
        type: "[TODO] add todo", //"todo" al estado ("todos")
        payload: todo 
        }

        dispatch( action )  //Se envia la accion al "reducer"
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
        type: "[TODO] delete Todo",
        payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
        type: "[TODO] toggle Todo",
        payload: id
        })
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}