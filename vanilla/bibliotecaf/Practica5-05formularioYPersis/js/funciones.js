"use strict";

/* ---------- VALIDACIONES ----------*/
const validarNombre = (nombre) => nombre && nombre.trim().length >= 5;
const validarGrupoSolista = (form) =>
  form.querySelector('input[name="grupoSolista"]:checked') !== null;
const validarAnio = (anio) => /^\d{4}$/.test(anio);
const validarGeneroMusical = (form) =>
  form.querySelectorAll('input[name="generoMusical"]:checked').length > 0;
const validarLocalizacion = (codigo) => /^ES-\d{3}[A-Z]{2}$/.test(codigo);

/* ---------- ERRORES ----------*/
const marcarError = (input, mensaje, contenedorErrores) => {
  if (input) input.classList.add("error");
  contenedorErrores.innerHTML += `<p>${mensaje}</p>`;
};

const limpiarErrores = (contenedorErrores, form) => {
  contenedorErrores.innerHTML = "";
  form.querySelectorAll("input").forEach((input) => input.classList.remove("error"));
};

/* ---------- LOCALSTORAGE ----------*/
function cargarDiscos() {
  try {
    const datos = localStorage.getItem("discos");
    return datos ? JSON.parse(datos) : [];
  } catch (e) {
    console.error("Error leyendo localStorage:", e);
    return [];
  }
}

function guardarEnLocalStorage(discos) {
  try {
    localStorage.setItem("discos", JSON.stringify(discos));
  } catch (e) {
    console.error("Error guardando en localStorage:", e);
  }
}

/* ---------- CONSTRUCCIÓN ----------*/
function construirDiscoDesdeFormulario(form) {
  return {
    nombre: form.elements["nombre"].value.trim(),
    caratula: form.elements["caratula"].value.trim(),
    grupoSolista:
      (form.querySelector('input[name="grupoSolista"]:checked') || {}).value || "",
    anio: form.elements["anio"].value.trim(),
    generos: Array.from(form.querySelectorAll('input[name="generoMusical"]:checked')).map((c) => c.value),
    codigo: form.elements["codigo"].value.trim(),
    prestado: form.elements["prestado"].checked,
  };
}

function crearFormatoDisco(disco) {
  const div = document.createElement("div");
  div.className = "formato";
  div.textContent = `Género musical: ${Array.isArray(disco.generos) ? disco.generos.join(", ") : ""} | Código: ${disco.codigo} | Prestado: ${disco.prestado ? "Sí" : "No"}`;
  return div;
}

function crearBotonEliminar(index) {
  const btn = document.createElement("input");
  btn.className = "borrar";
  btn.dataset.index = index;
  btn.value = "Eliminar";
  btn.type = "button";
  return btn;
}

function crearItemDisco(disco, index) {
  const li = document.createElement("li");
  const divInfo = document.createElement("fieldset");

  const titulo = document.createElement("strong");
  titulo.textContent = disco.nombre;

  const anio = disco.anio ? ` (${disco.anio})` : "";

  const formatoDisco = crearFormatoDisco(disco);
  const btn = crearBotonEliminar(index);

  divInfo.appendChild(titulo);
  divInfo.append(anio);
  divInfo.appendChild(formatoDisco);
  divInfo.appendChild(btn);

  li.appendChild(divInfo);

  return li;
}

function mostrarDiscos(array, listado) {
  listado.innerHTML = "";

  if (!array || array.length === 0) {
    listado.innerHTML = "<li>No hay discos.</li>";
    return;
  }

  array.forEach((disco, i) => {
    const item = crearItemDisco(disco, i);
    listado.appendChild(item);
  });
}

function buscarDiscos(texto, discos, listado) {
  const titulo = texto.trim().toLowerCase();
  if (!titulo) return;
  const filtrados = discos.filter((d) =>
    (d.nombre || "").toLowerCase().includes(titulo)
  );
  if (filtrados.length === 0) {
    listado.innerHTML = "<li>No se encontraron discos con ese criterio.</li>";
  } else {
    mostrarDiscos(filtrados, listado);
  }
}

const mostrarMensajeSegundos = (texto) => {
  const mensajeGuardado = document.getElementById("alertas");
  mensajeGuardado.textContent = texto;
  mensajeGuardado.classList.add("mensaje");

  setTimeout(() => {
    mensajeGuardado.classList.add("hidden");
    mensajeGuardado.classList.remove("mensaje");
  }, 3000);
};
export {
  validarNombre,
  validarGrupoSolista,
  validarAnio,
  validarGeneroMusical,
  validarLocalizacion,
  marcarError,
  limpiarErrores,
  cargarDiscos,
  guardarEnLocalStorage,
  construirDiscoDesdeFormulario,
  mostrarDiscos,
  buscarDiscos,
  mostrarMensajeSegundos
};
