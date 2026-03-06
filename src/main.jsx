import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SavedProvider } from "../src/Components/SavedContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SavedProvider>
      <App />
    </SavedProvider>
  </StrictMode>,
)
