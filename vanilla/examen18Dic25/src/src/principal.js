"use strict";

import {videojuegos, setVideojuegos, validarFormulario, guardarVJEnLocalStorage, cargarVJDesdeLocalStorage, renderTabla, mostrarErrores } from "./js/funciones/funciones.js";


/*

https://swapi.dev/api/
http://swapi.py4e.com/api/
https://swapi.info/api/
*/
window.onload = () => {

    //Referencias al DOM.

    const formulario = document.getElementById("videojuegosFormulario");
    const selectGenero = document.getElementById("genero");
    const seccionTablaBody = document.querySelector("#tablaVideojuegos tbody");
    const erroresSeccion = document.getElementById("erroresSeccion");
    const generoFiltroSec = document.getElementById("filtrosGenero");
    const btnGuardar = document.getElementById("seguridadBotones");

    //Cargar app.

    const nuevosVideoJuegos = cargarVJDesdeLocalStorage();
    setVideojuegos(nuevosVideoJuegos);
    //Validar formulario.

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const titulo = document.getElementById("titulo").value.trim();
        const desarrollador = document.getElementById("desarrollador").value.trim();
        const genero = document.getElementById("genero").value;

        const errores = validarFormulario({ titulo, desarrollador, genero });

        if (errores.length) {
            mostrarErrores(erroresSeccion, errores)
        }
        const nuevoVideoJuego = { id: crypto.randomUUID(), titulo, desarrollador, genero };

        const nuevosVideoJ = [...videojuegos, nuevoVideoJuego];
        setVideojuegos(nuevosVideoJ);

        renderTabla(seccionTablaBody, nuevosVideoJ);
        guardarVJEnLocalStorage(nuevosVideoJ);

        formulario.reset();


    }, false);


    //Eliminar

    seccionTablaBody.addEventListener("click", (evento) => {
        if (evento.target.classList.contains("btn-eliminar")) {
            const id = evento.target.dataset.id;
            const listaNueva = videojuegos.filter(v => v.id !== id);
            setVideojuegos(listaNueva);
            renderTabla(seccionTablaBody, listaNueva);
        }
    }, false);

    //filtrado

    generoFiltroSec.addEventListener("change", (evento) => {
        const generoSeleccionado = generoFiltroSec.value;
        const nuevaLista = generoSeleccionado ?
            videojuegos.filter(vj => vj.genero === generoSeleccionado) : videojuegos;

        renderTabla(seccionTablaBody, nuevaLista);
    })
    


};//fin window.onload.