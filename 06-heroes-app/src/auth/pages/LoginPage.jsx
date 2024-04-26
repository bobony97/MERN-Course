import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const navigate = useNavigate(); //Para obtener una función de navegación que permite cambiar de página programáticamente.

  const { login } = useContext( AuthContext ); //Utiliza el hook useContext para acceder al contexto de autenticación (AuthContext) y extraer la función login del contexto.
  
  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/' //Obtiene la última ruta visitada del Local Storage o establece una ruta predeterminada ('/') si no hay una última ruta almacenada.

    login('Fernando Perez'); //Llama a la función login del contexto de autenticación con el nombre 'Fernando Perez'. Esto simula un inicio de sesión exitoso con ese nombre de usuario.
    
    //Navega a la última ruta visitada (o la ruta predeterminada) utilizando la función de navegación obtenida con useNavigate. La opción replace: true indica que la 
    //ruta actual debe ser reemplazada en el historial de navegación en lugar de agregar una nueva entrada.
    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>
    </div>
  )
}
