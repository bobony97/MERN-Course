import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy2 } from './store/slices/counter/counterSlice';
import './App.css'

function App() {
  
  //"useSelector" es un hook de React Redux que permite seleccionar parte del estado del store de Redux y asignarlo a una variable local en un componente funcional de React.
  const { counter } = useSelector( state => state.counter ); //state => state.counter: Esto es una función que toma el estado global de Redux (state) y devuelve la parte del estado que deseas 
                                                            //seleccionar, en este caso, state.counter, en donde el "counter" esta asignado en el store.
                                                        
  //"useDispatch" es otro hook de React Redux que permite obtener la función dispatch, que se utiliza para enviar acciones al store de Redux.
  const dispatch = useDispatch(); 

  return (
    <>
      <div className="card">
        <p> Count is: { counter } </p>
        <button onClick={() => { dispatch( increment() ) }}>  {/*Aca el "dispatch" esta disparando la accion "increment" definida en el reducer */}
          Increment 
        </button>
        <button onClick={() => { dispatch( decrement() ) }}>  
          Decrement 
        </button>
        <button onClick={() => { dispatch( incrementBy2(2) ) }}>  
          increment By 2 
        </button>
      </div>
    </>
  )
}

export default App
