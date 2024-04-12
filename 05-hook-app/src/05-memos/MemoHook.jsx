import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const heavyStuff = ( iterationNumber = 100 ) => {
    for(let i = 0; i < iterationNumber; i++) {
        console.log("Ahi vamos..")
    }

    return `${iterationNumber} iteraciones realizadas`;
}


export const MemoHook = () => {

  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  //Este "memo" va a memorizar "heavyStuff( counter )", que esta inicializado en "4000" por lo tanto va a imprimir 4000 iteraciones en la consola
  const memorizeValue = useMemo(() => heavyStuff( counter ), [ counter ]);  //Como dependencia le indicamos que se actualice cada vez que detecte un cambio en el "counter"


  return (
    <>
      <h1>Counter: <small> { counter } </small> </h1>
      <hr />

      <h4> { memorizeValue } </h4>

      <button
      className='btn btn-primary'
      onClick={ () => increment() }
      >
        +1
      </button>

      <button
      className='btn btn-outline-primary'
      onClick={ () => setShow( !show ) }
      >
        Show/Hide { JSON.stringify(show) }
      </button>
    </>
  )
}
