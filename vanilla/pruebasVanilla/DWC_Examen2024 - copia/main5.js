"use strict";
import { libros, setLibros, validarFormulario, cargarLibrosDesdeLocalStorage, guardarLibrosEnLocalStorage, renderTabla, mostrarErrores, actualizarEstadisticas } from "./funciones/funciones5.js";

window.onload = () => {
  //REFERENCIAS AL DOM.
  const formulario = document.getElementById("libro-formulario");
  const erroresSeccion = document.getElementById("errores-seccion");
  const tablaLibrosBody = document.querySelector("#tabla-libros tbody");
  const totalLibros = document.getElementById("total-libros");
  const generoSeccion = document.getElementById("generos-libros");
  const filtroGeneroSel = document.getElementById("filtros-genero");

  //CARGA INICIAL
  const librosCargados = cargarLibrosDesdeLocalStorage();
  setLibros(librosCargados);

  //SUBMIT FORMULARIO.

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    //Tomamos valores.
    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const genero = document.getElementById("genero").value;
    const fecha = document.getElementById("fecha").value;

    const errores = validarFormulario({ titulo, autor, genero, fecha });

    if (errores.length) {
      mostrarErrores(erroresSeccion, errores);
      return;
    }
    //Limpiamos seccion si no hay errores.
    mostrarErrores(erroresSeccion, []);

    //Creamos nuevo libro con id.
    const nuevoLibro = { id: crypto.randomUUID(), titulo, autor, genero, fecha };

    //Actualizamos.

    const nuevosLibros = [...libros, nuevoLibro];

    //Actualizamos app.
    setLibros(nuevosLibros);

    renderTabla(tablaLibrosBody, nuevosLibros);
    guardarLibrosEnLocalStorage(nuevosLibros);
    actualizarEstadisticas(totalLibros, generoSeccion, nuevosLibros);

    formulario.reset();


  });

  //ELIMINAR LIBRO.
  tablaLibrosBody.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("btn-eliminar")) {
      const id = evento.target.dataset.id;
      const nuevaLista = libros.filter(libro => libro.id !== id);

      setLibros(nuevaLista);
      guardarLibrosEnLocalStorage(nuevaLista);
      renderTabla(tablaLibrosBody, nuevaLista);
      actualizarEstadisticas(totalLibros, generoSeccion, nuevaLista);
    };
  });

  //FILTRO GENERO.
  filtroGeneroSel.addEventListener("change", ()=>{
    const generoSeleccionado = filtroGeneroSel.value;
    const listraFiltrada = generoSeleccionado ? libros.filter(libro => libro.genero === generoSeleccionado) : libros;

    renderTabla(tablaLibrosBody, listraFiltrada);
    actualizarEstadisticas(totalLibros, generoSeccion, listraFiltrada);
  })




}//fin window.onload.