import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState(`OnePunch`);

  const onInputChange = (event) => {
    setInputValue(event.target.value); //Con el "event.target.value" capturamos el valor ingresado al input
  };

  const onSubmit = (event) => {
    event.preventDefault();   //Este evento evita los comportamiento por defecto
  }

  return (
    <form onSubmit={ (event) => onSubmit(event) } >
      <input
        type="text"
        placeholder="Buscar Gift"
        value={inputValue} //Setea el valor por defecto del useState
        onChange={onInputChange}
      />
    </form>
  );
};
