import "./Error.css";
import BotonNavegar from "../estructura/BotonNavegar.jsx";

const Error = () => {

  //He comprobado la barra de direcciones y cuando pongo varias "////" no redirecciona a Error.jsx, 
  // con /# vuelve a inicio ¿no deberia ir a error?, con el resto de caracteres funciona bien.
 /*  const navegar = useNavigate(); */
  return (
    <div className="contenedor-error">
      <h2>Página de Error.</h2>
      <div>¡Si estás aquí es porque algo no ha salido bien!</div>
      {/* <button
        onClick={() => {
          navegar("/");
        }}
      >
        Volver a inicio
      </button> */}
      <BotonNavegar ruta="/" texto="Volver Inicio" />
    </div>
  );
};
export default Error;
