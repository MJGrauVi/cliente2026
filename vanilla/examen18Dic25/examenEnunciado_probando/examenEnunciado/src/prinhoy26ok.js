"use strict";

import {
  traerDatos,
  validarFormulario,
  filtrarPorGenero,
  pintarDetalle,
  mostrarMensaje,
  renderTabla,
  guardarEnLocalStorage,
  cargarDesdeLocalStorage,
} from "./js/funcionesMaok.js";

const URL_VIDEOJUEGOS = "http://localhost:3000/videojuegos";
const CLAVE_STORAGE = "videojuegos";

document.addEventListener("DOMContentLoaded", async () => {
  const tbody = document.querySelector("#tablaVideojuegos tbody");
  const form = document.getElementById("videojuegosFormulario");
  const erroresSeccion = document.getElementById("erroresSeccion");
  document.getElementById("filtrosGenero").value = "";
  const filtrosGenero = document.getElementById("filtrosGenero");
  const detallesSeccion = document.getElementById("detallesSeccion");
  const botonesSeguridad = document.querySelectorAll(
    "#seguridadBotones button"
  );

  let videojuegos = [];

  try {
    videojuegos = await traerDatos(URL_VIDEOJUEGOS);
    console.log(videojuegos);
  } catch (error) {
    mostrarMensaje(erroresSeccion, "No se pudo cargar la API.");
  }
  //renderTabla(tbody, videojuegos);
  mostrarMensaje(
    erroresSeccion,
    "Datos cargados desde API:host:3000/videojuegos",
    3000
  );

  //Submit formulario.
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nuevo = {
      id: crypto.randomUUID(),
      titulo: form.titulo.value.trim(),
      desarrollador: form.desarrollador.value.trim(),
      genero: form.genero.value,
      plataforma: "Desconocida",
      personajes: [],
    };

    const errores = validarFormulario(nuevo);
    if (errores.length) {
      mostrarMensaje(erroresSeccion, errores.join(" - "));
      return;
    }
    //videojuegos = [...videojuegos, nuevo];
   videojuegos.push(nuevo);

    //Muestra los videojuegos añadidos con el formulario y los cargados desde la API.
    renderTabla(tbody, videojuegos);
    form.reset();
  });

  //Eliminar videojuego delegación de evento.
  tbody.addEventListener(
    "click",
    (evento) => {
      if (evento.target.classList.contains("eliminar")) {
        const id = evento.target.dataset.id;
        const nuevaLista = videojuegos.filter((juego) => juego.id !== id);
        videojuegos = [...nuevaLista];
        //guardarEnLocalStorage(CLAVE_STORAGE, videojuegos);
        renderTabla(tbody, videojuegos);
        mostrarMensaje(erroresSeccion, `videojuego eliminado correctamente.`);
      }
    },
    false
  );

  //Mostrar detalle videojuego.
  tbody.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("ver")) {
      const id = evento.target.dataset.id;
      const videojuego = videojuegos.find((juego) => juego.id === id);
      //Muestro el detalle del videojuego.
      if (videojuego) {
        pintarDetalle(detallesSeccion, videojuego);
      }
      setTimeout(() => {
        detallesSeccion.innerHTML = "";
      }, 5000);
    }
  });


  filtrosGenero.addEventListener(
    "change",
    () => {
      const filtrados = filtrarPorGenero(videojuegos, filtrosGenero.value);
      renderTabla(tbody, filtrados);
    },
    false
  );

  botonesSeguridad[0].addEventListener("click", () => {
    guardarEnLocalStorage(CLAVE_STORAGE, videojuegos);
    mostrarMensaje(
      erroresSeccion,
      "Copia de seguridad guardada en correctamente."
    );
  });

  botonesSeguridad[1].addEventListener("click", () => {
    videojuegos = cargarDesdeLocalStorage(CLAVE_STORAGE);
    mostrarMensaje(
      erroresSeccion,
      "Copia de seguridad cargada desde LocalStorage."
    );
    renderTabla(tbody, videojuegos);
  });

  //localStorage.removeItem("videojuegos");
}); //fin.
