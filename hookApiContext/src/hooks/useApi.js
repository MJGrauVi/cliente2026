import React, { useState } from "react";

//Hook para comunicación con la API
const useApi = () => {

  //Estado para el tiempo de espera a la respuesta del servidor.
  const [cargando, setCargando] = useState(false);
  //Estado para errores de conexión con la API.
  const [error, setError] = useState(null);

  //Petición genérica a la API, pasando el método y otras opciones como parámetro.
  const solicitarA = async (url, options = {}) => {
    setCargando(true);
    setError(null);

    try {
      //Simulacion retardo  carga datos.
      await new Promise(resolve => setTimeout(resolve, 2000));

      const respuesta = await fetch(url, {
        headers: { "Content-Type": "application/json" },
        ...options,
      });

      if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
      }

      return await respuesta.json();
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setCargando(false);
    }
  };

  //Funcion con el método GET, método predeterminado si no se especifica.
  const cargarDatos = (url) => {
    return solicitarA(url, {
      method: "GET"
    });
  };

  //Función para el método POST.
  const guardarDatos = (url, body) => {
    return solicitarA(url, {
      method: "POST",
      body: JSON.stringify(body),
    });
  };

  //Función para el método PUT, edita objeto completo.
  const editarDatosCompleto = (url, body) => {
    return solicitarA(url, {
      method: "PUT",
      body: JSON.stringify(body)
    });
  };

  const editarParteDatos = (url, body) => {
    return solicitarA(url, {
      method: "PATH",
      body: JSON.stringify(body),
    });
  };

  const borrarDatos = (url) => {
    solicitarA(url, {
      method: "DELETE",
    });
  };


  return { cargando, error, cargarDatos, guardarDatos, editarDatosCompleto, editarParteDatos, borrarDatos };
};
export default useApi;