"use strict";
/* =====================
  Estado aplicacion.
===================== */

let libros = [];

//Actualizamos el estado.
const setLibros = (nuevosLibros) => {
  libros = nuevosLibros;
};

/* =====================
   VALIDACIONES
===================== */

const validarFormulario = ({ titulo, autor, genero, fecha }) => {
  //Declaramos un array vacio para incluir los errores.
  let errores = [];
  const tituloRegExp = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/;
  const fechaRegExp = /^\d{4}-\d{2}-\d{2}$/;
  if (!titulo || !tituloRegExp) {
    errores.push("El título es obligatorio o no cumple el patrón.");
  }
  if (!autor || autor.length < 5) {
    errores.push("El autor es obligatorio o no cumple el patrón");
  }
  if (!genero) {
    errores.push("El género es obrigatorio, selecciona uno.");
  }
  if (!fecha || !fechaRegExp) {
    errores.push("La fecha es obligatoria.");
  }

  return errores;
};

/* =====================
   LOCAL STORAGE
===================== */

const guardarLibrosEnLocalStorege = (lista) => {
  if (!Array.isArray(lista)) return;
  localStorage.setItem("libros", JSON.stringify(lista));
};

const cargarLibrosDesdeLocalStorage = () => {
  const datos = localStorage.getItem("libros");
  try {
    return datos ? JSON.parse(datos) : [];
  } catch (e) {
    console.warn("LocalStorage corrupto, se inicializa array de libros.");
    localStorage.removeItem("libros");
  }
};
/* =====================
   RENDERIZADO
===================== */

const renderTabla = (tablaBody, lista) => {
  tablaBody.innerHtml = "";

  lista.forEach((libro) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${libro.titulo}</td>
                        <td>${libro.autor}</td>
                        <td>${libro.genero}</td>
                        <td>${libro.fecha}</td>
                        <td><button data-id="${libro.id} class="btn-eliminar">Eliminar</button></td>
                        `;
    tablaBody.appendChild(fila);
  });
};

/* =====================
   ERRORES
===================== */

const mostrarErrores = (errores) => {
  if (!errores.length) {
    erroresSeccion.classList.add("ocultado");
    erroresSeccion.innerHTML = "";
    return;
  }
  seccionErrores.classList.remove("ocultado");
  erroresSeccion.innerHTML = `<ul>${errores
    .map((error) => `<li>${error}</li>`)
    .join("")}</ul>`;
};
/* =====================
   ESTADÍSTICAS
===================== */

const actualizarEstadistica = (totLibrosSeccion, generoSeccion, lista)=>{
    if(Array.isArray(lista) && lista.length){
        totLibrosSeccion.textContent = `Número de libros: ${lista.length}`;
    }
    if(!lista.length){
        generoSeccion.textContent=`Distribución de géneros: N/A`;
        return;
    }

    const conteo = lista.reduce((acc, {genero})=>{
        acc[genero] = (acc[genero] || 0) +1;
        return acc;
    },{});// valor inicial del acc.

    generoSeccion.textContent= `Distribución de géneros: ${Object.entries(conteo)
        .map(([genero, cantidad])=> `${genero} : ${cantidad}`)
        .join(" | ")}`;
};