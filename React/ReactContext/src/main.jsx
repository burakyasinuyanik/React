import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { ThemeContextProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeContextProvider>
  </StrictMode>,
)
