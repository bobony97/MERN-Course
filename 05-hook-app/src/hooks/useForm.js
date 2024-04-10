import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
  const [formState, setFormState] = useState( initialForm );

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

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
