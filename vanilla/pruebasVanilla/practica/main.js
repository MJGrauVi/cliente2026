"use strict";
//impor del Ejercicio 1.
import {eventosData} from "./js/eventosData.js";

//impor del Ejercicio 2.
//import {mostrarEventos, mostrarError} from "./js/funciones.js"; 


/*Ejercicio 1**************************************************/
/* eventosData.eventos.forEach((evento)=>{
    const tabla = document.getElementById("tablaEventos");
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${evento.nombre}</td>
                    <td>${new Date(evento.fecha).toLocaleDateString("es-ES")}</td>
                    <td>${evento.ubicacion}
                    `;
    tabla.appendChild(tr);
}) */

/*Ejercicio 2*****************************************************/
//funciones usadas mostrarEventos y mostrarError en ./js/funciones.js
/* async function cargarEventos() {
  try {
    //respuesta ya contiene los datos por con await se consume la promesa.
    const respuesta = await fetch("./assets/eventosData.json");
    console.log(respuesta);

    // Error si el archivo no existe o devuelve un 404
    if (!respuesta.ok) {
      throw new Error("No se pudo cargar el archivo JSON");
    }

    const datos = await respuesta.json();
    console.log(datos);
    
    mostrarEventos(datos.eventos);

  } catch (error) {
    console.error("Error durante la carga:", error.message);
    mostrarError("Error cargando los datos de eventos.");
  }
}

cargarEventos();
 */
/*Ejercicio 3 **********************************************/

const tablaBody = document.querySelector("#tablaEventos tbody");
const barra = document.getElementById("barraError");
const barraTexto = document.getElementById("barraErrorTexto");
const barraCerrar = document.getElementById("btnCerrar");

let ocultarTimer = null;      // ID del temporizador para ocultar la barra
const DURACION_MSEGS = 10000; // 10 segundos

// Mostrar eventos en la tabla
function mostrarEventos(eventos) {
  tablaBody.innerHTML = ""; // limpiar
  eventos.forEach(evento => {
    const tr = document.createElement("tr");
    const fechaFormateada = new Date(evento.fecha).toLocaleDateString("es-ES");
    tr.innerHTML = `
      <td>${evento.nombre}</td>
      <td>${fechaFormateada}</td>
      <td>${evento.ubicacion}</td>
    `;
    tablaBody.appendChild(tr);
  });
}

// Mostrar la barra de error con mensaje; resetea tiempo si se llama de nuevo
function mostrarError(mensaje) {
  // Cancelar ocultado anterior si existe
  if (ocultarTimer) {
    clearTimeout(ocultarTimer);
    ocultarTimer = null;
  }

  barraTexto.textContent = mensaje;
  barra.removeAttribute("hidden");
  // Forzar reflow para asegurar transición si es necesario
  // eslint-disable-next-line no-unused-expressions
  barra.offsetHeight;
  barra.classList.add("visible");

  // Ocultar automáticamente tras DURACION_MSEGS
  ocultarTimer = setTimeout(() => {
    ocultarBarra();
    ocultarTimer = null;
  }, DURACION_MSEGS);
}

// Oculta la barra inmediatamente
function ocultarBarra() {
  barra.classList.remove("visible");

  // Esperar la transición para añadir hidden y no ocupar foco
  setTimeout(() => {
    barra.setAttribute("hidden", ""); 
    barraTexto.textContent = "";
  }, 350); // debe ser >= transición CSS (300ms)
}

// Cerrar manual
barraCerrar.addEventListener("click", () => {
  if (ocultarTimer) {
    clearTimeout(ocultarTimer);
    ocultarTimer = null;
  }
  ocultarBarra();
});

// Cargar datos con async/await y manejo de errores
const cargarEventos = async () => {
  try {
    const respuesta = await fetch("./assets/eventosData.json");

    if (!respuesta.ok) {
      // Respuestas 4xx/5xx
      throw new Error(`HTTP ${respuesta.status} - ${respuesta.statusText}`);
    }

    const datos = await respuesta.json();

   /*  if (!datos || !Array.isArray(datos.eventos)) {
      throw new Error("Formato JSON inválido: falta 'eventos' o no es un array");
    } */
    if (!Array.isArray(datos.eventos)) {
    throw new Error(`El archivo JSON no tiene formato válido. ${error.message}.`);
}
    mostrarEventos(datos.eventos);

  } catch (error) {
    console.error(`Error al cargar datos. ${error}`);
    // Mensaje legible para el usuario.
    mostrarError(`No se han podido cargar los eventos. Comprueba el archivo o la conexión: ${error.message}`);
  }
}

// Ejecutar carga al inicio
cargarEventos();