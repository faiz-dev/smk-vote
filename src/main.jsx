import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './features/App'
import routes from './routes'
import './index.css'
import AuthProvider from './AuthProvider'
import VotingPramuka from './features/VotingPramuka'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>  
        {/* <App /> */}
        {/* <VotingPramuka/> */}
    </RouterProvider>
  </React.StrictMode>
)
