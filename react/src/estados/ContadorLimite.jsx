import React from "react";
import { useState } from "react";
import "../estados/ContadorLimite.css";

const ContadorLimite = () => {
  //Inicializo en 1 contador para que no muestre el mensaje con el límite al iniciar.
  const [contador, setContador] = useState(1);

  const incrementarUno = () => {
    if (contador <= 10) setContador(contador + 1);
  };
  const decrementarUno = () => {
    if (contador > 0) setContador(contador - 1);
  };
  return (
    <div className="contadorLimite-container">
      <h3>Contador límite</h3>
      <div className="texto">
        Valor actual de contador es: <p>{contador}</p>
      </div>
      {/* Aviso al usuario que ha alcanzado el tope. */}
      {contador === 10 && (
        <p className="avisoTope">Has alcanzado el máximo permitido (10).</p>
      )}
      {contador === 0 && (
        <p className="avisoTope">Has alcanzado el mímimo permitido (0).</p>
      )}
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
