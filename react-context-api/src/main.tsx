import React from 'react'
import ReactDOM from 'react-dom/client'
import AppUseCustomHook from './AppUseCustomHook.tsx'
// import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppUseCustomHook />
  </React.StrictMode>,
)
