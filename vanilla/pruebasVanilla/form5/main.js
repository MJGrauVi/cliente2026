"use strict";

/*
  main.js - Maneja: validaciones, guardar/mostrar, búsqueda, borrar y persistencia.
  Diseñado para el HTML que me enviaste (form id="adDisco", botones name="guardar"/"mostrar",
  buscador id="inputBuscar", btnBuscar, btnLimpiar, listado id="listado", errores id="errores").
*/

document.addEventListener("DOMContentLoaded", () => {
  // Elementos
  const form = document.getElementById("adDisco");//15
  const erroresDiv = document.getElementById("errores");//72
  const listado = document.getElementById("listado");//75

  const inputBuscar = document.getElementById("inputBuscar");//80
  const btnBuscar = document.getElementById("btnBuscar");//81
  const btnLimpiar = document.getElementById("btnLimpiar");//82

  // Botones del formulario (inputs type=button con name)
  const btnGuardar = form.querySelector('input[name="guardar"]');
  const btnMostrar = form.querySelector('input[name="mostrar"]');

  // Array donde guardamos los discos (cargado desde localStorage)
  let discos = cargarDiscos();

  // ---------- VALIDACIONES ----------
  const validarNombre = (nombre) => nombre && nombre.trim().length >= 5;

  const validarGrupoSolista = (form) =>
    form.querySelector('input[name="grupoSolista"]:checked') !== null;

  const validarAnio = (anio) => /^\d{4}$/.test(anio);

  const validarGeneroMusical = (form) =>
    form.querySelectorAll('input[name="generoMusical"]:checked').length > 0;

  const validarLocalizacion = (codigo) => /^ES-\d{3}[A-Z]{2}$/.test(codigo);

  // ---------- ERRORES ----------
  const marcarError = (input, mensaje) => {
    if (input) input.classList.add("error");
    // si no hay input específico (por ejemplo: géneros), mostramos el mensaje igualmente
    erroresDiv.innerHTML += `<p>${mensaje}</p>`;
  };

  const limpiarErrores = () => {
    erroresDiv.innerHTML = "";
    form.querySelectorAll("input").forEach((i) => i.classList.remove("error"));
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
    //const caratulaInput = form.elements["caratula"];
    const anioInput = form.elements["anio"];
    const codigoInput = form.elements["codigo"];

    // Nombre
    if (!validarNombre(nombreInput.value)) {
      marcarError(nombreInput, "Nombre: obligatorio y >= 5 caracteres.");
      valido = false;
    }

    // Carátula -> no obligatorio según enunciado, pero mostramos aviso si vacío
    // (si no quieres validarlo, puedes quitar este bloque)
    // if (!caratulaInput.value) {
    //   marcarError(caratulaInput, "Carátula: introduce una URL si quieres.");
    //   // no cambiamos 'valido' porque en enunciado no es obligatorio
    // }

    // Grupo/Solista
    if (!validarGrupoSolista(form)) {
      marcarError(null, "Selecciona: Grupo musical o Solista.");
      valido = false;
    }

    // Año
    if (!validarAnio(anioInput.value)) {
      marcarError(anioInput, "Año: debe tener formato YYYY (4 dígitos).");
      valido = false;
    }

    // Genero musical
    if (!validarGeneroMusical(form)) {
      marcarError(null, "Selecciona al menos un género musical.");
      valido = false;
    }

    // Localización
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
      generos: Array.from(form.querySelectorAll('input[name="generoMusical"]:checked')).map(
        (c) => c.value
      ),
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

      // estructura visual: nombre (año) - generos - prestado - borrar
      li.innerHTML = `
        <strong>${escapeHtml(d.nombre)}</strong>
        ${d.anio ? `(${escapeHtml(d.anio)})` : ""}
        <div class="meta">Géneros: ${escapeHtml((d.generos || []).join(", "))} 
        | Código: ${escapeHtml(d.codigo)} 
        | Prestado: ${d.prestado ? "Sí" : "No"}</div>
        <button class="borrar" data-index="${i}" title="Borrar disco">🗑️</button>
      `;
      listado.appendChild(li);
    });
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function buscarDiscos(texto) {
    const t = texto.trim().toLowerCase();
    if (!t) {
      mostrarDiscos(discos);
      return;
    }
    const filtrados = discos.filter((d) => d.nombre.toLowerCase().includes(t));
    mostrarDiscos(filtrados);
  }

  // ---------- EVENTOS ----------
  // Guardar
  btnGuardar.addEventListener("click", () => {
    try {
      if (validarFormulario()) {
        const nuevo = construirDiscoDesdeFormulario();
        discos.push(nuevo);
        guardarEnLocalStorage();
        mostrarDiscos(discos);
        // mensaje de éxito y limpiar formulario parcialmente
        alert("Disco guardado correctamente.");
        form.reset();
      } else {
        // si hay errores, la función validarFormulario ya los añadió al div errores
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (e) {
      console.error("Error en Guardar:", e);
    }
  }, false);

  // Mostrar
  btnMostrar.addEventListener("click", () => mostrarDiscos(discos), false);

  // Borrar (delegación)
  listado.addEventListener("click", (e) => {
    if (e.target.classList.contains("borrar")) {
      const idx = Number(e.target.dataset.index);
      if (Number.isFinite(idx) && idx >= 0) {
        if (confirm("¿Seguro que deseas borrar este disco?")) {
          discos.splice(idx, 1);
          guardarEnLocalStorage();
          mostrarDiscos(discos);
        }
      } else {
        console.warn("Índice de borrado inválido:", e.target.dataset.index);
      }
    }
  }, false);

  // Buscar
  btnBuscar.addEventListener("click", () => {
    buscarDiscos(inputBuscar.value);
  }, false);

  // Limpiar busqueda
  btnLimpiar.addEventListener("click", () => {
    inputBuscar.value = "";
    mostrarDiscos(discos);
  }, false);

  // Mostrar inicial
  mostrarDiscos(discos);

  // Para desarrollo: mostrar errores en consola si localStorage falla
  window.addEventListener("error", (ev) => {
    console.error("Error global detectado:", ev.error || ev.message);
  });
});
