"use strict";

//ESTADO APP.
let libros = [];

//Actualizacion del estado.
const setLibros = (nuevosLibros)=>{
    libros = nuevosLibros;
}

//VALIDACIONES

const validarFormulario = ({titulo, autor, genero, fecha})=>{

    let errores = [];

    const tituloRegExp = /^[A-Za-zÁÉÍÓÚáéíóúnñÑ\s]{5,}$/;
    const fechaRegExp = /^\d{4}-\d{2}-\d{2}$/;

    if(!titulo || !tituloRegExp.test(titulo)){
        errores.push("El título es obligatorio o no cumple con el patrón esperado.");
    }
    if(!autor){
        errores.push("El autor es obligatorio.");
    }

    if(!genero){
        errores.push("El genero es obligatorio, por favor seleccione uno.");
    }
    if(!fecha || !fechaRegExp.test(fecha)){
        errores.push("La fecha es obligatoria o no cumple el patron esperado.")

    }
    return errores;
};

//LOCAL STORAGE.

const guardarLibrosEnLocalStorage = (libros) =>{
    localStorage.setItem("libros", JSON.stringify(libros));
}

const cargarLibrosDesdeLocalStorage = ()=>{
const datos = localStorage.getItem("libros");
    try{
       return datos ? JSON.parse(datos) : [];
       
    }catch(e){
        console.warn("LocalStorage corrupto, se reinicia array libros.");
        localStorage.removeItem("libros");
        return [];

    }
}

//RENDER TABLA.

const renderTabla = (tablaLibrosBody, libros)=>{
    tablaLibrosBody.innerHTML="";
    libros.forEach((libro)=>{
        const fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${libro.titulo}</td>
        <td>${libro.autor}</td>
        <td>${libro.genero}</td>
        <td>${libro.fecha}</td>
        <td><button class="btn-eliminar" data-id="${libro.id}">Eliminar</button></td>`;
    tablaLibrosBody.appendChild(fila);
    });

}

//MOSTRAR ERRORES.

const mostrarErrores = (erroresSeccion, errores)=>{
erroresSeccion.innerHTML="";
if(!errores.length){
    erroresSeccion.classList.add("ocultado");
    
}else{
    erroresSeccion.classList.remove("ocultado");
}
erroresSeccion.innerHTML= `<ul>${errores.map(error=>`<li>${error}</li>`).join("")}</ul>`
};

//ESTADISTICAS.
const actualizarEstadisticas = (totalLibros, generoSeccion, lista)=>{
    totalLibros.textContent = `Total libros: ${libros.length}`;

    if(!lista.length){
        generoSeccion.textContent= "Distribución de libros: N/A";
    }
    const conteo = lista.reduce((acc, {genero})=>{
        acc[genero] = (acc[genero] || 0)+1;
        return acc
    },{});

    generoSeccion.textContent= `${Object.entries(conteo)
        .map(([genero, cantidad])=> `${genero} : ${cantidad}`)
        .join(" | ")
    }`;
}

//EXPORTS
export{libros, setLibros, validarFormulario, cargarLibrosDesdeLocalStorage, guardarLibrosEnLocalStorage, renderTabla, mostrarErrores, actualizarEstadisticas};