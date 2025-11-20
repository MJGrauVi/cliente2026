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
//Recibe el input que da el error, el mensaje y el contenedor de salida del mensaje.
const marcarError = (input, mensaje, contenedorErrores) => {
  //Marcamos con la clase error.
  if (input) input.classList.add("error");
  contenedorErrores.innerHTML += `<strong><p>${mensaje}</p></strong>`;
};
//Recibe el contenedor con los mensajes y el formulario para eliminar la clase error
const limpiarErrores = (contenedorErrores, form) => {
  contenedorErrores.innerHTML = "";
  form
    .querySelectorAll("input")
    .forEach((input) => input.classList.remove("error"));
};

/* ---------- LOCALSTORAGE ----------*/

//Cargo los datos que hay el localStorage con la clave "discos"
function cargarDiscos() {
  //Transforma la cadena recibida en un array de objetos JSON.
  const datos = localStorage.getItem("discos");
  return datos ? JSON.parse(datos) : [];
}

function guardarEnLocalStorage(discos) {
  localStorage.setItem("discos", JSON.stringify(discos));
}

/* ---------- CONSTRUCCIÓN ----------*/
//Toma los valores de los inputs y los checked y los devuelve.
function construirDiscoDesdeFormulario(form) {
  return {
    nombre: form.elements["nombre"].value.trim(),
    caratula: form.elements["caratula"].value.trim(),
    grupoSolista:
      (form.querySelector('input[name="grupoSolista"]:checked') || {}).value ||
      "",
    anio: form.elements["anio"].value.trim(),
    generos: Array.from(
      form.querySelectorAll('input[name="generoMusical"]:checked')
    ).map((c) => c.value),
    codigo: form.elements["codigo"].value.trim(),
    prestado: form.elements["prestado"].checked,
  };
}
//Formato para imprimir cada disco en el listado.
function crearFormatoDisco(disco) {
  const div = document.createElement("div");
  div.className = "formato";
  div.textContent = `Género musical: ${
    Array.isArray(disco.generos) ? disco.generos.join(", ") : ""
  } | Código: ${disco.codigo} | Prestado: ${disco.prestado ? "Sí" : "No"}`;
  return div;
}
//Creo botón para eliminar del disco que le entra por parámetro.
function crearBotonEliminar(index) {
  const btn = document.createElement("input");
  btn.className = "borrar";
  btn.dataset.index = index;
  btn.value = "Eliminar";
  btn.type = "button";
  return btn;
}
//Creo elemento li para el listado de discos.
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
//Si no hay discos muestra el mensaje, si hay añade el elemento.
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
//Busca con el texto introducido en el array de discos por titulo(name=nombre)
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
//Muestra mensaje de alerta transcurridos unos segundos desaparece.
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
  mostrarMensajeSegundos,
};
