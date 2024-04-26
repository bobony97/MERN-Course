//Esta es la definicion del estado y sus funciones
import { useReducer } from "react";
import { UserReducer } from './UserReducer'
import { UserContext } from './UserContext'
import axios from 'axios'


export const UserState = ({ children }) => {
  const initialState = {
    users: [],
    selectedUser: null,
  };

  //"UserReducer" es la funcin que se va a ejecutar dependiendo de la informacion que se envie
  //"initialState" es el estado inicial de la apliacion
  //El "dispatch" es una función que le permite actualizar el estado a un valor diferente y activar una nueva representación.
  //El "state" se refiere al estado actual que se está manejando en un componente funcional o en un reductor
  const [state, dispatch] = useReducer(UserReducer, initialState); 

  const getUsers = async() => {
    const resp = await axios.get('https://reqres.in/api/users');
    dispatch({
      type: 'GET_USERS',
      payload: resp.data.data
    })
  };

  const getProfile = async(id) => {
    const resp = await axios.get(`https://reqres.in/api/users/${id}`);
    dispatch({
      type: 'GET_PROFILE',
      payload: resp.data.data
    })
  };

  return (
    //Todos los componentes dentro del "UserContext" van a poder acceder a la informacion que se le proporcione con el "provider" 
    <UserContext.Provider value={{   //La prop value se utiliza para pasar los datos que queremos compartir a través del contexto
      users: state.users,
      selectedUser: state.selectedUser,
      getUsers,
      getProfile
    }}>  

      {/*  Cuando usamos {children}, estamos indicando a React que renderice cualquier componente o elemento hijo que se pase a "UserContext". 
      Esto significa que cualquier componente envuelto por "UserContext" tendrá acceso a los datos proporcionados por "UserContext.Provider" */}
        { children }
    </UserContext.Provider>
  );
};
