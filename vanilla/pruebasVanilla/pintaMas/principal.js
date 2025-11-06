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

function pintarCelda(celda) {
  // Quita cualquier color previo
  celda.className = "";
  // Añade la nueva clase
  celda.classList.add(`celda-${colorSeleccionado}`);
}


// ----- Activar pintura -----
function activarPintura() {
  const lienzo = document.getElementsByTagName("table")[0];//Devuelve un HTMLCollection y hay que indicar la posición.

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
      pintarCelda(evento.target);
    }
  });

  // Pintar con clic individual
  lienzo.addEventListener("click", (evento) => {
    if (evento.target.tagName === "TD" && colorSeleccionado) {
      pintarCelda(evento.target);
    }
  });
}

// ----- Botón Reset -----
function configurarBotonReset() {
  const boton = document.getElementById("reset");
  boton.addEventListener("click", () => {
    document.querySelectorAll("td").forEach((td) => {
      td.classList = "";
    });
  });
}
export {
  crearSelectorColores,
  crearLienzo,
  pintarCelda,
  activarPintura,
  configurarBotonReset,
};
