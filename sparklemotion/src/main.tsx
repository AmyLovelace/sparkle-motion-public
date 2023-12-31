import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/config/i18n.config'
import AppRouter from '@/router/AppRouter'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
)
