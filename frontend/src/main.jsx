import React from 'react'
import ReactDOM from 'react-dom/client'
import { MoviesProvider } from './context/MoviesContext'
import App from './App'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MoviesProvider>
    <App />
  </MoviesProvider>
)
