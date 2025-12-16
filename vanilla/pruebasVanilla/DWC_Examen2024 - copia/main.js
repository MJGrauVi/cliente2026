"use strict";

import { libros, setLibros, validarFormulario, guardarLibrosEnLocalStorage, cargarLibrosDesdeLocalStorage, renderTabla, mostrarErrores, actualizarEstadisticas } from "./funciones/funciones.js";
window.onload = () => {

    //Constantes globales.
    const formulario = document.getElementById("libro-formulario");
    const erroresSeccion = document.getElementById("errores-seccion");
    const tablaLibrosBody = document.querySelector("#tabla-libros tbody");
    const filtroGenero = document.getElementById("filtros-genero");
    const totalLibrosP = document.getElementById("total-libros");
    const totalGeneroP = document.getElementById("generos-libros");
    let listaFiltrada = []; // arriba del window.onload.


    //Estado en funciones.js

    /* let libros = [];
    const setLibros = (nuevosLibros)=>{
        libros = nuevosLibros;
    } */

    //Carga inicial.

    const librosCargados = cargarLibrosDesdeLocalStorage();
    setLibros(librosCargados);

    renderTabla(tablaLibrosBody, librosCargados);
    actualizarEstadisticas(totalLibrosP, totalGeneroP, librosCargados);

    formulario.addEventListener("submit", (evento) => {
        //prevenir el comportamiento por defecto de button.
        evento.preventDefault();

        const titulo = document.getElementById("titulo").value.trim();
        const autor = document.getElementById("autor").value.trim();
        const genero = document.getElementById("genero").value;
        const fecha = document.getElementById("fecha").value;

        //Añado id para eliminar libro por su id.
        const nuevoLibro = {
            id: crypto.randomUUID(),
            titulo,
            autor,
            genero,
            fecha
        };
        const errores = validarFormulario({ titulo, autor, genero, fecha });

        if (errores.length) {
            mostrarErrores(erroresSeccion, errores);
            return; //Cortamos ejecución.
        }
        //si no hay errores, limpiar.
        mostrarErrores(erroresSeccion, []);

        //Guardamos los datos.
        const nuevosLibros = [...libros, nuevoLibro];

        setLibros(nuevosLibros);

        guardarLibrosEnLocalStorage(nuevosLibros);
        renderTabla(tablaLibrosBody, nuevosLibros);
        actualizarEstadisticas(totalLibrosP, totalGeneroP, librosCargados);

        formulario.reset();
    });

    //Eliminar un libro por id.

    tablaLibrosBody.addEventListener("click", (evento) => {
        if (evento.target.classList.contains("btn-eliminar")) {
            const id = evento.target.dataset.id;
            const nuevosLibros = libros.filter(libro => libro.id !== id);
            setLibros(nuevosLibros);
            guardarLibrosEnLocalStorage();
            renderTabla(tablaLibrosBody, listaFiltrada);
            actualizarEstadisticas(totalLibrosP, totalGeneroP, librosCargados);
        }
    });
    /* =====================
       FILTRAR POR GÉNERO
    ===================== */
    //Genero una constante para poder eliminar un libro de la lista filtrada.
    filtroGenero.addEventListener("change", () => {
        const generoSeleccionado = filtroGenero.value;
        listaFiltrada = generoSeleccionado
            ? libros.filter(libro => libro.genero === generoSeleccionado)
            : libros;

        renderTabla(tablaLibrosBody, listaFiltrada);
        actualizarEstadisticas(totalLibrosP, totalGeneroP, listaFiltrada);
    });

    //localStorage.removeItem("libros");

};//fin del window.onload.