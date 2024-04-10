import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({   //Se inicializa el estado del form, a traves del input en su atributo "value"
        username: `strider`,
        email: `bobony@google.com`
    })

    const { username, email } = formState;   //Desestructuracion del estado del form, para su inicializacion

    //Con esta funcion se va a cambiar el estado del form segun del valor del input haciendo referencia al target seleccionado por su "value", que lo recibe a traves del "event"
    const onInputChange = ({ target }) => { 
        //Desestructuracion del target   
        const { name, value } = target; //name: representa el nombre del campo de entrada que cambió. Esto es útil para identificar qué campo de entrada se modificó en el formulario.
                                        //value: representa el nuevo valor del campo de entrada. Este valor es lo que el usuario ha ingresado o seleccionado en el campo de entrada.
        setFormState({         //Actualiza el estado del formulario. Al hacer esto, se mantiene la inmutabilidad del estado copiando el estado anterior (formState) y sobrescribiendo 
            ...formState,     //el campo correspondiente ([name]: value)
            [ name ]: value   //Esto es una Propiedad computada de los objetos, permite asignar a tiempo real a "name" el nombre de la propiedad en este caso el "username" o el "email" ubicados 
        })                    //En el input y el value su respectivo valor, permitiendo actualizar el codigo en tiempo real
    }

    useEffect(() => {
      //console.log("useEffect called");   //Cada vez que el formulario cambie su estado el "useEffect" va a ser llamado, para evitar esto es necesario indicarle una dependencia
                                        //Las dependencias son las condiciones que le indicamos al "useEffect para que se vuelva a llamar"
    }, [])                              //Al colocar los corchetes vacios le indicamos que solo se va a ejecutar 1 vez y solo cuando el componente es montado


    useEffect(() => {
      //console.log("formState changed");   
                                        
    }, [formState])                      //Al colocar un valor en el array, el "useEffect" va a dispararse cada vez que el valor del array cambie

    useEffect(() => {
      //console.log("email changed");   
                                        
    }, [email])  

    /*
        Cuando un campo de entrada (input) dentro del componente cambia su valor, se activa el evento "onChange", que está configurado para llamar a la función onInputChange. 
        Esta función toma un objeto de evento (event), que contiene la información del campo de entrada que ha cambiado. Luego, onInputChange extrae el nombre (name) y el valor (value) 
        del campo de entrada que desencadenó el evento. Finalmente, utiliza setFormState para actualizar el estado del formulario (formState) con el nuevo valor del campo de entrada.
    */
  return (
    <>
      <h1>Formulario Simple</h1>

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="bobony@gmail.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />

      {
        (username === "strider2") && <Message />  //*Si se ingresa un usuario llamado "strider2" entonces va a mostrar el mensaje "Usuario ya existe"
      }
    </>
  );
};
