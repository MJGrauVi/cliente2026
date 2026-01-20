import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';//Debe entrar tailwindcss
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
        <App />
    </BrowserRouter>
  </StrictMode>
=======
      <App />
    </BrowserRouter>
  </StrictMode>,
>>>>>>> 4bc89b6f46177c07f7ebe45f6db299b8601eb128
);

