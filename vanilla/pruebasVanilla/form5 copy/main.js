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
 console.log(discos);
  /* ---------- VALIDACIONES ----------*/
  const validarNombre = (nombre) => nombre && nombre.trim().length >= 5;
  const validarGrupoSolista = (form) =>
    form.querySelector('input[name="grupoSolista"]:checked') !== null;
  const validarAnio = (anio) => /^\d{4}$/.test(anio);
  const validarGeneroMusical = (form) =>
    form.querySelectorAll('input[name="generoMusical"]:checked').length > 0;
  const validarLocalizacion = (codigo) => /^ES-\d{3}[A-Z]{2}$/.test(codigo);

  /* ---------- ERRORES ----------*/
  const marcarError = (input, mensaje) => {
    if (input) input.classList.add("error");
    erroresDiv.innerHTML += `<p>${mensaje}</p>`;
  };

  const limpiarErrores = () => {
    erroresDiv.innerHTML = "";
    Array.from(form.getElementsByTagName("input")).forEach((input) =>
      input.classList.remove("error")
    );
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
    limpiarErrores();
    let valido = true;

    const nombreInput = form.elements["nombre"];
    const anioInput = form.elements["anio"];
    const codigoInput = form.elements["codigo"];

    if (!validarNombre(nombreInput.value)) {//Si el input está vacio marca el error.
      marcarError(nombreInput, "Nombre: obligatorio y >= 5 caracteres.");
      valido = false;
    }

    if (!validarGrupoSolista(form)) { //Si no se ha seleccionado nada marca el error.
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
      marcarError(
        codigoInput,
        "Localización: formato ES-001AA (3 números y 2 mayúsculas)."
      );
      valido = false;
    }

    return valido;
  }

  function construirDiscoDesdeFormulario() {
    return {
      nombre: form.elements["nombre"].value.trim(),
      caratula: form.elements["caratula"].value.trim(),
      //Selecciona todos los inputs con el name igual seleccionados, sino {}para evitar el error .value.Devuelve null o "".
      grupoSolista:
        (form.querySelector('input[name="grupoSolista"]:checked') || {})
          .value || "",
      anio: form.elements["anio"].value.trim(),
      generos: Array.from(
        //Selecciona todos los inputs con el mismo name que estén seleccionados.
        form.querySelectorAll('input[name="generoMusical"]:checked')
      ).map((c) => c.value),
      codigo: form.elements["codigo"].value.trim(),
      prestado: form.elements["prestado"].checked,
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

      // Crear imagen
      /*  const img = document.createElement("img");
      if (d.caratula && /^https?:\/\//i.test(d.caratula)) {
        img.src = d.caratula;
      } */

      // Ocultar imagen si no carga
      /*     img.onerror = () => {
        img.style.display = "none";
      }; */

      // Crear bloque de texto
      const divInfo = document.createElement("fieldset");
      const titulo = document.createElement("strong");
      titulo.textContent = d.nombre;

      const anio = d.anio ? ` (${d.anio})` : "";

      const meta = document.createElement("div");
      meta.className = "meta";
     /*  meta.textContent =
        `Género musical: ${
          Array.isArray(d.generos) ? d.generos.join(", ") : ""
        }` +
        ` | Código: ${d.codigo}` +
        ` | Prestado: ${d.prestado ? "Sí" : "No"}`; */
      meta.textContent = `
  Género musical: ${Array.isArray(d.generos) ? d.generos.join(", ") : ""}
  | Código: ${d.codigo}
  | Prestado: ${d.prestado ? "Sí" : "No"}
`;

      divInfo.appendChild(titulo);
      divInfo.append(anio);
      divInfo.appendChild(meta);

      // Botón borrar
      const btn = document.createElement("input");
      btn.className = "borrar";
      btn.dataset.index = i;
      //btn.title = "Borrar disco";
      //btn.textContent = "Elininar";
      btn.value = "Eliminar";
      btn.type = "button;";

      // Montar todo
      /*  li.appendChild(img); */
      divInfo.appendChild(btn);
      li.appendChild(divInfo);
      //li.appendChild(btn);

      listado.appendChild(li);
    });
  }
  function buscarDiscos(texto) {
    const titulo = texto.trim().toLowerCase();
    if (!titulo) {
      //mostrarDiscos(discos);
      return;
    }
    const filtrados = discos.filter((d) =>
      (d.nombre || "").toLowerCase().includes(titulo)
    );
    mostrarDiscos(filtrados);
  }
  const mostrarMensajeSegundos = (texto) => {
    const mensajeGuardado = document.getElementById("alertas");
    //Coloco el texto dentro del div-alertas.
    mensajeGuardado.textContent = texto;
    mensajeGuardado.classList.add("mensaje");

    //Elimino el mensaje en  3 segundos.
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

    //Mostrar mensaje en contenedor de alertass.
    mostrarMensajeSegundos("Disco guardado correctamente");

    form.reset();
  });

  btnMostrar.addEventListener("click", () => mostrarDiscos(discos));

  listado.addEventListener("click", (e) => {
    if (e.target.classList.contains("borrar")) {
      const idx = Number(e.target.dataset.index);

      // Comprobamos que idx es un número válido
      if (!isNaN(idx) && idx >= 0) {
        discos.splice(idx, 1); // Borra el disco
        guardarEnLocalStorage(); // Guarda cambios
        mostrarDiscos(discos); // Vuelve a pintar la lista

        // Muestra mensaje temporal
        mostrarMensajeSegundos("Disco eliminado");
      }
    }
  });

  /*   listado.addEventListener("click", (e) => {
    if (e.target.classList.contains("borrar")) {
      const idx = Number(e.target.dataset.index);
      if (
        Number.isFinite(idx) &&
        idx >= 0 &&
        confirm("¿Seguro que deseas borrar este disco?")
      ) {
        discos.splice(idx, 1);
        guardarEnLocalStorage();
        mostrarDiscos(discos);
      }
    }
  }); */

  btnBuscar.addEventListener("click", () => buscarDiscos(inputBuscar.value));
  btnLimpiar.addEventListener("click", () => {
    inputBuscar.value = "";
    //mostrarDiscos(discos);
  });

  // Mostrar inicial
  mostrarDiscos(discos);
  //localStorage.clear();
});
