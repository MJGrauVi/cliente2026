"use strict";
//Constantes globales.
const formulario = document.getElementById("formulario");
const tabla = document.querySelector("#tabla-discos tbody");
const erroresSeccion = document.getElementById("errores-seccion");

//Estado de la aplicacion.
let discos = [];

const validarFormulario = ({ autor, email, genero, anio, pregunta }) => {
  let errores = [];
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
 /*  const fechaRegExp = /^\d{4}-\d{2}-\d{2}$/; */
  const anioRegExp = /^(19|20)\d{2}$/;

  if (!autor || autor.length < 5) {
    errores.push("El autor es obligatorio y al menos debe tener 5 caracteres.");
  }
  if (!email || !emailRegExp.test(email)) {
    errores.push(
      "El campo email es obligatorio o no cumple el patro indicado."
    );
  }
  if (!genero) {
    errores.push("El género es obligatorio");
  }
 /*  if (!fecha || !fechaRegExp.test(fecha)) {
    errores.push("No has introducido la fecha o el formato no es válido.");
  } */
  if (!anio || !anioRegExp.test(anio)) {
    errores.push(" el formato no es válido.");
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
const guardarDiscosEnLocalStorage = (lista) => {
  localStorage.setItem("discos", JSON.stringify(lista));
};

const cargarDiscosDesdeLocalStorage = () => {
  const datos = localStorage.getItem("discos");
  if (datos) {
    discos = JSON.parse(datos);
    renderTablaDiscos(discos);
    //actualizarEstadistica();
  }
};

/* const renderTablaDiscos = (lista) => {
  //Uso const global tabla.
  tabla.innerHTML = "";
  lista.map(({ email, autor, genero, fecha, pregunta }, index) => {
    //Creo la fila.
    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${email}</td>
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
  const email = document.getElementById("email").value.trim();
  const autor = document.getElementById("autor").value.trim();
  const genero = document.getElementById("genero").value;
  /* const fecha = document.getElementById("fecha").value; */
  const anio = document.getElementById("anio").value;
  //Capturar valor del radio, seleccion única.
  const radioCheck = document.querySelector('input[name="pregunta"]:checked'); //ojo ver que esta el valor.
  const pregunta = radioCheck ? radioCheck.value : "";

  const errores = validarFormulario({ autor, email, genero, anio, pregunta });
  if (errores.length > 0) {
    mostrarErrores(errores);
    //No guardamos libro y cortamos ejecución.
    return;
  }
  discos = [...discos, { autor, email, genero, anio, pregunta }];
  guardarDiscosEnLocalStorage(discos);
  formulario.reset();
  renderTablaDiscos(discos);
});

const renderTablaDiscos = (lista) => {
  //Uso const global tabla.
  tabla.innerHTML = "";
  lista.map(({ autor, email, genero, anio, pregunta }, index) => {
    //Creo la fila.
    const fila = document.createElement("tr");
    fila.innerHTML = `
                      <td>${autor}</td>
                      <td>${email}</td>
                      <td>${genero}</td>
                      <td>${anio}</td>
                      <td>${pregunta}</td>
                      <td><button data-index="${index}" class="btn-eliminar">Eliminar</button></td>
    `;
    tabla.appendChild(fila);
  });
};

const eliminarLibro = (index) => {
  //eliminamos del listado de discos el que coincide con el index.
  //Obtenemos un nuevo array.
  discos = discos.filter((_, i) => i !== index);
  //Guardamos el array actualizado.
  guardarDiscosEnLocalStorage(discos);
  renderTablaDiscos(discos);
};
//Ponemos listener para tomar in index sobre el libro que se clica.
tabla.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("btn-eliminar")) {
    let index = Number(evento.target.dataset.index);
    eliminarLibro(index);
  }
});

cargarDiscosDesdeLocalStorage();
