import React from "react";
import { generarNumeroNoRepetido } from "../biblioteca/funciones.js";
import { useState } from "react";
import "../estados/Listado.css";

const Listado = () => {
  const [numeros, setNumeros] = useState([]);

  //Con esta función modificamos el estado de números. Generamos un nuevo valor con la llamada a la
  //función que importamos y actualizamos el estado llamando a setNumeros.
  const generarNumero = () => {
    let numeroValido = generarNumeroNoRepetido(numeros);
    if (numeroValido !== null) {
      setNumeros([...numeros, numeroValido]);
    }
  };

  const eliminarNumero = () => {
    setNumeros([]);
  };
  return (
    <div className="listado-container">
      <h3>Estado con array</h3>
      <div className="listado-container-ul">
        {numeros.length > 0 ? (
          <ul>
            {numeros.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        ) : (
          <p className="listado-p">
            No hay valores en el array. <br /> Haz clic en{" "}
            <strong> Generar </strong> para incluir un valor.
          </p>
        )}
      </div>
      <div className="listado-botones">
        <button onClick={generarNumero}>Generar</button>
        <button onClick={eliminarNumero}>Eliminar</button>
      </div>
    </div>
  );
};

export default Listado;
