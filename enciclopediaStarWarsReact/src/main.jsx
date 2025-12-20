import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { ActorProvider } from "./context/ActorContext.jsx";
import { FilmProvider } from "./context/FilmContext.jsx";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilmProvider>
      <ActorProvider>
        <App />
      </ActorProvider>
    </FilmProvider>
  </StrictMode>,
)
