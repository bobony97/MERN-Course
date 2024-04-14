import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => { //Funcion que viene desde el componente padre "TodoApp"

    const { description, onInputChange, onResetForm } = useForm({
        description: ""
    })

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if(description.length <= 1) return;

        const newTodo = {  //Creamos el nuevo "todo" con la "description" que obtenemos del formulario
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo(newTodo);  //Enviamos el "todo" al padre a traves de la funcion
        onResetForm(); //Reseteamos el valor del "input"  del formulario para 
    }


  return (

      <form onSubmit={ onFormSubmit } > 
        <input
          type="text"
          placeholder="Que hay que hacer?"
          className="form-control"
          name="description"  //Este "name" es para la funcion "onInputChange" que utiliza el "name" para recibir el valor del input
          value={ description }  //Aca se va almacenar el valor del input para luego ser enviado al "name"
          onChange={ onInputChange } //El "onChange" va a detectar los cambios y enviar todo cambio a la funcion "onInputChange" que recibe el "name" y el "value" y los insertan en el state
        />

        <button 
            type="submit" className="btn btn-outline-primary mt-1"
        >
          Agregar
        </button>
      </form>

  );
};
