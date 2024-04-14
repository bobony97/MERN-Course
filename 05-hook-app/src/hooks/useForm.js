import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
  // crea un estado llamado formState con el valor inicial proporcionado (o un objeto vacío si no se proporciona ningún valor inicial).
  const [formState, setFormState] = useState( initialForm );  

  /*
    Es una función que se ejecuta cuando hay un cambio en un elemento de entrada del formulario (como un input).
    Se utiliza onInputChange como el manejador de cambios (onChange) del input, lo que significa que cuando el usuario escribe en el input, se ejecutará onInputChange para actualizar
    el estado del formulario.
  */
  const onInputChange = ({ target }) => { //Recibe un objeto event ({ target }) como argumento, y a partir de ese objeto extrae el nombre (name) y el valor (value) del elemento que ha cambiado.
    const { name, value } = target; // Aquí se aplica la desestructuración de objetos nuevamente para extraer dos propiedades del objeto target. 
    //En un evento de cambio (onChange) de un elemento de formulario, el target generalmente se refiere al elemento que ha cambiado. 
    //Entonces, "name" sería el nombre del campo (por ejemplo, "description" en este caso) y "value" sería el valor que ha sido ingresado por el usuario en ese campo.

    //Luego, utiliza setFormState para actualizar el estado formState. Utiliza la sintaxis de spread (...formState) para copiar el estado actual y luego sobrescribe 
    //el campo correspondiente ([name]: value) con el nuevo valor.
    setFormState({
      ...formState,
      [name]: value,
      /*
        Cuando se utiliza [name]: value dentro de un objeto en JavaScript, significa que el nombre de la propiedad será el valor de la variable name. En otras palabras, 
        name se interpreta como el nombre de la propiedad dentro del objeto. Aquí está el desglose de esta sintaxis:

        [name]: Esto indica que el nombre de la propiedad será el valor contenido en la variable name.
        :: Es el separador que indica la asignación de un valor a una propiedad en un objeto.
        value: Es el valor que se asigna a la propiedad cuyo nombre es determinado dinámicamente por name.
      */
    });
  };

  
  //Es una función que se ejecuta para restablecer el formulario a su estado inicial. Utiliza setFormState(initialForm) para actualizar el estado formState con el valor inicial proporcionado.
  const onResetForm = () => {
    setFormState( initialForm )
  }

  return {
    ...formState,   //Enviamos el "formState" con su estado actual para luego ser desestructurado al inicializar el estado
    formState,
    onInputChange,
    onResetForm,
  };
};


//INPUT EJEMPO
{/* <input
  type="text"
  placeholder="cualquier cosa"
  name="description" //Es el nombre del campo, que hace referencia a la desestructuracion del "target" en la funcion "onInputChange"
  value={ description }   //Este input es de donde va a tomar el valor la funcion "onInputChange"
  onChange={ onInputChange } En el contexto de un input en un formulario, por ejemplo, el evento onChange se dispara cada vez que el usuario escribe, borra o modifica el contenido del input. 
  Esto significa que cada vez que se produce un cambio en el input, se activa la función asociada al evento onChange.

  type="text" indica que es un input de texto.
  value={value} establece el valor del input, donde value es una variable que contiene el valor actual del input.
  onChange={handleChange} asigna la función handleChange como el manejador del evento onChange. Esta función se ejecutará cada vez que el usuario cambie el valor del input.
/> */}
