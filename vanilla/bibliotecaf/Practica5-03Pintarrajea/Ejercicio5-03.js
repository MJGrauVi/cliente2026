"use strict";
let colorSeleccionado = "negro";


const crearLienzo = (filas, columnas) => {
  const lienzo = document.getElementById("contenedorLienzo");

  // Limpiamos por si ya había algo
  lienzo.innerHTML = "";

  const tabla = document.createElement("table");
  /*   tabla.setAttribute("cellspacing", "0"); // por si acaso
  tabla.setAttribute("cellpadding", "0"); */

  for (let i = 0; i < filas; i++) {
    const fila = document.createElement("tr");
    for (let j = 0; j < columnas; j++) {
      const celda = document.createElement("td");
      celda.classList.add("celda"); // si quieres detectar por clase en eventos
      // opcional: dataset con coordenadas
      celda.dataset.fila = i;
      celda.dataset.col = j;
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }

  lienzo.appendChild(tabla);
};


const seleccionarColor = () => {
  const contenedorColores = document.getElementById("contenedorColores");
  const colorActual = document.getElementById("colorActual"); // Guardamos el color actual para poder reemplazarlo

  contenedorColores.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("color")) {
      colorSeleccionado = evento.target.dataset.color;
      console.log(colorSeleccionado);
      colorActual.textContet = `Color seleccionado: ${colorSeleccionado.replace("color-"," ")}`;
    }
  });
};

export { crearLienzo, seleccionarColor };
