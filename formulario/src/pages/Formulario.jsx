import "./Formulario.css";
import FormularioControlado from "../components/FormularioControlado.jsx";
import  FormularioObjetoControl from "../components/FormularioObjetoControl.jsx";
import { useNavigate } from "react-router-dom";

const Formulario = ()=>{
     const navegar = useNavigate();
     return(
        <>
        <h1>Formulario</h1>
        <div>
          {/* <FormularioControlado /> */}
          <FormularioObjetoControl />
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