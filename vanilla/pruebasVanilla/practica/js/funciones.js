"use strict";
const mostrarEventos = (eventos) => {
    const tabla = document.getElementById("tablaEventos");
    eventos.forEach(evento => {
        tabla.innerHtml = "";
        const tr = document.createElement("tr");

        tr.innerHTML = `
      <td>${evento.nombre}</td>
      <td>${new Date(evento.fecha).toLocaleDateString("es-ES")}</td>
      <td>${evento.ubicacion}</td>
    `;

        tabla.appendChild(tr);
    });
}

const mostrarError = (msg) => {
    const parrafoError = document.createElement("p");
    parrafoError.innerHTML = `<p >${msg}</p>`;
    tabla.appendChild(parrafoError);
}
export { mostrarEventos, mostrarError };