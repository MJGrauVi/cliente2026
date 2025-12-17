"use strict";

import {
  libros,
  setLibros,
  validarFormulario,
  guardarLibrosEnLocalStorage,
  cargarLibrosDesdeLocalStorage,
  renderTabla,
  mostrarErrores,
  actualizarEstadisticas,
} from "./funciones/funciones3.js";

window.onload = () => {
  // SELECTORES DOM
  const formulario = document.getElementById("libro-formulario");
  const erroresSeccion = document.getElementById("errores-seccion");
  const tablaLibrosBody = document.querySelector("#tabla-libros tbody");
  const filtroGenero = document.getElementById("filtros-genero");
  const totalLibrosP = document.getElementById("total-libros");
  const totalGeneroP = document.getElementById("generos-libros");

  // CARGA INICIAL 
   const librosCargados = cargarLibrosDesdeLocalStorage();

  setLibros(librosCargados);

  guardarLibrosEnLocalStorage(librosCargados);
  renderTabla(tablaLibrosBody, librosCargados);
  actualizarEstadisticas(totalLibrosP, totalGeneroP, librosCargados);

  // SUBMIT FORMULARIO
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const genero = document.getElementById("genero").value;
    const fecha = document.getElementById("fecha").value;

    const errores = validarFormulario({ titulo, autor, genero, fecha });
    if (errores.length) {
      mostrarErrores(erroresSeccion, errores);
      return;
    }
    mostrarErrores(erroresSeccion, []);

    const nuevoLibro = {
      id: crypto.randomUUID(),
      titulo,
      autor,
      genero,
      fecha,
    };
    //Guardamos los datos.
    const nuevosLibros = [...libros, nuevoLibro];
    setLibros(nuevosLibros);
    guardarLibrosEnLocalStorage(nuevosLibros);
    renderTabla(tablaLibrosBody, nuevosLibros);
    actualizarEstadisticas(totalLibrosP, totalGeneroP, nuevosLibros);

    formulario.reset();
  });

  // ELIMINAR LIBRO
 tablaLibrosBody.addEventListener("click", (evento)=>{
      if(evento.target.classList.contains("btn-eliminar")){
        const id = evento.target.dataset.id;
        const nuevaLista = libros.filter(libro => libro.id !== id);
        setLibros(nuevaLista);
        guardarLibrosEnLocalStorage(nuevaLista);
        renderTabla(tablaLibrosBody, nuevaLista);
        actualizarEstadisticas(totalLibrosP, totalGeneroP, nuevaLista);
      }
    }, false);

  // FILTRO POR GÉNERO
  filtroGenero.addEventListener("change", () => {
    const generoSeleccionado = filtroGenero.value;
    const listaFiltrada = generoSeleccionado
      ? libros.filter((libro) => libro.genero === generoSeleccionado)
      : libros;

    renderTabla(tablaLibrosBody, listaFiltrada);
    actualizarEstadisticas(totalLibrosP, totalGeneroP, listaFiltrada);
  });

 //localStorage.removeItem("libros");
};//fin window.onload.
