import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook"
// import { HooksApp } from './HooksApp'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <HooksApp />,    
    // <CounterApp />,
    // <CounterWithCustomHook />,
    // <SimpleForm />
    // <FormWithCustomHook />
    <MultipleCustomHooks />
  // </React.StrictMode>,
)
