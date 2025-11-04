"use strict";

document.addEventListener = () =>  { 
  
const crearSelectorColores = () => {
  const colores = ['color-rojo', 'color-azul', 'color-verde', 'color-amarillo', 'color-negro', 'color-blanco'];
  const contenedor = document.getElementById('colores');
  const etiquetaColor = document.getElementById('colorActual');

  // Limpiar por si ya tiene contenido
  contenedor.innerHTML = '';

  colores.forEach(claseColor => {
    console.log(colores);
    const div = document.createElement('div');
    div.classList.add('color', claseColor);
    div.dataset.color = claseColor;
    div.title = claseColor.replace('color-', '');
    contenedor.appendChild(div);
  });

  contenedor.addEventListener('click', evento => {
    if (evento.target.classList.contains('color')) {
      colorSeleccionado = evento.target.dataset.color;
      etiquetaColor.textContent = `Color seleccionado: ${colorSeleccionado.replace('color-', '')}`;
    }
  });
}


const crearLienzo = (filas, columnas) => {
  const lienzo = document.getElementById("contenedorLienzo");
  for (let i = 0; i < filas * columnas; i++) {
    const celda = document.createElement('div');
    celda.classList.add('celda');
    lienzo.appendChild(celda);
  }
};

}; //fin evento


export {crearSelectorColores, crearLienzo};
