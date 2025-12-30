"use strict";
// funciones.js

// ---------- API ----------
const traerDatos = async (url) => {
  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    console.log(typeof respuesta);
    throw new Error(`Error ${respuesta.status} - ${respuesta.statusText}`);
  }
  const datos = await respuesta.json();
  return datos.results ?? datos;
};
// Actualizar estado.

/*  const setVideojuegos = (nuevoListado)=>{
  videojuegos = nuevoListado;
} */
 
// ---------- VALIDACIÓN ----------
const validarFormulario = ({ titulo, desarrollador, genero }) => {
  const errores = [];

  if (!titulo || titulo.length < 4) {
    errores.push("El título debe tener al menos 4 caracteres");
  }

  if (!desarrollador || desarrollador.length < 4) {
    errores.push("El desarrollador debe tener al menos 4 caracteres");
  }

  if (!genero) {
    errores.push("Debe seleccionarse un género");
  }

  return errores;
};


// ---------- TABLA ----------

const renderTabla = (tbody, videojuegos) => {
  tbody.innerHTML = "";
  videojuegos.forEach((juego) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${juego.titulo}</td>
    <td>${juego.desarrollador}</td>
    <td>${juego.genero}</td>
    <td><button class="eliminar" data-id="${juego.id}">Eliminar</button></td>
    <td><button class="ver" data-id="${juego.id}">Ver</button></td>
    `;
    tbody.appendChild(fila);
  });
};
//Mostrar mensaje 3 segundos con setTimeout.
const mostrarMensaje = (erroresSeccion, texto, tiempo =5000) => {
  erroresSeccion.textContent = texto;
  erroresSeccion.classList.remove("oculto");

  setTimeout(() => {
    erroresSeccion.classList.add("oculto");
    erroresSeccion.textContent = "";
  }, tiempo);
};
// ---------- FILTRO ----------

const filtrarPorGenero = (videojuegos, genero) => {
  return !genero ? videojuegos : videojuegos.filter((v) => v.genero === genero);
};
// ---------- DETALLES ----------

const pintarDetalle = (contenedor, videojuego) => {
  contenedor.innerHTML = `
    <h3>${videojuego.titulo}</h3>
    <p><strong>Plataforma:</strong> ${
      videojuego.plataforma ?? "No especificada"
    }</p>
    <h4>Personajes</h4>
    <ul>
      ${(videojuego.personajes || [])
        .map((p) => `<li>${p.nombre}</li>`)
        .join("")}
    </ul>
  `;
};

// ---------- LOCAL STORAGE ----------
const guardarEnLocalStorage = (clave, videojuegos) => {
  localStorage.setItem(clave, JSON.stringify(videojuegos));
};

const cargarDesdeLocalStorage = (clave) => {
  const datos = localStorage.getItem(clave);
  console.log(datos);
  try {
    return datos ? JSON.parse(datos) : [];
  } catch (e) {
    console.warn("LocalStorage corrupto, se reinicia array vacio.");
    localStorage.removeItem(clave);
    return [];
  }
};

export {
  traerDatos,
  validarFormulario,
  filtrarPorGenero,
  renderTabla,
  pintarDetalle,
  guardarEnLocalStorage,
  mostrarMensaje,
  cargarDesdeLocalStorage,
};
