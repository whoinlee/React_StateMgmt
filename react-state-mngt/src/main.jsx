import React from 'react'
import ReactDOM from 'react-dom/client'
// import AppUseReducer from './AppUseReducer.jsx';
import AppCallbackMemo from './AppCallbackMemo.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppUseReducer /> */}
    <AppCallbackMemo />
  </React.StrictMode>,
)
