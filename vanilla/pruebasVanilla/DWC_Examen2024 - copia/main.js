"use strict";

// 📌 Elementos del DOM
const formulario = document.getElementById("libro-formulario");
const tabla = document.querySelector("#tabla-libros tbody");
const erroresSeccion = document.getElementById("errores-seccion");
const filtroGenero = document.getElementById("filtros-genero");
const totalLibros = document.getElementById("total-libros");
const generosLibros = document.getElementById("generos-libros");
const btnBorrarTodo = document.getElementById("btn-borrar-todo");

//Estado de la aplicación.
let libros = [];

// desestructuracion del objeto.
const validarFormulario = ({ titulo, autor, genero, fecha }) => {
  const errores = [];

  if (!titulo || titulo.length < 5) {
    errores.push(
      "El título es obligatorio y debe tener al menos 5 caracteres."
    );
  }
  if (!autor) {
    errores.push("El autor es obligatorio.");
  }
  if (!genero) {
    errores.push("El género es obligatorio.");
  }
  if (!fecha) {
    //con spread operator no funciona, no lanza el mensaje de error.
    errores = [...errores, "El campo fecha es obligatorio"];
  }
  //Devuelvo un array vacio o no.
  return errores;
};

// 💾 Guardar en localStorage
const guardarLibrosEnLocalStorage = (lista) => {
  localStorage.setItem("libros", JSON.stringify(lista));
};

// 📥 Cargar desde localStorage
const cargarLibrosDesdeLocalStorage = () => {
  const datos = localStorage.getItem("libros");
  if (datos) {
    libros = JSON.parse(datos);
    renderTabla(libros);
    actualizarEstadisticas(libros);
  }
};

// 🧼 Borrar todos los libros
btnBorrarTodo?.addEventListener("click", () => {
  libros = [];
  localStorage.removeItem("libros");
  renderTabla(libros);
  actualizarEstadisticas(libros);
});
// Función para mostrar errores en la sección
const mostrarErrores = (errores) => {
  if (errores.length > 0) {
    erroresSeccion.innerHTML = `<ul>${errores
      .map((e) => `<li>${e}</li>`)
      .join("")}</ul>`;
  } else {
    erroresSeccion.innerHTML = ""; // Limpia si no hay errores
  }
};
// 🛠️ Agregar libro sin recargar la página, preventDefault evita que submit recarge la página.
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  erroresSeccion.innerHTML = "";

  const titulo = document.getElementById("titulo").value.trim();
  const autor = document.getElementById("autor").value.trim();
  const genero = document.getElementById("genero").value;
  const fecha = document.getElementById("fecha").value;
  const errores = validarFormulario({ titulo, autor, genero, fecha });
  if (errores.length > 0) {
    mostrarErrores(errores);
    /*  erroresSeccion.innerHTML = `<ul>${errores
      .map((e) => `<li>${e}</li>`)
      .join("")}</ul>`; */
    return;
  }

  libros = [...libros, { titulo, autor, genero, fecha }];
  guardarLibrosEnLocalStorage(libros);
  formulario.reset();
  renderTabla(libros);
  actualizarEstadisticas(libros);
});

// 🧹 Eliminar libro
const eliminarLibro = (index) => {
  libros = libros.filter((_, i) => i !== index);
  guardarLibrosEnLocalStorage(libros);
  renderTabla(libros);
  actualizarEstadisticas(libros);
  console.log(localStorage.getItem(1));
};

// 📋 Renderizar tabla 8
const renderTabla = (lista) => {
  tabla.innerHTML = "";
  lista.map((libro, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${libro.titulo}</td>
      <td>${libro.autor}</td>
      <td>${libro.genero}</td>
      <td>${libro.fecha}</td>
      <td><button data-index="${index}" class="btn-eliminar">Eliminar</button></td>
    `;
    tabla.appendChild(fila);
  });
};
//Delegación de evento click a tbody con dataset.index. 9
tabla.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("btn-eliminar")) {
    const index = Number(evento.target.dataset.index);
    eliminarLibro(index);
  }
});

// 🔍 Filtrar por género
filtroGenero.addEventListener("change", () => {
  const generoSeleccionado = filtroGenero.value;
  const filtrados = generoSeleccionado
    ? libros.filter((libro) => libro.genero === generoSeleccionado)
    : [...libros];
  renderTabla(filtrados);
});

// 📊 Estadísticas
/* const actualizarEstadisticas = (lista) => {
  if (!Array.isArray(lista)) {
    lista = [];
  }

  totalLibros.textContent = `Número de libros: ${lista.length}`;

  const conteo = lista.reduce((acc, libro) => {
    acc[libro.genero] = (acc[libro.genero] || 0) + 1;
    return acc;
  }, {});

  const distribucion = Object.entries(conteo)
    .map(([genero, cantidad]) => `${genero}: ${cantidad}`)
    .join(", ");

  generosLibros.textContent = `Distribución de géneros: ${
    distribucion || "N/A"
  }`;
}; */
// 📊 Mostrar número total de libros
const mostrarTotalLibros = (lista) => {
  totalLibros.textContent = `Número de libros: ${lista.length}`;
};

// 📊 Mostrar distribución de géneros
const mostrarDistribucionGeneros = (lista) => {
  const conteo = lista.reduce((acc, { genero }) => {
    acc[genero] = (acc[genero] || 0) + 1;
    return acc;
  }, {});

  const distribucion = Object.entries(conteo)
    .map(([genero, cantidad]) => `${genero}: ${cantidad}`)
    .join(", ");

  generosLibros.textContent = `Distribución de géneros: ${
    distribucion || "N/A"
  }`;
};

// 🚀 Función principal que llama a las dos
const actualizarEstadisticas = (lista) => {
  if (!Array.isArray(lista)) {
    lista = [];
  }

  mostrarTotalLibros(lista);
  mostrarDistribucionGeneros(lista);
};
// 🚀 Inicializar
cargarLibrosDesdeLocalStorage();
