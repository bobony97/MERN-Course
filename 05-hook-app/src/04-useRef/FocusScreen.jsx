import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();  //Declaramos el ref

    const onClick = () => {     
        inputRef.current.select();
        console.log(inputRef)
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input
            ref={ inputRef }  //Señalamos donde queremos hacer la referencia y almacenamos la informacion en el "useRef"
            type="text"
            placeholder='Ingrese su Nombre'
            className='form-control' 
        />

        <button
        className='btn btn-primary'
        onClick={ onClick }>   {/*Disparamos la funcion "onClick" que a su vez contiene la referencia del input  */}
            Focus
        </button>
    </>
  )
}
