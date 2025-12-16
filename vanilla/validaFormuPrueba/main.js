"use strict";

window.onload = () => {

    //Constantes DOM.
    const formulario = document.getElementById("libro-formulario");
    const seccionErrores = document.getElementById("errores-seccion");
    const generoFiltro = document.getElementById("filtros-genero");
    const totalLibrosP = document.getElementById("total-libros");
    const generoLibrosP = document.getElementById("generos-libros");
    const tablaLibrosBody = document.querySelector("#tabla-libros tbody");


    //carga inicial.

    const listaLibros = cargarLibrosDesdeLocalStorage();
    setLibros(listaLibros);

    //mostrar listado.
    renderLibros(tablaLibrosBody, listaLibros);






}; //Fin de window.onload.