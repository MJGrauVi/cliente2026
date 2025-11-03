"use strict";

// Función para iniciar e inyectar el saludo cada segundo.
function iniciarSaludo() {

    //creamos el elemento <h1>.
    const saludo = document.createElement("h1");
    //Añadimos el texto al elemento.
    saludo.textContent = `¡Hola feo!`;
    //agregamos el elemento a html.
    document.body.appendChild(saludo);

}

// Función para detener el saludo repetitivo.
function detenerSaludo(id) {
    clearInterval(id);
    return null; // Devuelve null para reiniciar el intervalo cuando se detenga
}

//Función para generar un color aleatorio hexadecimal.
function generarColorAleatorio() {
    let color = "#";
    var letras = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * letras.length);
        color += letras[indiceAleatorio];
    }
    return color;

}
// Generar un color aleatorio en formato RGB
function generarColorRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Función que activa la pestaña y muestra su contenido(ejercicio2).

// Función que activa la pestaña y muestra su contenido
function activarTab(index, tabs, contents) {
    // Primero, quita la clase 'active' de todas las pestañas y contenidos
    tabs.forEach(tab => tab.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    // Luego, activa la pestaña y el contenido relacionados al índice seleccionado
    tabs[index].classList.add("active");
    contents[index].classList.add("active");
}
export function paintCell(cell, selectedColor) {
    cell.style.backgroundColor = selectedColor;
}

export function selectCell(cell, selectedColor) {
    if (selectedColor === 'white') {
        cell.style.backgroundColor = '';
    } else {
        paintCell(cell, selectedColor);
    }
}

export function resetDrawingArea(drawingTable) {
    const cells = drawingTable.querySelectorAll('td');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white'; // Reiniciar a blanco
    });
}
export { iniciarSaludo, detenerSaludo, generarColorAleatorio, generarColorRGB, activarTab };