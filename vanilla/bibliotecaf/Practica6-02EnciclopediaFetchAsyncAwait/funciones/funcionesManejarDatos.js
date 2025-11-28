"use strict";

// Función para consumir promesas generalista.
const traerDatos = (url) => {
  // Obtiene datos de una API y los transforma a JSON.
  return (
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        return datos;
      })
      // Si se produce un error se devuelve un mensaje.
      .catch((error) => {
        return `Se ha producido un error: ${error.message}`;
      })
  );
};

//Funcion para consumir promesas con async/await
  const traerDatosApi = async (urlApi) => {
    const respuesta = await fetch(urlApi);
    const datos = await respuesta.json();
    return datos;
  };

export { traerDatos, traerDatosApi };
