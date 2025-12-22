import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { ProveedorActor } from "./context/ProveedorActor.jsx";
import { ProveedorPelicula } from "./context/ProveedorPelicula.jsx";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProveedorPelicula>
      <ProveedorActor>
        <App />
      </ProveedorActor>
    </ProveedorPelicula>
  </StrictMode>,
)
