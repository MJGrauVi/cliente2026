import "./Formulario.css";

import { useNavigate } from "react-router-dom";

const Formulario = ()=>{
     const navegar = useNavigate();
     return(
        <>
        <h1>Formulario</h1>
        
         <button
        onClick={() => {
          navegar("/");
        }}
      >
        Volver a Inicio
      </button>
        </>
     )
    
};
export default Formulario;