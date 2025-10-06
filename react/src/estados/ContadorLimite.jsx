import React from "react";
import { useState } from "react";
import "../estados/ContadorLimite.css";

const ContadorLimite = () => {
  const [contador, setContador] = useState(0);

  const incrementarUno = () => {
    if (contador <= 10) setContador(contador + 1);
  };
  const decrementarUno = () => {
    if (contador > 0) setContador(contador - 1);
  };
  return (
    <div className="contadorLimite-container">
      <h3>Contador límite</h3>
      <div className="texto">Valor actual de contador es: <p>{contador}</p></div>
      <div className="contadorLimite-botones">
        <button onClick={incrementarUno} disabled={contador === 10}>
          Incrementar
        </button>
        <button onClick={decrementarUno} disabled={contador === 0}>
          Decrementar
        </button>
      </div>
    </div>
  );
};

export default ContadorLimite;
