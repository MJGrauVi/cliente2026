export let colorSeleccionado = 'color-negro';


export function crearSelectorColores() {
  const colores = ['color-rojo', 'color-azul', 'color-verde', 'color-amarillo', 'color-negro', 'color-blanco'];
  const contenedor = document.getElementById('colores');
  const etiquetaColor = document.getElementById('colorActual');

  colores.forEach(claseColor => {
    const div = document.createElement('div');
    div.classList.add('color', claseColor);
    div.dataset.color = claseColor;
    contenedor.appendChild(div);
  });

  contenedor.addEventListener('click', evento => {
    if (evento.target.classList.contains('color')) {
      colorSeleccionado = evento.target.dataset.color;
      etiquetaColor.textContent= `Color seleccionado: ${colorSeleccionado.replace('color-','')}`;
    }
  });
}

export function crearLienzo(filas, columnas) {
  const lienzo = document.getElementById('lienzo');
  for (let i = 0; i < filas * columnas; i++) {
    const celda = document.createElement('div');
    celda.classList.add('celda');
    lienzo.appendChild(celda);
  }
}

export function activarPintura() {
  const lienzo = document.getElementById('lienzo');
  let pintando = false;

  // Detectar si el botón del ratón está presionado
  document.addEventListener('mousedown', () => pintando = true);
  document.addEventListener('mouseup', () => pintando = false);

  // Pintar al mover el ratón sobre el lienzo mientras se mantiene presionado
  lienzo.addEventListener('mousemove', evento => {
    if (pintando && evento.target.classList.contains('celda')) {
      evento.target.className = `celda ${colorSeleccionado}`;
    }
  });

  // También permitir pintar con un solo clic
  lienzo.addEventListener('click', evento => {
    if (evento.target.classList.contains('celda')) {
      evento.target.className = `celda ${colorSeleccionado}`;
    }
  });
}

export function configurarBotonReset() {
  const boton = document.getElementById('resetear');
  boton.addEventListener('click', () => {
    document.querySelectorAll('.celda').forEach(celda => {
      celda.className = 'celda';
    });
  });
}