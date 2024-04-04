import { useState } from 'react'
import PropTypes from 'prop-types'

export function CounterApp({value}) {

    const [ counter, setCounter ] = useState(value);  //Entre los parentesis va el valor inicial del hook

    const handleAdd = () => {
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 );   //Otra forma de modificar nuestro counter
    }

    const handleSubstract = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(value)
    }

    //CADA VEZ QUE CAMBIE EL ESTADO, EL COMPONENTE SE VUELVE A EJECUTAR

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ handleAdd }>
            +1
        </button>
        <button onClick={ handleSubstract }>
            -1
        </button>
        <button onClick={ handleReset }>
            Reset
        </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

