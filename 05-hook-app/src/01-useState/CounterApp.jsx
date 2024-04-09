import { useState } from "react";

export const CounterApp = () => {

    const [state, setCounter] = useState({   //Recibimos un objeto con 3 propiedades 
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state; //Desestructuramos todo el objeto 

  return (
    <>
        <h1>Counter: { counter1 }</h1>
        <h1>Counter: { counter2 }</h1>
        <h1>Counter: { counter3 }</h1>
        <hr />

        <button className="btn btn-primary" onClick={() => setCounter({ //Recibimos el objeto en la funcion y utilizamos el spread operator para modificar la propiedad "counter1" y mantener las otras
            ...state,
            counter1: counter1 + 1
        })}>+1</button>
    </>
  )
}
