"use strict";

/**
 * Muestra un mensaje de error en el contenedor y marca el input en rojo.
 */
export const marcarError = (input, mensaje, contenedorErrores) => {
  if (input) input.classList.add("error");
  contenedorErrores.innerHTML += `<p>${mensaje}</p>`;
};

/**
 * Limpia todos los errores visibles y estilos del formulario.
 */
export const limpiarErrores = (form, contenedorErrores) => {
  contenedorErrores.innerHTML = "";
  form.querySelectorAll("input").forEach((i) => i.classList.remove("error"));
};
