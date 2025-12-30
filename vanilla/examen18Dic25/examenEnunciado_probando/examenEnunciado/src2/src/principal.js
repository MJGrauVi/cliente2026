"use strict";

import {
  videojuegos,
  setVideojuegos,
  validarFormulario,
  guardarVJEnLocalStorage,
  cargarVJDesdeLocalStorage,
  renderTabla,
  mostrarDetalle,
  mostrarErrores,
} from "./js/funciones/funciones.js";

window.onload = async () => {
  // Referencias al DOM
  const formulario = document.getElementById("videojuegosFormulario");
  const seccionTablaBody = document.querySelector("#tablaVideojuegos tbody");
  const erroresSeccion = document.getElementById("erroresSeccion");
  const generoFiltroSec = document.getElementById("filtrosGenero");
  
  // Botones de persistencia (no tienen id en HTML, se referencian por posición)
  const seguridadBotones = document.getElementById("seguridadBotones");
  const btnGuardarLocal = seguridadBotones.firstElementChild; // primer botón
  const btnCargarLocal = seguridadBotones.lastElementChild;   // segundo botón

  // 1. Cargar primero desde LocalStorage (por si hay copia guardada)
  const copiaLocal = cargarVJDesdeLocalStorage();
  setVideojuegos(copiaLocal);
  renderTabla(seccionTablaBody, copiaLocal);

  // 2. Intentar cargar videojuegos desde la API al inicio
  try {
    const respuesta = await fetch("http://localhost:3000/videojuegos");
    if (!respuesta.ok) throw new Error("Error al cargar videojuegos desde API");
    const datos = await respuesta.json();

    // Adaptar datos al formato interno
    const listaAdaptada = datos.map(vj => ({
      id: vj.id || crypto.randomUUID(),
      titulo: vj.titulo,
      desarrollador: vj.desarrollador,
      genero: vj.genero
    }));

    setVideojuegos(listaAdaptada);
    renderTabla(seccionTablaBody, listaAdaptada);

  } catch (error) {
    console.error("No se pudieron cargar los videojuegos desde la API:", error);
  }

  // Listener: Validar y agregar videojuego manualmente
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const titulo = document.getElementById("titulo").value.trim();
    const desarrollador = document.getElementById("desarrollador").value.trim();
    const genero = document.getElementById("genero").value;

    const errores = validarFormulario({ titulo, desarrollador, genero });

    if (errores.length) {
      mostrarErrores(erroresSeccion, errores);
      return;
    }

    const nuevoVideoJuego = { id: crypto.randomUUID(), titulo, desarrollador, genero };
    const nuevosVideoJ = [...videojuegos, nuevoVideoJuego];
    setVideojuegos(nuevosVideoJ);

    renderTabla(seccionTablaBody, nuevosVideoJ);
    guardarVJEnLocalStorage(nuevosVideoJ);

    formulario.reset();
  }, false);

  // Listener: Eliminar videojuego
  seccionTablaBody.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("btn-eliminar")) {
      const id = evento.target.dataset.id;
      const listaNueva = videojuegos.filter(v => v.id !== id);
      setVideojuegos(listaNueva);
      renderTabla(seccionTablaBody, listaNueva);
      guardarVJEnLocalStorage(listaNueva);
    }
  }, false);

  // Listener: Filtrar por género
  generoFiltroSec.addEventListener("change", () => {
    const generoSeleccionado = generoFiltroSec.value;
    const nuevaLista = generoSeleccionado
      ? videojuegos.filter(vj => vj.genero === generoSeleccionado)
      : videojuegos;

    renderTabla(seccionTablaBody, nuevaLista);
  });
  //Detalle videojuego seleccionado.


seccionTablaBody.addEventListener("click", (evento) => { 
    if (evento.target.classList.contains("btn-ver")) { 
        const id = evento.target.dataset.id; 
        const vj = videojuegos.find(v => v.id === id); 
        if (vj) { 
            mostrarDetalle(vj); // Usamos la nueva función 
        } else{
            console.log("No hay id del videojuego.")
        }
    } 
});

  // Listener: Guardar copia en LocalStorage
  btnGuardarLocal.addEventListener("click", () => {
    guardarVJEnLocalStorage(videojuegos);
    
  });

  // Listener: Cargar copia desde LocalStorage
  btnCargarLocal.addEventListener("click", () => {
    const datos = cargarVJDesdeLocalStorage();
    setVideojuegos(datos);
    renderTabla(seccionTablaBody, datos);
    alert("Datos cargados desde LocalStorage");
  });
};
