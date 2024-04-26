import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

//Desde este componente vamos a gestionar el estado global y el contexto
const init = () => { //Esta funcion va a obtener el "usuario" del local storage y almacenarla en el estado global
    const user = JSON.parse( localStorage.getItem('user') ); //Obtenemos la informacion del local storage

    return {
        logged: !!user, //Esto convierte el objeto user en un valor booleano. Si "user" es null , entonces "!!user" será false; de lo contrario, será true.
        user // Contiene el objeto de usuario recuperado del Local Storage, o null si no se encontró ningún dato para la clave 'user'.
    }
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, {}, init );

    const login = ( name = '' ) => {

        const user = { id: 'ABC', name }; //Aca se crea un objeto "user"

        const action = { //Esta es la información que se va a enviar al "authReducer" para que ejecute
            type: types.login, //Esto va a disparar el tipo de ejecución en el "authReducer"
            payload: {  //Esta es la información que se envía al "authReducer"
                id: 'ABC',
                name: name
            }
        };

        localStorage.setItem('user', JSON.stringify(user)); //Se guarda la informacion en el local storage para luego ser recuperada en el "init" del estado global

        dispatch(action);  //Se envia la informacion al "authReducer"
    };

    const logout = () => {
        localStorage.removeItem('user'); //Se remueve la información del "user" del local storage al hacer logout
        const action = { type: types.logout }; //Esta accion va hacer que el "authReducer" ponga el atributo "logged" en false
        dispatch(action); //Se envia la accion
    }

  return (
    //Aquí se está utilizando el componente "Provider" del contexto "AuthContext". Se le está pasando un valor como prop value, que es un objeto con valores y funciones
    <AuthContext.Provider value={{ 
        ...authState,
        login,
        logout
    }} >
        { children }
    </AuthContext.Provider>
  )
}
