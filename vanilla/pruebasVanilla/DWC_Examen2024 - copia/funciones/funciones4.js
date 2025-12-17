"use strict";

//Estado inicial del la app.
let libros = [];

const setLibros = (nuevosLibros) => {
    libros = nuevosLibros;
}

//VALIDACION

const validarFormulario = ({ titulo, autor, genero, fecha }) => {

    let errores = [];
    const tituloRegExp = /^[A-Z][A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/;
    const fechaRegExp = /^\d{4}-\d{2}-\d{2}$/;
    if (!titulo || !tituloRegExp.test(titulo)) {
        errores.push("El título es obligatorio o no cumple el patrón especificado.")
    }
    if (!autor) {
        errores.push("El autor es obligatorio");
    }
    if (!genero) {
        errores.push("El género es obligatorio.");
    }
    if (!fecha || !fechaRegExp.test(fecha)) {
        errores.push("La fecha es obligatoria o no cumple el patrón especificado.");
    }
    return errores;

}

//LocalStorage.

const guardarLibrosEnLocalStorage = (lista) => {
    localStorage.setItem("libros", JSON.stringify(lista));
};

const cargarLibrosDesdeLocalStorage = () => {
    const datos = localStorage.getItem("libros");
    try {
        return datos ? JSON.parse(datos) : [];
    } catch (e) {
        console.warn("Local storage corrupto.");
        return [];
    };
}

//Render datos.

const renderTabla = (contenedor, lista) => {
    contenedor.innerHTML = "";
    lista.forEach((libro) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${libro.titulo}</td>
        <td>${libro.autor}</td>
        <td>${libro.genero}</td>
        <td>${libro.fecha}</td>
        <td><button dataset.id="${libro.id}" class="btn-eliminar">Eliminar</button></td>`;
    contenedor.appendChild(fila);
    })
}

//Errores.

const mostrarErrores = (contenedor, errores) => {
    contenedor.innerHTML = "";
    if (errores.length) {
        contenedor.innerHTML = `<ul>${errores.map((error) => `<li>${error}</li>`).join("")}</ul>`;
    }
}
//Estadistica.
const actualizarEstadisticas = (totalLibros, generoSelec, lista) => {
    totalLibros.textContent = `Número de libros: ${lista.length}`;
    if (!lista.length) {
        generoSelec.textContent = "Distribución de generos: N/A";
    }
    const conteo = lista.reduce((acc, { genero }) => {
        acc[genero] = (acc[genero] || 0) + 1;
        return acc;
    }, {});

    generoSelec.textContent = `Distribución de géneros: ${Object.entries(conteo)
        .map(([genero, cantidad]) => `${genero} : ${cantidad}`)
        .push(" | ")
    }`;

};

export {libros, setLibros, validarFormulario, cargarLibrosDesdeLocalStorage, guardarLibrosEnLocalStorage, renderTabla, mostrarErrores, actualizarEstadisticas }