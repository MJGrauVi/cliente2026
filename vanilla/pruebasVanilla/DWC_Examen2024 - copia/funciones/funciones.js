"use strict";

/* =====================
   ESTADO DE LA APLICACIÓN
===================== */
let libros = [];

/**
 * Reemplaza completamente el estado de libros
 * @param {Array} nuevosLibros
 */
const setLibros = (nuevosLibros) => {
  libros = nuevosLibros;
};

/* =====================
   VALIDACIONES
===================== */
/**
 * Valida los datos del formulario
 * @param {Object} datos
 * @returns {Array<string>}
 */
const validarFormulario = ({ titulo, autor, genero, fecha }) => {
  const errores = [];

  const textoRegExp = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/;
  const fechaRegExp = /^\d{4}-\d{2}-\d{2}$/;

  if (!textoRegExp.test(titulo)) {
    errores.push("El título debe tener al menos 3 letras.");
  }

  if (autor && !textoRegExp.test(autor)) {
    errores.push("El autor solo puede contener letras y espacios.");
  }
  if(!genero){
    errores.push("Selecciona un género.");
  }

  if (!fechaRegExp.test(fecha)) {
    errores.push("La fecha no tiene un formato válido.");
  }

  return errores;
};

/* =====================
   LOCAL STORAGE
===================== */
/**
 * Guarda el listado en LocalStorage
 * @param {Array} lista
 */
const guardarLibrosEnLocalStorage = (lista) => {
  localStorage.setItem("libros", JSON.stringify(lista));
};

/**
 * Carga el listado desde LocalStorage
 * @returns {Array}
 */
const cargarLibrosDesdeLocalStorage = () => {
  const datos = localStorage.getItem("libros");
  return datos ? JSON.parse(datos) : [];
};

/* =====================
   RENDERIZADO
===================== */
/**
 * Renderiza la tabla de libros
 * @param {HTMLElement} tablaBody
 * @param {Array} lista
 */
const renderTabla = (tablaBody, lista) => {
  tablaBody.innerHTML = "";

  lista.forEach(({ titulo, autor, genero, fecha }, index) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${titulo}</td>
      <td>${autor || "—"}</td>
      <td>${genero}</td>
      <td>${fecha}</td>
      <td>
        <button data-index="${index}" class="btn-eliminar">Eliminar</button>
      </td>
    `;

    tablaBody.appendChild(fila);
  });
};

/* =====================
   ERRORES
===================== */
/**
 * Muestra u oculta los errores de validación
 * @param {HTMLElement} erroresSeccion
 * @param {Array<string>} errores
 */
const mostrarErrores = (erroresSeccion, errores) => {
  if (!errores.length) {
    erroresSeccion.classList.add("ocultado");
    erroresSeccion.innerHTML = "";
    return;
  }

  erroresSeccion.classList.remove("ocultado");
  erroresSeccion.innerHTML = `
    <ul>
      ${errores.map(error => `<li>${error}</li>`).join("")}
    </ul>
  `;
};

/* =====================
   ESTADÍSTICAS
===================== */
/**
 * Actualiza las estadísticas
 * @param {HTMLElement} totalEl
 * @param {HTMLElement} generosEl
 * @param {Array} lista
 */
const actualizarEstadisticas = (totalEl, generosEl, lista) => {
  totalEl.textContent = `Número de libros: ${lista.length}`;

  if (!lista.length) {
    generosEl.textContent = "Distribución de géneros: N/A";
    return;
  }

  const conteo = lista.reduce((acc, { genero }) => {
    acc[genero] = (acc[genero] || 0) + 1;
    return acc;
  }, {});//{} valor inicial del acumulador.

  generosEl.textContent = `Distribución de géneros: ${Object.entries(conteo)
      .map(([genero, cantidad]) => `${genero}: ${cantidad}`)
      .join(" | ")}`;
};

/* =====================
   EXPORTS
===================== */
export {
  libros,
  setLibros,
  validarFormulario,
  guardarLibrosEnLocalStorage,
  cargarLibrosDesdeLocalStorage,
  renderTabla,
  mostrarErrores,
  actualizarEstadisticas
};
