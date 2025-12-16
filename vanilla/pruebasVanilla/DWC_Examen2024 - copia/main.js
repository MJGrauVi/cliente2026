"use strict";

import {
  libros,
  setLibros,
  validarFormulario,
  guardarLibrosEnLocalStorage,
  cargarLibrosDesdeLocalStorage,
  renderTabla,
  mostrarErrores,
  actualizarEstadisticas
} from "./funciones/funciones.js";

window.onload = ()=>{
/* =====================
   CONSTANTES DOM
===================== */
const formulario = document.getElementById("libro-formulario");
const erroresSeccion = document.getElementById("errores-seccion");
const tablaBody = document.querySelector("#tabla-libros tbody");
const filtroGenero = document.getElementById("filtros-genero");
const totalLibros = document.getElementById("total-libros");
const generosLibros = document.getElementById("generos-libros");

/* =====================
   CARGA INICIAL
===================== */
const librosCargados = cargarLibrosDesdeLocalStorage();
setLibros(librosCargados);

renderTabla(tablaBody, librosCargados);
actualizarEstadisticas(totalLibros, generosLibros, librosCargados);
localStorage.getItem("libros")
/* =====================
   SUBMIT FORMULARIO
===================== */
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const titulo = formulario.titulo.value.trim();
  const autor = formulario.autor.value.trim();
  const genero = formulario.genero.value;
  const fecha = formulario.fecha.value;

  const errores = validarFormulario({ titulo, autor, genero, fecha });

  if (errores.length) {
    mostrarErrores(erroresSeccion, errores);
    return;
  }
    // SI NO HAY ERRORES → limpiar SIEMPRE
  mostrarErrores(erroresSeccion, []);
    
  const nuevosLibros = [...libros, { titulo, autor, genero, fecha }];
  setLibros(nuevosLibros);

  guardarLibrosEnLocalStorage(nuevosLibros);
  renderTabla(tablaBody, nuevosLibros);
  actualizarEstadisticas(totalLibros, generosLibros, nuevosLibros);

  formulario.reset();
});

/* =====================
   ELIMINAR LIBRO
===================== */
tablaBody.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("btn-eliminar")) {
    const index = Number(evento.target.dataset.index);
    const nuevosLibros = libros.filter((_, i) => i !== index);

    setLibros(nuevosLibros);
    guardarLibrosEnLocalStorage(nuevosLibros);
    renderTabla(tablaBody, nuevosLibros);
    actualizarEstadisticas(totalLibros, generosLibros, nuevosLibros);
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

  renderTabla(tablaBody, listaFiltrada);
});
//localStorage.removeItem("discos");
};//fin window.onload.
