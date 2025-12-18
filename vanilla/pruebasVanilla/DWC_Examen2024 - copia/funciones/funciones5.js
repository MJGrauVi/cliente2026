"use strict";

//Estado aplicación.
let libros = [];

//Actualizar estado.

const setLibros = (nuevaLista) =>{
    libros = nuevaLista;
}

//Validaciones.

const validarFormulario = ({titulo, autor, genero, fecha})=>{

    let errores = [];

    const tituloRegExp = /^[A-Za-zÁÉÍÓÚaéíóúñÑ\s]{5,}$/;
    const fechaRegExp = /^\d{4}-\d{2}-\d{2}$/;

    if(!titulo || !tituloRegExp.test(titulo)){
        errores.push("Tútulo obligatorio");
    }
     if(!autor){
        errores.push("Autor obligatorio");
    }
     if(!genero){
        errores.push("Genero obligatorio");
    }
     if(!fecha || !fechaRegExp.test(fecha)){
        errores.push("Fecha obligatorio");
    }
    return errores;

}

//Local storage.

const guardarLibrosEnLocalStorage = (lista) =>{
    localStorage.setItem("libros", JSON.stringify(lista));
};
const cargarLibrosDesdeLocalStorage = ()=>{
    try{
        const datos = localStorage.getItem("libros");
        return datos ? JSON.parse(datos) : [];
    }catch(e){
        console.warn("Local storage corrupto.");
        return [];
    }
}

//render libros.

const renderTabla = (tablaLibrosBody, lista) => {
    tablaLibrosBody.innerHTML = "";
    lista.forEach((libro)=>{
        const fila = document.createElement("tr");
        fila.innerHTML= `<td>${libro.titulo}</td>
        <td>${libro.autor}</td>
        <td>${libro.genero}</td>
        <td>${libro.fecha}</td>
        <td><button class="btn-eliminar" data.id="${libro.id}">Eliminar</button></td>`;
    tablaLibrosBody.appendChild(fila)
    });
};
// Errores.

const mostrarErrores = (erroresSeccion, errores) => {
    if (!errores.length) {
        erroresSeccion.classList.add("ocultado");
    } else {
        erroresSeccion.classList.remove("ocultado");
    }

    erroresSeccion.innerHTML = `<ul>${errores.map(e => `<li>${e}</li>`).join("")}</ul>`;

    //seccion.classList.toggle("ocultado", !errores.length);
};

// Estadisticas.

const actualizarEstadisticas = (totalLibros, generosDist, lista) =>{
    totalLibros.textContent = `Número de libros: ${lista.length}`;

    if(!lista.length){
        generosDist.textContent="Distribución de generos: N/A";
        return;
    }
    const conteo = lista.reduce((acc, {genero})=>{
        acc[genero] = (acc[genero] || 0) + 1;
        return acc;
    },{});//Inicio acumulador con objeto vacio.

    generosDist.textContent= `Distribución de géneros: ${Object.entries(conteo)
        .map(([genero, cantidad])=> `${genero} : ${cantidad}`)
        .join(" | ")
    }`;

}
export {libros, setLibros, validarFormulario, guardarLibrosEnLocalStorage, cargarLibrosDesdeLocalStorage, renderTabla, mostrarErrores, actualizarEstadisticas};