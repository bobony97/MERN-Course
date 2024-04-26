import { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRouter = ({children}) => {

  //Obtener la ultima ruta si se cierra cesion
  const { pathname, search } = useLocation();  //Desestructuramos el location

  const lastPath = pathname + search; 

  localStorage.setItem('lastPath', lastPath);

  const { logged } = useContext(AuthContext);
  return (logged) ? children : <Navigate to={'/login'} />
}
