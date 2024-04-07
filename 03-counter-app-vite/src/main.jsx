import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'

import "./style.css";

ReactDOM.createRoot( document.getElementById("root") ).render(
    <React.StrictMode>
        <FirstApp title='Hola, soy agustin' subtitle={123} /> 
        <hr />
        <CounterApp value={123} />
        
    </React.StrictMode>
)