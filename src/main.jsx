import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WeatherAPPProvider } from './Context/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < WeatherAPPProvider>
      <App />
    </WeatherAPPProvider>
  </React.StrictMode>,
)
