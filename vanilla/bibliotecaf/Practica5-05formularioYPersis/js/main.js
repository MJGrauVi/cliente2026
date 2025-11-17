"use strict";
import {validarNombre, validarGrupoSolista, validarAnio, validarGeneroMusical, validarLocalizacion, marcarError} from " ./funciiiones.js";
window.onload = () => {

  //Tomo referencia con el nombre del formularo.
  const form = document.forms.formDisco;
  const listado = document.getElementById("listado");
  const erroresDiv = document.getElementById("errores");

  // Parte II.
  // Array para almacenar discos.
  let discos = [];


// ----------------------------
// GESTIÓN DE ERRORES
// ----------------------------
const marcarError = (input, mensaje, contenedorErrores) => {
  if (input) input.classList.add("error");
  contenedorErrores.innerHTML += `<p>${mensaje}</p>`;
};

const limpiarErrores = (form, contenedorErrores) => {
  contenedorErrores.innerHTML = "";
  form.querySelectorAll("input").forEach((input) =>
    input.classList.remove("error")
  );
};

  // Función para guardar disco
const guardarDisco = () => {
  limpiarErrores();
  let errores = [];

  const nombre = form.nombre.value;
  const caratula = form.caratula.value;
  const grupoSolistaRadio = form.grupoSolista.value;
  const anio = form.anio.value;
  const codigo = form.codigo.value;
  const prestado = form.prestado.checked;

  // Función auxiliar para añadir errores
  const agregarError = (condicion, campo, mensaje) => {
    if (!condicion) {
      if (campo) marcarError(campo, mensaje);
      errores = [...errores, mensaje];
    }
  };

  // Validaciones usando la función auxiliar
  agregarError(validarNombre(nombre), form.nombre, "El nombre debe tener al menos 5 caracteres.");
  
  if (!validarGrupoSolista(grupoSolistaRadio)) {
    const radios = form.querySelectorAll('input[name="grupoSolista"]');
    radios.forEach((r) => r.classList.add("error"));
    errores = [...errores, "Selecciona grupo musical o solista válido (mínimo 5 caracteres)."];
  }

  agregarError(validarAnio(anio), form.anio, "El año debe tener 4 dígitos numéricos.");

  if (!validarGeneroMusical()) {
    const checks = form.querySelectorAll('input[name="generoMusical"]');
    checks.forEach((c) => c.classList.add("error"));
    errores = [...errores, "Debes seleccionar al menos un género musical."];
  }

  agregarError(validarLocalizacion(codigo), form.codigo, "La localización debe tener el formato ES-001AA.");

  // Mostrar errores o añadir disco
  if (errores.length > 0) {
    erroresDiv.innerHTML = errores.join("<br>");
    return;
  }

  // Crear objeto disco y añadirlo al array
  const generos = Array.from(
    form.querySelectorAll('input[name="generoMusical"]:checked')
  ).map((g) => g.value);

  const disco = {
    nombre,
    caratula,
    tipo: grupoSolistaRadio,
    anio,
    genero: generos,
    codigo,
    prestado,
  };

 
  discos = [...discos, disco];

  form.reset();
  listadoDiscos();
};

  // Función para mostrar discos
  function listadoDiscos() {
    listado.innerHTML = "";
    discos.forEach((d) => {
      const li = document.createElement("li");
      li.innerHTML = `
            <strong>${d.nombre}</strong> (${d.anio}) - ${d.tipo}<br>
            Género: ${d.genero.join(", ")}<br>
            Localización: ${d.codigo} - Prestado: ${d.prestado ? "Sí" : "No"
        }<br>
            <img src="${d.caratula}" alt="${d.nombre}" width="100"/>
        `;
      listado.appendChild(li);
    });
  }

  // Eventos de los botones
  form.guardar.addEventListener("click", guardarDisco);
  form.mostrar.addEventListener("click", listadoDiscos);
}; //fin window.onload
