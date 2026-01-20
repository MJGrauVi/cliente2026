"use strict";

import {
  traerDatos,
  validarFormulario,
  mostrarDatos,
  mostrarMensaje,
  filtrarPorGenero,
  pintarDetalle,
  guardarEnLocalStorage,
  cargarDesdeLocalStorage,
} from "./js/funciones18.js";

//Arranca la aplicacion.
document.addEventListener("DOMContentLoaded", () => {
  main();
}); //fin.

//Toda la lógica de la aplicación
async function main() {
  /************************** */
  //Constantes y variables.
  /************************** */
  const url = "http://localhost:3000/videojuegos";
  let videojuegos = [];
  const clave = "videojuegos";

  //Referencias DOM.
  const formulario = document.getElementById("videojuegosFormulario");
  const tbody = document.querySelector("#tablaVideojuegos tbody");
  const seccionFiltrado = document.getElementById("filtrosGenero");
  const seccionErrores = document.getElementById("erroresSeccion");
  const seccionDetalle = document.getElementById("detallesSeccion");
  const seguridadBotones = document.getElementById("seguridadBotones");

  /****************************** */
  //Carga inicial de datos.
  /****************************** */

  //Si ya hay datos en localstorage los cargamos, sino llamamos a la API.
  videojuegos = cargarDesdeLocalStorage(clave);
  if (videojuegos.length > 0) {
    mostrarDatos(tbody, videojuegos);
    mostrarMensaje(seccionErrores, "Datos cargados desde LocalStorage");
  } else {
    try {
      videojuegos = await traerDatos(url);
      mostrarDatos(tbody, videojuegos);
      mostrarMensaje(seccionErrores, "Datos API CARGADOS");
    } catch (error) {
      console.error(`Error en la carga de datos desde la API`);
      mostrarMensaje(seccionErrores, "No se han cargado LOS DATOS");
    }
  }

  /****************************************** */
  //Control del formulario, submit.
  /****************************************** */

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nuevo = {
      id: crypto.randomUUID(),
      titulo: formulario.titulo.value.trim(),
      desarrollador: formulario.desarrollador.value.trim(),
      genero: formulario.genero.value,
      plataforma_principal: "Desconocida",
      listado_personajes: [],
    };
    const errores = validarFormulario(nuevo);
    if (errores.length) {
      mostrarMensaje(seccionErrores, errores);
      formulario.reset();
      return;
    }
    videojuegos = [...videojuegos, nuevo];
    mostrarMensaje(seccionErrores, "Videojuego añadido correctamente.");
    mostrarDatos(tbody, videojuegos);
    formulario.reset();
  });

  //MOSTRAR FILTRADOS.
  seccionFiltrado.value = "";
  seccionFiltrado.addEventListener(
    "change",
    () => {
      const filtrados = filtrarPorGenero(videojuegos, seccionFiltrado.value);

      mostrarDatos(tbody, filtrados);
    },
    false
  );

  //MOSTRAR DETALLE VIDEOJUEGO.
  tbody.addEventListener("click", async (evento) => {
    if (evento.target.classList.contains("ver")) {
      const id = evento.target.dataset.id;
      const videojuego = videojuegos.find((juego) => juego.id === id);
      //Muestro el detalle del videojuego.
      if (videojuego) {
        /* await pintarDetalle(detallesSeccion, videojuego); */
        await pintarDetalle(seccionDetalle, videojuego);
      }
      setTimeout(() => {
        seccionDetalle.innerHTML = "";
      }, 8000);
    }
  });

  //ELIMINAR VIDEOJUEGO.

  tbody.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("eliminar")) {
      const idAEliminar = evento.target.dataset.id;
      const nuevaLista = videojuegos.filter((v) => v.id !== idAEliminar);
      mostrarDatos(tbody, nuevaLista);
      //Actualizo la lista de vidiojuegos.
      videojuegos = [...nuevaLista];
    }
  });

  //PERSISTENCI INFORMACION.
  //matches comprueba si un elemento coincide con un selector css, ej; button.
  seguridadBotones.addEventListener("click", (e) => {
    if (!e.target.matches("button")) return;

    if (e.target.textContent.includes("Guardar copia de seguridad")) {
      console.log("Guardando copia de seguridad");
      mostrarMensaje(seccionErrores, "Copia de seguridad guardada.");
      guardarEnLocalStorage("videojuegos", videojuegos);
    }
    if (e.target.textContent.includes("Cargar copia de seguridad")) {
      console.log("Cargargando copia de seguridad");
      videojuegos = cargarDesdeLocalStorage("videojuegos");
      mostrarDatos(tbody, videojuegos);
    }
  });
  //localStorage.removeItem("videojuegos");
} //fin


