"use strict";

//Estado de la aplicacion;

let libros = [];

//Actualizar estado.

const setLibros = (nuevoListado) => {
    libros = nuevoListado;
};

//validaciones

const validarFormulario = (libro) => {
    //variable para almacenar los errores de validación.
    let errores = [];
    const {titulo, autor, genero, fecha} = libro;

    const tituloRegExp = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/;
    const fechaRegExp = /^\d{4}-\d{2}-\d{2}$/;

    if (!titulo || !tituloRegExp.test(titulo)) {
        errores.push("dato obligatorio en título");
    }
    if (!autor) {
        errores.push("dato obligatorio en autor");
    }
    if (!genero) {
        errores.push("dato obligatorio en genero");
    }
    if (!fecha || !fechaRegExp.test(fecha)) {
        errores.push("dato obligatorio en fecha");
    }
    return errores;
};

//localstorage.

const guardarLibrosEnLocalStorage = (libros) => {

    localStorage.setItem("libros", JSON.stringify(libros));
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



//renderizado.

const renderTabla = (tablaBody, lista) => {
    tablaBody.innerHTML = "";

    lista.forEach((libro) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${libro.titulo}</td>
                            <td>${libro.autor}</td>
                            <td>${libro.genero}</td>
                            <td>${libro.fecha}</td>
                            <td><button data-id="${libro.id}" class="btn-eliminar">Eliminar</button></td>`;
        tablaBody.appendChild(fila);
    });
};
//Errores.

const mostrarErrores = (erroresSeccion, errores) => {
    if (!errores.length) {
        erroresSeccion.classList.add("ocultado");
    } else {
        erroresSeccion.classList.remove("ocultado");
    }

    erroresSeccion.innerHTML = errores.length
        ? `<ul>${errores.map(e => `<li>${e}</li>`).join("")}</ul>`
        : "";

    //seccion.classList.toggle("ocultado", !errores.length);
};

//Estadisticas.

const actualizarEstadisticas = (totLiSeccion,generoSec, lista)=>{
    totLiSeccion.textContent=`Número de libros: ${lista.length}`;
    if(!lista.length){
        generoSec.textContent="Distribucion de generos: N/A";
        return;
    }
    const conteo = lista.reduce((acc, {genero})=>{
        acc[genero] = (acc[genero] || 0)+1;
        return acc;
    },{});//Inicializa acumulador con un objeto vacio.
    
    //Convierte en array de pares.
    generoSec.textContent= `Distribucion de géneros: ${Object.entries(conteo)
        .map(([genero, cantidad]) => `${genero} : ${cantidad}`)
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