import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import AppWithState from './AppWithState'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWithState />
  </StrictMode>,
)
