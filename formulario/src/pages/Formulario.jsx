import "./Formulario.css";
import FormularioControlado from "../components/FormularioControlado.jsx";

import { useNavigate } from "react-router-dom";

const Formulario = ()=>{
     const navegar = useNavigate();
     return(
        <>
        <h1>Formulario</h1>
        <div>
          <FormularioControlado />
        </div>
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