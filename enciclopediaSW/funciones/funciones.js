const traerDatos = async (url) => {
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
        throw new Error(`Error al cargar los datos ${respuesta.status} - ${respuesta.statusText}`);
    }

    const datos = await respuesta.json();
    return datos.results ?? datos;
};
export {traerDatos};