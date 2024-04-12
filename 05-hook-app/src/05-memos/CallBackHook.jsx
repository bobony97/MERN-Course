import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    //Sirve para memorizar funciones, pero la funcion memorizada solo se va a volver a ejecutar cuando algo cambie
    const incrementFather = useCallback(  
      (valorAIncrementar) => {  //Este parametro es el del la prop "increment" que enviamos por parametro
        setCounter((valorPrevio) => valorPrevio + valorAIncrementar)  //Utilizando el "valorPrevio" enviamos el estado previo como un parametro y luego a ese estado lo incrementamos en el valor indicado
        //Si usamos el metodo "setCounter" como se usa generalmente, el cambio se va a memorizar en el "incrementFather" y no lo va a volver a renderizar ya que esta memorizado y no es necesario
        //renderizarlo nuevamente
      },
      [],
    )

  return (
    <>
        <h1>useCallBack Hook: { counter }  </h1>
        <hr />

        <ShowIncrement increment={ incrementFather } />
    </>
  )
}


