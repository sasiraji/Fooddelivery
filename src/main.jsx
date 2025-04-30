import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from "./Context/StoreContext"
import ErrorBoundary from './components/ErrorBoundary'

// Development-only error logging
if (process.env.NODE_ENV === 'development') {
    window.addEventListener('error', (event) => {
        console.error('Uncaught error:', event.error);
    });
    
    window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason);
    });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </ErrorBoundary>,
)
