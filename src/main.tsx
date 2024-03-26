import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes.tsx'
import AuthProviderWithNavigte from './auth/AuthProviderWithNavigte.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AuthProviderWithNavigte>
      <AppRoutes/>

      </AuthProviderWithNavigte>
    </Router>
  </React.StrictMode>,
)
