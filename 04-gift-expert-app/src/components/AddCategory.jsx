import { useState } from "react";

export const AddCategory = ({ setCategories }) => { //desestructuramos la prop que recibimos del padre
  const [inputValue, setInputValue] = useState(``);

  const onInputChange = (event) => {
    setInputValue(event.target.value); //Con el "event.target.value" capturamos el valor ingresado al input
  };

  const onSubmit = (event) => {
    event.preventDefault();   //Este evento evita los comportamiento por defecto
    if(inputValue.trim().length <= 1) return; //Evita el ingreso de caracteres vacios o de un solo caracter
    setCategories( categories => [...categories, inputValue] )  //Y la utilizamos para setear el valor del input al state
    setInputValue("");  //Setea un valor vacio luego de ingresar un valor
  }

  return (
    <form onSubmit={ onSubmit } >{/*No es necesario pasar el argumento "event" porque el navegador lo hace por si solo al manejador de eventos */}
      <input
        type="text"
        placeholder="Buscar Gift"
        value={inputValue} //Setea el valor por defecto del useState
        onChange={onInputChange}
      />
    </form>
  );
};
