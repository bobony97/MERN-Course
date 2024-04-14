import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook"
// import { HooksApp } from './HooksApp'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Memorize } from './05-memos/Memorize'
// import { MemoHook } from './05-memos/MemoHook'
// import { CallBackHook } from './05-memos/CallBackHook'
// import { Padre } from './06-ejercicio/Padre'
// import "./08-useReducer/intro-reducer";
import { TodoApp } from './08-useReducer/TodoApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <HooksApp />,    
    // <CounterApp />,
    // <CounterWithCustomHook />,
    // <SimpleForm />
    // <FormWithCustomHook />
    // <MultipleCustomHooks />
    // <FocusScreen />
    // <Memorize />
    // <MemoHook />
    // <CallBackHook />
    // <Padre />
    <TodoApp />
  // </React.StrictMode>,
)
