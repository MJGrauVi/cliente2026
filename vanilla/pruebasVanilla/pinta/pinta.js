"use strict";
export let colorSeleccionado = 'color-negro';

export function crearSelectorColores() {
  const colores = ['color-rojo', 'color-azul', 'color-verde', 'color-amarillo', 'color-negro', 'color-blanco'];
  const contenedor = document.getElementById('colores');
  const etiquetaColor = document.getElementById('colorActual');

  // Limpiar por si ya tiene contenido
  contenedor.innerHTML = '';

  colores.forEach(claseColor => {
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

export function crearLienzo(filas, columnas) {
  const lienzo = document.getElementById('lienzo');
  lienzo.innerHTML = ''; // limpiar antes
  const total = filas * columnas;
  // Ajustar grid dinámicamente (por si cambias filas/columnas)
  lienzo.style.gridTemplateColumns = `repeat(${columnas}, 10px)`;
  lienzo.style.gridTemplateRows = `repeat(${filas}, 10px)`;

  for (let i = 0; i < total; i++) {
    const celda = document.createElement('div');
    celda.classList.add('celda');
    lienzo.appendChild(celda);
  }
}

export function activarPintura() {
  const lienzo = document.getElementById('lienzo');
  let pintando = false;
  let pointerId = null;

  // pointerdown en el lienzo: comenzamos a pintar
  lienzo.addEventListener('pointerdown', (e) => {
    // sólo botón principal/puntero
    e.preventDefault();
    pintando = true;
    pointerId = e.pointerId;
    // capturar el puntero en el lienzo para recibir eventos aunque salga del elemento
    try { e.target.setPointerCapture(pointerId); } catch (err) { /* no crítico */ }

    if (e.target.classList.contains('celda')) {
      e.target.className = `celda ${colorSeleccionado}`;
    }
  });

  // pointermove pinta cuando pintando === true
  lienzo.addEventListener('pointermove', (e) => {
    if (!pintando) return;
    // opcional: comprobar target
    const objetivo = e.target;
    if (objetivo && objetivo.classList && objetivo.classList.contains('celda')) {
      objetivo.className = `celda ${colorSeleccionado}`;
    }
  });

  // pointerup y pointercancel detienen la pintura y liberan capture
  lienzo.addEventListener('pointerup', (e) => {
    pintando = false;
    pointerId = null;
    try { e.target.releasePointerCapture && e.target.releasePointerCapture(e.pointerId); } catch (err) {}
  });
  lienzo.addEventListener('pointercancel', () => {
    pintando = false;
    pointerId = null;
  });

  // también por seguridad, si sueltan fuera del lienzo, escuchamos en document
  document.addEventListener('pointerup', () => {
    pintando = false;
    pointerId = null;
  });
}

export function configurarBotonReset() {
  const boton = document.getElementById('resetear');
  boton.addEventListener('click', () => {
    document.querySelectorAll('.celda').forEach(celda => {
      celda.className = 'celda';
    });
    // opcional: resetear color seleccionado visualmente
    const etiqueta = document.getElementById('colorActual');
    etiqueta.textContent = `Color seleccionado: ${colorSeleccionado.replace('color-', '')}`;
  });
}