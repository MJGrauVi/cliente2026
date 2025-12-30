"use strict";
//Estado aplicación.

let videojuegos = [];

//Cargamos desde la API, lo filtramos, guardamos en localStorage y lo renderizamos.
const pintarTabla= (tBody, videojuegos) =>{
   
    tBody.innerHTML = "";

    videojuegos.forEach(juego=>{
        let fila = document.createElement("tr");
        fila.innerHTML= `
        <td>${juego.titulo}</td>
        <td>${juego.desarrolladorgenero}</td>
        <td>${juego.genero}</td>
        <td><button class="btn-eliminar" data-id="${juego.id}">Eliminar</button></td>
        <td><button class="btn-ver" data-id="${juego.id}">Ver</button></td>`;
    tBody.appendChild(fila);
    })
}

export {pintarTabla};