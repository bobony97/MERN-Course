import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  //Aca llamamos al custom hook "useForm", con sus propiedades desestructuradas "formState", "onInputChange" y las propiedades "username", "password", e "email", son extraidas
  //del objeto con el que inicializamos el "useForm"
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({ 
    username: "",
    email: "",
    password: "",
  });

  // const {username, email, password} = formState;


  return (
    <>
      <h1>Formulario Con Custom Hook</h1>

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="bobony@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
    </>
  );
};
