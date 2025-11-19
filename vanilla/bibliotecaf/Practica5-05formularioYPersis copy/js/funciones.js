"use strict";
  /* ---------- VALIDACIONES ----------*/
/*   
  const validarNombre = (nombre) => nombre && nombre.trim().length >= 5;
  const validarGrupoSolista = (form) =>
    form.querySelector('input[name="grupoSolista"]:checked') !== null;
  const validarAnio = (anio) => /^\d{4}$/.test(anio);
  const validarGeneroMusical = (form) =>
    form.querySelectorAll('input[name="generoMusical"]:checked').length > 0;
  const validarLocalizacion = (codigo) => /^ES-\d{3}[A-Z]{2}$/.test(codigo); */


 

    /* ---------- ERRORES ----------*/
    /*
  const marcarError = (input, mensaje) => {
    if (input) input.classList.add("error");
    erroresDiv.innerHTML += `<p>${mensaje}</p>`;
  };

  const limpiarErrores = () => {
    erroresDiv.innerHTML = "";
    Array.from(form.getElementsByTagName("input")).forEach((input) =>
      input.classList.remove("error")
    );
  };
 */

// GESTIÓN DE ERRORES
// -----------------------------
const marcarError = (input, mensaje, contenedorErrores) => {
  input.classList.add("error");
  contenedorErrores.innerHTML += `<p>${mensaje}</p>`;
};

const limpiarErrores = (contenedorErrores, ...inputs) => {
  contenedorErrores.innerHTML = "";
  form.querySelectorAll("input").forEach((input) => input.classList.remove("error"));
};

export {
  validarNombre,
  validarGrupoSolista,
  validarAnio,
  validarGeneroMusical,
  validarLocalizacion,
  marcarError,
  limpiarErrores,
};
