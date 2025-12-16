"use strict";

// estado.js
let discos = [];

const setDiscos = (nuevosDiscos) => {
  discos = nuevosDiscos;
};

// validaciones.js. Esta función no depende del DOM, por eso es ideal separarla.
const validarFormulario = ({ autor, email, genero, anio, pregunta }) => {
  let errores = [];

  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const anioRegExp = /^(19|20)\d{2}$/;

  if (!autor || autor.length < 5) {
    errores.push("El autor es obligatorio y debe tener al menos 5 caracteres.");
  }

  if (!email || !emailRegExp.test(email)) {
    errores.push("El email es obligatorio o no cumple el formato.");
  }

  if (!genero) {
    errores.push("El género es obligatorio.");
  }

  if (!anio || !anioRegExp.test(anio)) {
    errores.push("El año no tiene un formato válido.");
  }

  if (!pregunta) {
    errores.push("Debes marcar una opción del radio.");
  }

  return errores;
};
// storage.js. Observa que no toca variables globales, devuelve datos.
const guardarDiscosEnLocalStorage = (lista) => {
  localStorage.setItem("discos", JSON.stringify(lista));
};

const cargarDiscosDesdeLocalStorage = () => {
  const datos = localStorage.getItem("discos");
  return datos ? JSON.parse(datos) : [];
};


// render.js. Buen patrón: el DOM se pasa como parámetro, no se busca dentro del módulo.
const renderTablaDiscos = (tabla, lista) => {
  tabla.innerHTML = "";

  lista.forEach(({ autor, email, genero, anio, pregunta }, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${autor}</td>
      <td>${email}</td>
      <td>${genero}</td>
      <td>${anio}</td>
      <td>${pregunta}</td>
      <td><button data-index="${index}" class="btn-eliminar">Eliminar</button></td>
    `;
    tabla.appendChild(fila);
  });
};

const mostrarErrores = (contenedor, errores) => {
  contenedor.innerHTML = errores.length
    ? `<ul>${errores.map(e => `<li>${e}</li>`).join("")}</ul>`
    : "";
};
export {discos, setDiscos, validarFormulario, guardarDiscosEnLocalStorage, cargarDiscosDesdeLocalStorage, renderTablaDiscos, mostrarErrores };