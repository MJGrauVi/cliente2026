"use strict";

let colorSeleccionado = null;

// ----- Crear selector de colores -----
function crearSelectorColores() {
  let selector = document.getElementById("selectorColores");
  let etiqueta = document.querySelector("#colorActual span");

  selector.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("color")) {
      colorSeleccionado = evento.target.dataset.color; //Guarda el color de donde clicas.
      etiqueta.textContent = `${colorSeleccionado[0].toUpperCase()}${colorSeleccionado.slice(
        1
      )}`;
      //slice, devuelve la cadena que empieza en el indice 1 incluido.
    }
  });
}

// ----- Crear lienzo -----
function crearLienzo(filas, columnas) {
  let contenedor = document.getElementById("lienzo");
  let tabla = document.createElement("table");

  for (let i = 0; i < filas; i++) {
    const fila = document.createElement("tr");
    for (let j = 0; j < columnas; j++) {
      let celda = document.createElement("td");
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }

  contenedor.appendChild(tabla);
}

function pintarCelda(celda) {
  // Quita cualquier color previo y evita bloqueo a aplicarlo denuevo.
  celda.classList = "";
  // Añade la nueva clase con el color seleccionado.
  celda.classList.add(colorSeleccionado);
}

// ----- Activar pintura -----
function activarPintura() {
  let pintando = false;
  let lienzo = document.getElementsByTagName("table")[0]; //Devuelve un HTMLCollection y hay que indicar la posición.

  // Dispara el evento al presionar el botón.
  lienzo.addEventListener(
    "mousedown",
    (evento) => {
      evento.preventDefault(); //Anulo el comportamiento por defecto del ratón, arratrar o seleccionar.
      pintando = true;
    },
    false
  );

  lienzo.addEventListener("mouseup", () => (pintando = false), false); //Evita que siga pintando al soltar el botón.
  lienzo.addEventListener("mouseleave", () => (pintando = false), false);

  // Pintar mientras se arrastra el ratón sobre las celdas.
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
  let boton = document.getElementById("reset");

  boton.addEventListener(
    "click",
    () => {
      document.querySelectorAll("td").forEach((td) => {
        td.classList = "";
      });
    },
    false
  );
}
export {
  crearSelectorColores,
  crearLienzo,
  pintarCelda,
  activarPintura,
  configurarBotonReset,
};
