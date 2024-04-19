import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { BrowserRouter } from "react-router-dom"
import { HeroesApp } from './HeroesApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
