import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './features/App'
import routes from './routes'
import './index.css'
import AuthProvider from './AuthProvider'
import HalPortal from './features/Hal-Portal'
import Sukses from './features/Sukses'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>  
        <App />
    </RouterProvider>
  </React.StrictMode>
)

