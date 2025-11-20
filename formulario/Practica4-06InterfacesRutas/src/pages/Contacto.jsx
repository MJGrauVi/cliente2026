import {useNavigate} from "react-router-dom";
const Contacto = ()=>{

    //Hook para redirigir la navegación.
    const navegar = useNavigate();
    return(
        <div className="contenedor-contacto">
            <h2>Datos de contacto</h2>
            <div>
                <strong>email:</strong>margravid2@alu.edu.gva.es
            </div>
            <button onClick={()=>{
                navegar("/");
            }}>
                Volver a inicio
            </button>
        </div>
    )
}
export default Contacto;