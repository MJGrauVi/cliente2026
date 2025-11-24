import {useNavigate} from "react-router-dom";
const ListadoDiscos = ()=>{

    //Hook para redirigir la navegación.
    const navegar = useNavigate();
    return(
        <div className="contenedor-listadoDiscos">
            <h2>ListadoDiscos</h2>
           
            <button onClick={()=>{
                navegar("/");
            }}>
                Volver a inicio
            </button>
        </div>
    )
}
export default ListadoDiscos;