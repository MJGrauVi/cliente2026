"use strict";

document.addEventListener("DOMContentLoaded", () => {

  // ELEMENTOS
  const form = document.getElementById("adDisco");
  const erroresDiv = document.getElementById("errores");
  const listado = document.getElementById("listado");

  const inputBuscar = document.getElementById("inputBuscar");
  const btnBuscar = document.getElementById("btnBuscar");
  const btnLimpiar = document.getElementById("btnLimpiar");
  
  const btnGuardar = form.querySelector('input[name="guardar"]');
  const btnMostrar = form.querySelector('input[name="mostrar"]');

  // ARRAY DE DISCOS
  let discos = cargarDiscos();

  // ---------- VALIDACIONES ----------
  const validarNombre = (nombre) => nombre && nombre.trim().length >= 5;
  const validarGrupoSolista = (form) => form.querySelector('input[name="grupoSolista"]:checked') !== null;
  const validarAnio = (anio) => /^\d{4}$/.test(anio);
  const validarGeneroMusical = (form) => form.querySelectorAll('input[name="generoMusical"]:checked').length > 0;
  const validarLocalizacion = (codigo) => /^ES-\d{3}[A-Z]{2}$/.test(codigo);

  // ---------- ERRORES ----------
  const marcarError = (input, mensaje) => {
    if (input) input.classList.add("error");
    erroresDiv.innerHTML += `<p>${mensaje}</p>`;
  };

  const limpiarErrores = () => {
    erroresDiv.innerHTML = "";
    form.querySelectorAll("input").forEach(i => i.classList.remove("error"));
  };

  // ---------- LOCALSTORAGE ----------
  function cargarDiscos() {
    try {
      const datos = localStorage.getItem("discos");
      return datos ? JSON.parse(datos) : [];
    } catch (e) {
      console.error("Error leyendo localStorage:", e);
      return [];
    }
  }

  function guardarEnLocalStorage() {
    try {
      localStorage.setItem("discos", JSON.stringify(discos));
    } catch (e) {
      console.error("Error guardando en localStorage:", e);
    }
  }

  // ---------- OPERACIONES ----------
  function validarFormulario() {
    limpiarErrores();
    let valido = true;

    const nombreInput = form.elements["nombre"];
    const anioInput = form.elements["anio"];
    const codigoInput = form.elements["codigo"];

    if (!validarNombre(nombreInput.value)) {
      marcarError(nombreInput, "Nombre: obligatorio y >= 5 caracteres.");
      valido = false;
    }

    if (!validarGrupoSolista(form)) {
      marcarError(null, "Selecciona: Grupo musical o Solista.");
      valido = false;
    }

    if (!validarAnio(anioInput.value)) {
      marcarError(anioInput, "Año: debe tener formato YYYY (4 dígitos).");
      valido = false;
    }

    if (!validarGeneroMusical(form)) {
      marcarError(null, "Selecciona al menos un género musical.");
      valido = false;
    }

    if (!validarLocalizacion(codigoInput.value)) {
      marcarError(codigoInput, "Localización: formato ES-001AA (3 números y 2 mayúsculas).");
      valido = false;
    }

    return valido;
  }

  function construirDiscoDesdeFormulario() {
    return {
      nombre: form.elements["nombre"].value.trim(),
      caratula: form.elements["caratula"].value.trim(),
      grupoSolista: (form.querySelector('input[name="grupoSolista"]:checked') || {}).value || "",
      anio: form.elements["anio"].value.trim(),
      generos: Array.from(form.querySelectorAll('input[name="generoMusical"]:checked')).map(c => c.value),
      codigo: form.elements["codigo"].value.trim(),
      prestado: !!form.elements["prestado"].checked
    };
  }

  function mostrarDiscos(array) {
    listado.innerHTML = "";
    if (!array || array.length === 0) {
      listado.innerHTML = "<li>No hay discos.</li>";
      return;
    }

    array.forEach((d, i) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${escapeHtml(d.nombre)}</strong>
        ${d.anio ? `(${escapeHtml(d.anio)})` : ""}
        <div class="meta">Géneros: ${escapeHtml(Array.isArray(d.generos) ? d.generos.join(", ") : "")} 
        | Código: ${escapeHtml(d.codigo)} 
        | Prestado: ${d.prestado ? "Sí" : "No"}</div>
        <button class="borrar" data-index="${i}" title="Borrar disco">🗑️</button>
      `;
      listado.appendChild(li);
    });
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function buscarDiscos(texto) {
    const t = texto.trim().toLowerCase();
    if (!t) return mostrarDiscos(discos);

    const filtrados = discos.filter(d => d.nombre.toLowerCase().includes(t));
    mostrarDiscos(filtrados);
  }

  // ---------- EVENTOS ----------
  btnGuardar.addEventListener("click", () => {
    if (validarFormulario()) {
      const nuevo = construirDiscoDesdeFormulario();
      discos.push(nuevo);
      guardarEnLocalStorage();
      mostrarDiscos(discos);
      alert("Disco guardado correctamente.");
      form.reset();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  btnMostrar.addEventListener("click", () => mostrarDiscos(discos));

  listado.addEventListener("click", e => {
    if (e.target.classList.contains("borrar")) {
      const idx = Number(e.target.dataset.index);
      if (Number.isFinite(idx) && idx >= 0 && confirm("¿Seguro que deseas borrar este disco?")) {
        discos.splice(idx, 1);
        guardarEnLocalStorage();
        mostrarDiscos(discos);
      }
    }
  });

  btnBuscar.addEventListener("click", () => buscarDiscos(inputBuscar.value));
  btnLimpiar.addEventListener("click", () => { inputBuscar.value = ""; mostrarDiscos(discos); });

  // Mostrar inicial
  mostrarDiscos(discos);

});
