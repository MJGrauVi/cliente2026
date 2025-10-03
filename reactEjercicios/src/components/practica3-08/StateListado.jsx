import React from "react";

const StateListado = () => {

  let [numero, setNumero] = useState();

  //generar numero aleatorio -no repatido

  const generarNumNoRepe =()=>{
    if(numero >= 100) return;
    let numeroNuevo;
    do{
      numeroNuevo = Math.floor(Math.random()*100)+1;
    }while(numero.include(numeroNuevo)){
      setNumero(...numero, numeroNuevo);
    }
  }

  const resetearNumeros = ()=> setNumero([]);

  
  return (
    <div className="stateListado-container"> 
      <p>Algo de texto.</p>
      <button>Generar</button>
      <button>Eliminar</button>
    </div>
  );
};

export default StateListado;
