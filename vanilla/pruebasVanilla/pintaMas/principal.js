"use strict";

let colorSeleccionado = null;
let pintando = false;

// ----- Crear selector de colores -----
function crearSelectorColores() {
  const selector = document.getElementById("selectorColores");
  const etiqueta = document.querySelector("#colorActual span");

  selector.addEventListener("click", (e) => {
    if (e.target.classList.contains("color")) {
      colorSeleccionado = e.target.dataset.color; //Guarda el color donde clicas.
      console.log(colorSeleccionado);
      etiqueta.textContent = colorSeleccionado;
      console.log(`color: ${etiqueta.textContent}`);
    }
  });
}

// ----- Crear lienzo -----
function crearLienzo(filas, columnas) {
  const contenedor = document.getElementById("lienzo");
  const tabla = document.createElement("table");
  console.log(tabla);

  for (let i = 0; i < filas; i++) {
    const fila = document.createElement("tr");
    for (let j = 0; j < columnas; j++) {
      const celda = document.createElement("td");
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }

  contenedor.appendChild(tabla);
}

// ----- Activar pintura -----
function activarPintura() {
  const lienzo = document.querySelector("table");

  // Detectar si el ratón está presionado
  lienzo.addEventListener(
    "mousedown",
    (evento) => {
      evento.preventDefault();
      pintando = true;
    },
    false
  );

  lienzo.addEventListener("mouseup", () => (pintando = false), false);
  lienzo.addEventListener("mouseleave", () => (pintando = false), false);

  // Pintar mientras se arrastra el ratón
  lienzo.addEventListener("mouseover", (evento) => {
    if (pintando && evento.target.tagName === "TD" && colorSeleccionado) {
      evento.target.style.backgroundColor = colorSeleccionado;
    }
  });

  // Pintar con clic individual
  lienzo.addEventListener("click", (evento) => {
    if (evento.target.tagName === "TD" && colorSeleccionado) {
      evento.target.style.backgroundColor = colorSeleccionado;
    }
  });
}

// ----- Botón Reset -----
function configurarBotonReset() {
  const boton = document.getElementById("reset");
  boton.addEventListener("click", () => {
    document.querySelectorAll("td").forEach((td) => {
      td.style.backgroundColor = "white";
    });
  });
}
export {
  crearSelectorColores,
  crearLienzo,
  activarPintura,
  configurarBotonReset,
};
