import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './features/App'
import routes from './routes'
import './index.css'
import KPULogin from './features/KPULogin'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KPULogin/>
  </React.StrictMode>
)
