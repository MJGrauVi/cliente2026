import React from "react";
import { createContext, useState, useEffect } from "react";
import  useApi  from "../hooks/useApi.js";

const ContextoCD = createContext();

const ProveedorCD = ({ children }) => {
  const [cd, setCd] = useState([]);

  //Traemos los elementos del hook que necesitamos.

  const { cargando, error, cargarDatos } = useApi();

  const URL_API = "http://localhost:3002/cd";

  //Funciones que consumen useApiContext.

  const cargarCDs = async () => { 
    try { 
      const datos = await cargarDatos(URL_API); 
      setCd(datos); 
    } catch (error) { 
      throw error;
    } 
  };

  //Cargar los datos.
  useEffect(() => { 
    cargarCDs(); 
  }, []);

  const datosACompartir = { cargando, error, cd };

  return (
    <ContextoCD.Provider value={datosACompartir}>
      {children}
    </ContextoCD.Provider>
  );
};

export default ProveedorCD;
export { ContextoCD };
