"use strict";
//Constantes globales.
const formulario = document.getElementById("libro-formulario");
const tabla = document.querySelector("#tabla-libros tbody");
const erroresSeccion = document.getElementById("errores-seccion");

//Estado de la aplicacion.
let libros = [];

const validarFormulario = ({ titulo, autor, genero, fecha, pregunta }) => {
  let errores = [];
  if (!titulo || titulo.length < 5) {
    errores.push("El título es obligatorio y al menos 5 caracteres.");
  }
  if (!autor || autor.length < 5) {
    errores.push("El autor es obligatorio y al menos debe tener 5 caracteres.");
  }
  if (!genero) {
    errores.push("El género es obligatorio");
  }
  if (!fecha) {
    errores.push("La fecha es obligatiria.");
  }
  if (!pregunta) {
    errores.push("El radio debe estar marcado");
  }
  return errores;
};

// Radio (única selección).
// El atributo name permite agrupar elementos.
const radioButton = document.getElementById("radioBoton");
radioButton.addEventListener(
  "change",
  (evento) => {
    let radio = document.getElementsByName("pregunta");
    // Se recorren todos los elementos agrupados.
    for (let i = 0; i < radio.length; i++) {
      // Se comprueba cuál ha sido marcado a través de su propiedad "checked".
      if (radio[i].checked === true)
        console.log(`Valor del elemento marcado ${radio[i].value}.`);
    }
  },
  false
);
const guardarLibrosEnLocalStorage = (lista) => {
  localStorage.setItem("libros", JSON.stringify(lista));
};

const cargarLibrosDesdeLocalStorage = () => {
  const datos = localStorage.getItem("libros");
  if (datos) {
    libros = JSON.parse(datos);
    renderTablaLibros(libros);
    //actualizarEstadistica();
  }
};

/* const renderTablaLibros = (lista) => {
  //Uso const global tabla.
  tabla.innerHTML = "";
  lista.map(({ titulo, autor, genero, fecha, pregunta }, index) => {
    //Creo la fila.
    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${titulo}</td>
                      <td>${autor}</td>
                      <td>${genero}</td>
                      <td>${fecha}</td>
                      <td>${pregunta}</td>
                      <td><button data-index="${index}" class="btn-eliminar">Eliminar</button></td>
    `;
    tabla.appendChild(fila);
  });
}; */

const mostrarErrores = (errores) => {
  //uso constante global .
  erroresSeccion.innerHTML = errores.length
    ? `<ul>${errores.map((error) => `<li>${error}</li>`).join("")}</ul>`
    : "";
};

formulario.addEventListener("submit", (evento) => {
  //Evitamos que el formulario se envie(button dentro form).
  evento.preventDefault();
  //Eliminanos los posibles mensajes de error.
  erroresSeccion.innerHTML = "";
  //Capturamos los valores de los inputs.
  const titulo = document.getElementById("titulo").value.trim();
  const autor = document.getElementById("autor").value.trim();
  const genero = document.getElementById("genero").value;
  const fecha = document.getElementById("fecha").value;
  //Capturar valor del radio, seleccion única.
  const radioCheck = document.querySelector('input[name="pregunta"]:checked'); //ojo ver que esta el valor.
  const pregunta = radioCheck ? radioCheck.value : ""; 
 
  const errores = validarFormulario({ titulo, autor, genero, fecha, pregunta });
  if (errores.length > 0) {
    mostrarErrores(errores);
    //No guardamos libro y cortamos ejecución.
    return;
  }
  libros = [...libros, { titulo, autor, genero, fecha, pregunta }];
  guardarLibrosEnLocalStorage(libros);
  formulario.reset();
  renderTablaLibros(libros);
});

const renderTablaLibros = (lista) => {
  //Uso const global tabla.
  tabla.innerHTML = "";
  lista.map(({ titulo, autor, genero, fecha, pregunta }, index) => {
    //Creo la fila.
    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${titulo}</td>
                      <td>${autor}</td>
                      <td>${genero}</td>
                      <td>${fecha}</td>
                      <td>${pregunta}</td>
                      <td><button data-index="${index}" class="btn-eliminar">Eliminar</button></td>
    `;
    tabla.appendChild(fila);
  });
};

const eliminarLibro = (index) => {
  //eliminamos del listado de libros el que coincide con el index.
  //Obtenemos un nuevo array.
  libros = libros.filter((_, i) => i !== index);
  //Guardamos el array actualizado.
  guardarLibrosEnLocalStorage(libros);
  renderTablaLibros(libros);
};
//Ponemos listener para tomar in index sobre el libro que se clica.
tabla.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("btn-eliminar")) {
    let index = Number(evento.target.dataset.index);
    eliminarLibro(index);
  }
});

cargarLibrosDesdeLocalStorage();
