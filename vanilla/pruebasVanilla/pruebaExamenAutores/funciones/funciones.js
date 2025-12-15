"use strict";

const validarFormulario = ({ autor, email, genero, anio, pregunta }) => {
  let errores = [];
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
 /*  const fechaRegExp = /^\d{4}-\d{2}-\d{2}$/; */
  const anioRegExp = /^(19|20)\d{2}$/;

  if (!autor || autor.length < 5) {
    errores.push("El autor es obligatorio y al menos debe tener 5 caracteres.");
  }
  if (!email || !emailRegExp.test(email)) {
    errores.push(
      "El campo email es obligatorio o no cumple el patro indicado."
    );
  }
  if (!genero) {
    errores.push("El género es obligatorio");
  }
 /*  if (!fecha || !fechaRegExp.test(fecha)) {
    errores.push("No has introducido la fecha o el formato no es válido.");
  } */
  if (!anio || !anioRegExp.test(anio)) {
    errores.push(" el formato no es válido.");
  }
  if (!pregunta) {
    errores.push("El radio debe estar marcado");
  }
  return errores;
};

const guardarDiscosEnLocalStorage = (lista) => {
  localStorage.setItem("discos", JSON.stringify(lista));
};

//parametro discos.
const cargarDiscosDesdeLocalStorage = (discos) => {
  const datos = localStorage.getItem("discos");
  if (datos) {
    discos = JSON.parse(datos);
    renderTablaDiscos(discos);
    
  }
};
const mostrarErrores = (errores) => {
  //uso constante global .
  erroresSeccion.innerHTML = errores.length
    ? `<ul>${errores.map((error) => `<li>${error}</li>`).join("")}</ul>`
    : "";
};
const renderTablaDiscos = (lista) => {
  //Uso const global tabla.
  //tabla.innerHTML = "";
  lista.map(({ autor, email, genero, anio, pregunta }, index) => {
    //Creo la fila.
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

/* const eliminarDisco = (index) => {
  //eliminamos del listado de discos el que coincide con el index.
  //Obtenemos un nuevo array.
  discos = discos.filter((_, i) => i !== index);
  //Guardamos el array actualizado.
  guardarDiscosEnLocalStorage(discos);
  renderTablaDiscos(discos);
}; */

export {validarFormulario, guardarDiscosEnLocalStorage, cargarDiscosDesdeLocalStorage, mostrarErrores, renderTablaDiscos};