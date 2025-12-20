import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { ActorProvider } from "./context/ActorContext.jsx";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ActorProvider>
      <App />
    </ActorProvider>
  </StrictMode>,
)
