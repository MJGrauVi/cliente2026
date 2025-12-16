"use strict";

import {libros, setLibros, validarFormulario, guardarLibrosEnLocalStorage, cargarLibrosDesdeLocalStorage, renderTabla, mostrarErrores, actualizarEstadisticas} from "./funciones/funciones.js";
window.onload = () =>{

//Constantes globales.
const formulario = document.getElementById("formulario-seccion");
const erroresSeccion = document.getElementById("errores-seccion");
const tablaLibrosBody = document.querySelector("#tabla-libros tbody");
const totalLibrosP = document.getElementById("total-libros");
const totalGeneroP = document.getElementById("generos-libros");
const filtroGenero = document.getElementById("filtros-genero");


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

formulario.addEventListener("submit", (evento)=>{
    //prevenir el comportamiento por defecto de button.
    evento.preventDefault();

    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const genero = document.getElementById("genero").value;
    const fecha = document.getElementById("fecha").value;

    const errores = validarFormulario({titulo, autor, genero, fecha});

    if(errores.length){
        mostrarErrores(erroresSeccion, errores);
        return; //Cortamos ejecución.
    }
    //si no hay errores, limpiar.
    mostrarErrores(erroresSeccion, []);

    //Guardamos los datos.
    const nuevosLibros = [...libros, {titulo, autor, genero, fecha}];

    setLibros(nuevosLibros);

    guardarLibrosEnLocalStorage(nuevosLibros);
    renderTabla(tablaLibrosBody, nuevosLibros);
    actualizarEstadisticas(totalLibrosP, totalGeneroP, librosCargados);

    formulario.reset();
});

//Eliminar un libro.

tablaLibrosBody.addEventListener("click", (evento)=>{
    if(evento.target.classList.contains("btn-eliminar")){
        const index = Number(evento.target.dataset.index);
        const nuevosLibros = libros.filter((_, i)=> i !== index);
        setLibros(nuevosLibros);
        guardarLibrosEnLocalStorage();
        renderTabla();
        actualizarEstadisticas();
    }
});
/* =====================
   FILTRAR POR GÉNERO
===================== */
filtroGenero.addEventListener("change", () => {
  const generoSeleccionado = filtroGenero.value;
  const listaFiltrada = generoSeleccionado
    ? libros.filter(libro => libro.genero === generoSeleccionado)
    : libros;

  renderTabla(tablaLibrosBody, listaFiltrada);
});



};//fin del window.onload.