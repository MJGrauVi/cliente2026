"use strict";

//Estado aplicacion.
let videojuegos = [];

//ActualizarEstado.

const setVideojuegos = (nuevosVideoJuegos) => {
    videojuegos = nuevosVideoJuegos;
}
//Validaciones.

const validarFormulario = ({ titulo, desarrollador, genero }) => {

    let errores = [];

    const regExp = /^[A-Za-z\s]{4,}$/;

    if (!titulo || !regExp.test(titulo)) {
        errores.push("El título es obligatorio y debe contener al menos 4 caracteres.");
    }
    if (!desarrollador || !regExp.test(desarrollador)) {
        errores.push("El desarrollador es obligatorio y debe contener al menos 4 caracteres.")
    }
    if (!genero) {
        errores.push("El género es obligatorio.")
    }
    return errores;

}

//Local Storage.
const guardarVJEnLocalStorage = (lista) => {
    localStorage.setItem("videojuegos", JSON.stringify(lista))
}

const cargarVJDesdeLocalStorage = () => {
    const datos = localStorage.getItem("videojuegos");
    try {
        return datos ? JSON.parse(datos) : [];
    } catch (e) {
        console.warn("Local Storage corrupto, reiniciamos array vacio.");
        localStorage.removeItem("videojuegos");
        return [];
    }

}
//Mostrar tabla videojuegos, con botones.

const renderTabla = (seccionTablaBody, lista) => {
    seccionTablaBody.innerHTML = "";

    seccionTablaBody.innerHTML = `<td>${lista.titulo}</td>
    <td>${lista.desarrollador}</td>
    <td>${lista.genero}</td>
    <td><button class="btn-eliminar" data-id="${lista.id}">Eliminar</button></td>
    <td><button class="btn-ver" data-id="${lista.id}>Ver</button></td>
    `;

};

//mostrar errores.

const mostrarErrores = (erroresSeccion, errores) => {

    erroresSeccion.innerHTML = "";

    if (!errores.length) {
        erroresSeccion.classList.add("ocultado");

    } else {
        erroresSeccion.classList.remove("ocultado");
    }

    erroresSeccion.innerHTML = `<ul>${errores.map((error) => `<li>${error}</li>`)}</ul>`;


}

export { videojuegos, setVideojuegos, validarFormulario, guardarVJEnLocalStorage, cargarVJDesdeLocalStorage, renderTabla, mostrarErrores };




