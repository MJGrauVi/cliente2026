import "./Discente.css";
const Discente = (props) => {
  const { nombre, apellidos, curso, aficiones, comida } = props.datos;
  return (
    <div className="discente-container">
      <ul>
        <li>
          <strong>Nombre completo: </strong>
          {nombre} {apellidos}
        </li>
        <li>
          <strong>Curso: </strong>
          {curso}
        </li>
        <li>
          <strong>Aficiones: </strong> {aficiones.join(", ")}
        </li>
        <li>
          <strong>Comida favorita: </strong>
          {comida}
        </li>
      </ul>
    </div>
  );
};
export default Discente;
