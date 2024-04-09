import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter()  //El custom hook "useCounter" esta devolviendo un objeto por eso mismo la desestructuracion es con "{}" llaves

  return (
    <>
        <h1>Counter with hook: { counter }</h1>
        <button className="btn btn-primary" onClick={ () => increment(2) } >+1</button>  {/*Aca podemos ver como le pasamos el argumento del valor a incrementar */}
        <button className="btn btn-primary" onClick={ reset }>reset</button>
        <button className="btn btn-primary" onClick={ decrement }>-1</button>
        <hr />
    </>
  )
}
