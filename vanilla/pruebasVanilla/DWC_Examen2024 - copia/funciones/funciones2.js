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
const validarFormulario = ({ titulo, autor, genero, fecha }) => {
  const errores = [];
  const textoRegExp = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/;
  const fechaRegExp = /^\d{4}-\d{2}-\d{2}$/;

  if (! titulo || !textoRegExp.test(titulo)) {
    errores.push("El título debe tener al menos 3 letras.");
  }

  if (!autor && !textoRegExp.test(autor)) {
    errores.push("El autor es obligatorio y debe contener almenos 3 letras.");
  }

  if (!genero) {
    errores.push("Selecciona un género.");
  }

  if (!fecha || !fechaRegExp.test(fecha)) {
    errores.push("La fecha no tiene un formato válido.");
  }

  return errores;
};

/* =====================
   LOCAL STORAGE
===================== */
const guardarLibrosEnLocalStorage = (lista) => {
  if (!Array.isArray(lista)) return;
  localStorage.setItem("libros", JSON.stringify(lista));
};

const cargarLibrosDesdeLocalStorage = () => {
  const datos = localStorage.getItem("libros");
  try {
    return datos ? JSON.parse(datos) : [];
  } catch (e) {
    console.warn("LocalStorage corrupto, se reinicia array de libros.");
    localStorage.removeItem("libros");
    return [];
  }
};

/* =====================
   RENDERIZADO
===================== */
const renderTabla = (tablaBody, lista) => {
  if (!tablaBody) return;

  tablaBody.innerHTML = "";
  lista.forEach((libro) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${libro.titulo}</td>
      <td>${libro.autor || "—"}</td>
      <td>${libro.genero}</td>
      <td>${libro.fecha}</td>
      <td>
        <button data-id="${libro.id}" class="btn-eliminar">Eliminar</button>
      </td>
    `;
    tablaBody.appendChild(fila);
  });
};

/* =====================
   ERRORES
===================== */
const mostrarErrores = (erroresSeccion, errores) => {
  if (!errores.length) {
    erroresSeccion.classList.add("ocultado");
    erroresSeccion.innerHTML = "";
    return;
  }

  erroresSeccion.classList.remove("ocultado");
  erroresSeccion.innerHTML = `
    <ul>
      ${errores.map((e) => `<li>${e}</li>`).join("")}
    </ul>
  `;
};

/* =====================
   ESTADÍSTICAS
===================== */
const actualizarEstadisticas = (totalEl, generosEl, lista = []) => {
  totalEl.textContent = `Número de libros: ${lista.length}`;

  if (!lista.length) {
    generosEl.textContent = "Distribución de géneros: N/A";
    return;
  }

  const conteo = lista.reduce((acc, { genero }) => {
    acc[genero] = (acc[genero] || 0) + 1;
    return acc;
  }, {});

  generosEl.textContent = `Distribución de géneros: ${Object.entries(conteo)
    .map(([g, c]) => `${g}: ${c}`)
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
  actualizarEstadisticas,
};
