import {
  validarNombre,
  validarGrupoSolista,
  validarAnio,
  validarGeneroMusical,
  validarLocalizacion,
  marcarError,
  limpiarErrores,
} from "./validaciones.js";

const form = document.forms.formDisco;
const listado = document.getElementById("listado");
const erroresDiv = document.getElementById("errores");

let discos = [];

// ----------------------------------
// GUARDAR DISCO
// ----------------------------------
function guardarDisco() {
  limpiarErrores(form, erroresDiv);
  let errores = [];

  const nombre = form.nombre.value;
  const caratula = form.caratula.value;
  const grupoSolista = form.grupoSolista.value;
  const anio = form.anio.value;
  const codigo = form.codigo.value;
  const prestado = form.prestado.checked;

  // Validaciones
  if (!validarNombre(nombre)) {
    errores.push(
      marcarError(form.nombre, "El nombre debe tener al menos 5 caracteres.")
    );
  }

  if (!validarGrupoSolista(grupoSolista)) {
    const radios = form.querySelectorAll('input[name="grupoSolista"]');
    radios.forEach((r) => r.classList.add("error"));
    errores.push("Debes seleccionar grupo o solista (mínimo 5 caracteres).");
  }

  /*  if (!validarGrupoSolista(grupoSolista)) {
    const radios = form.querySelectorAll('input[name="grupoSolista"]');
    radios.forEach(r => r.classList.add("error"));

    errores = [
        ...errores,
        "Debes seleccionar grupo o solista (mínimo 5 caracteres)."
    ];
} */
  if (!validarAnio(anio)) {
    errores.push(marcarError(form.anio, "El año debe tener 4 dígitos."));
  }

  if (!validarGeneroMusical(form)) {
    const checks = form.querySelectorAll('input[name="generoMusical"]');
    checks.forEach((c) => c.classList.add("error"));
    errores.push("Selecciona al menos un género musical.");
  }

  if (!validarLocalizacion(codigo)) {
    errores.push(marcarError(form.codigo, "Formato correcto: ES-001AA"));
  }

  // Si hay errores → mostrar y salir
  if (errores.length > 0) {
    erroresDiv.innerHTML = errores.join("<br>");
    return;
  }

  // Crear objeto disco
  const generos = [
    ...form.querySelectorAll('input[name="generoMusical"]:checked'),
  ].map((g) => g.value);

  const disco = {
    nombre,
    caratula,
    tipo: grupoSolista,
    anio,
    genero: generos,
    codigo,
    prestado,
  };

  discos.push(disco);
  form.reset();
  listadoDiscos();
}

// ----------------------------------
// MOSTRAR DISCOS
// ----------------------------------
function listadoDiscos() {
  listado.innerHTML = "";
  discos.forEach((d) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <strong>${d.nombre}</strong> (${d.anio})<br>
            Tipo: ${d.tipo}<br>
            Género: ${d.genero.join(", ")}<br>
            Localización: ${d.codigo}<br>
            Prestado: ${d.prestado ? "Sí" : "No"}<br>
            <img src="${d.caratula}" width="100">
        `;
    listado.appendChild(li);
  });
}

// ----------------------------------
// EVENTOS
// ----------------------------------
form.guardar.addEventListener("click", guardarDisco);
form.mostrar.addEventListener("click", listadoDiscos);
