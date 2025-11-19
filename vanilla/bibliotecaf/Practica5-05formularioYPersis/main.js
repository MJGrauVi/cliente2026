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

  /* ---------- VALIDACIONES ----------*/
  const validarNombre = (nombre) => nombre && nombre.trim().length >= 5;
  const validarGrupoSolista = (form) =>
    form.querySelector('input[name="grupoSolista"]:checked') !== null;
  const validarAnio = (anio) => /^\d{4}$/.test(anio);
  const validarGeneroMusical = (form) =>
    form.querySelectorAll('input[name="generoMusical"]:checked').length > 0;
  const validarLocalizacion = (codigo) => /^ES-\d{3}[A-Z]{2}$/.test(codigo);

  /* ---------- ERRORES REUTILIZABLES ----------*/
  const marcarError = (input, mensaje, contenedorErrores) => {
    if (input) input.classList.add("error");
    contenedorErrores.innerHTML += `<p>${mensaje}</p>`;
  };

  const limpiarErrores = (contenedorErrores, form) => {
    contenedorErrores.innerHTML = "";
    form
      .querySelectorAll("input")
      .forEach((input) => input.classList.remove("error"));
  };

  /* ---------- LOCALSTORAGE ----------*/
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
    limpiarErrores(erroresDiv, form);
    let valido = true;

    const nombreInput = form.elements["nombre"];
    const anioInput = form.elements["anio"];
    const codigoInput = form.elements["codigo"];

    if (!validarNombre(nombreInput.value)) {
      marcarError(
        nombreInput,
        "Nombre: obligatorio y >= 5 caracteres.",
        erroresDiv
      );
      valido = false;
    }

    if (!validarGrupoSolista(form)) {
      marcarError(null, "Selecciona: Grupo musical o Solista.", erroresDiv);
      valido = false;
    }

    if (!validarAnio(anioInput.value)) {
      marcarError(
        anioInput,
        "Año: debe tener formato YYYY (4 dígitos).",
        erroresDiv
      );
      valido = false;
    }

    if (!validarGeneroMusical(form)) {
      marcarError(null, "Selecciona al menos un género musical.", erroresDiv);
      valido = false;
    }

    if (!validarLocalizacion(codigoInput.value)) {
      marcarError(
        codigoInput,
        "Localización: formato ES-001AA (3 números y 2 mayúsculas).",
        erroresDiv
      );
      valido = false;
    }

    return valido;
  }

  function construirDiscoDesdeFormulario() {
    return {
      nombre: form.elements["nombre"].value.trim(),
      caratula: form.elements["caratula"].value.trim(),
      grupoSolista:
        (form.querySelector('input[name="grupoSolista"]:checked') || {})
          .value || "",
      anio: form.elements["anio"].value.trim(),
      generos: Array.from(
        form.querySelectorAll('input[name="generoMusical"]:checked')
      ).map((c) => c.value),
      codigo: form.elements["codigo"].value.trim(),
      prestado: form.elements["prestado"].checked,
    };
  }

  function crearFormatoDisco(disco) {
    const div = document.createElement("div");
    div.className = "formato";
    div.textContent = `Género musical: ${
      Array.isArray(disco.generos) ? disco.generos.join(", ") : ""
    } | Código: ${disco.codigo} | Prestado: ${disco.prestado ? "Sí" : "No"}`;
    return div;
  }

  function crearBotonEliminar(index) {
    const btn = document.createElement("input");
    btn.className = "borrar";
    btn.dataset.index = index;
    btn.value = "Eliminar";
    btn.type = "button";
    return btn;
  }

  function crearItemDisco(disco, index) {
    const li = document.createElement("li");
    const divInfo = document.createElement("fieldset");

    const titulo = document.createElement("strong");
    titulo.textContent = disco.nombre;

    const anio = disco.anio ? ` (${disco.anio})` : "";

    const formatoDisco = crearFormatoDisco(disco);
    const btn = crearBotonEliminar(index);

    divInfo.appendChild(titulo);
    divInfo.append(anio);
    divInfo.appendChild(formatoDisco);
    divInfo.appendChild(btn);

    li.appendChild(divInfo);

    return li;
  }

  function mostrarDiscos(array) {
    listado.innerHTML = "";

    if (!array || array.length === 0) {
      listado.innerHTML = "<li>No hay discos.</li>";
      return;
    }

    array.forEach((disco, i) => {
      const item = crearItemDisco(disco, i);
      listado.appendChild(item);
    });
  }

  function buscarDiscos(texto) {
    const titulo = texto.trim().toLowerCase();
    if (!titulo) return;
    const filtrados = discos.filter((d) =>
      (d.nombre || "").toLowerCase().includes(titulo)
    );
    // Si no hay coincidencias
    if (filtrados.length === 0) {
      listado.innerHTML = "<li>No se encontraron discos con ese criterio.</li>";
    } else {
      mostrarDiscos(filtrados);
    }
  }

  const mostrarMensajeSegundos = (texto) => {
    const mensajeGuardado = document.getElementById("alertas");
    mensajeGuardado.textContent = texto;
    mensajeGuardado.classList.add("mensaje");

    setTimeout(() => {
      mensajeGuardado.classList.add("hidden");
      mensajeGuardado.classList.remove("mensaje");
    }, 3000);
  };

  // ---------- EVENTOS ----------
  btnGuardar.addEventListener("click", () => {
    if (!validarFormulario()) return;

    const nuevo = construirDiscoDesdeFormulario();
    discos = [...discos, nuevo];
    guardarEnLocalStorage();

    mostrarMensajeSegundos("Disco guardado correctamente");
    form.reset();

    //llamamos de nuevo a mostrarDiscos() para que desaparezca el mensaje inicial.
    listado.innerHtml = "";
  });

  /*  btnMostrar.addEventListener("click", () => mostrarDiscos(discos)); */

  let mostrando = false; // estado inicial: oculto.

  btnMostrar.addEventListener("click", () => {
    if (!mostrando) {
      // Mostrar discos.
      mostrarDiscos(discos);
      mostrando = true;
    } else {
      // Ocultar discos.
      listado.innerHTML = "";
      mostrando = false;
    }
  });
  listado.addEventListener("click", (e) => {
    if (e.target.classList.contains("borrar")) {
      const idx = Number(e.target.dataset.index);
      if (!isNaN(idx) && idx >= 0) {
        discos.splice(idx, 1);
        guardarEnLocalStorage();
        mostrarDiscos(discos);
        mostrarMensajeSegundos("Disco eliminado");
      }
    }
  });

  btnBuscar.addEventListener("click", () => buscarDiscos(inputBuscar.value));
  btnLimpiar.addEventListener("click", () => {
    inputBuscar.value = "";
    mostrarDiscos(discos);
  });

  // Mostrar inicial
  mostrarDiscos(discos);
});
