import React from 'react'

export const ShowIncrement = React.memo( ({ increment }) => {

    console.log(`Me volvi a generar`);
  return (
    <button
        className='btn btn-primary'
        onClick={() => {
            increment( 5 ); //Queremos que se incremente de 5 en 5 asi le enviamos el valor por parametro a la funcion
        }}
    >
        Incrementar
    </button>
  )
})
