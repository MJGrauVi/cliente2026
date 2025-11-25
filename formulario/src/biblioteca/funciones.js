"use strict";

// Clave para almacenar los discos en localStorage
const CD_LOCAL_STORAGE = "coleccionDiscos";

/**
 * Carga los discos desde localStorage
 * @returns {Array} Array de discos o array vacío si no hay datos
 */
const cargarDiscosDesdeLocalStorage = () => {
  try {
    const discosGuardados = localStorage.getItem(CD_LOCAL_STORAGE); //Guarda un string.
    console.log(typeof discosGuardados);
    if (discosGuardados) {
      const guardadoJson = JSON.parse(discosGuardados); //Convierto en objeto
      return guardadoJson;
    }
  } catch (error) {
    console.error("Error al cargar discos desde localStorage:", error);
  }
  return [];
};

/* Recibe un array de discos a guardar lo convierte en string y lo guarda el localStorage, ambos deben ser cadenas
 */
const guardarDiscosEnLocalStorage = (discos) => {
  try {
    localStorage.setItem(CD_LOCAL_STORAGE, JSON.stringify(discos));
    console.log("Discos guardados en localStorage:", discos);
  } catch (error) {
    console.error("Error al guardar discos en localStorage:", error);
  }
};

/* Valida el nombre del disco y si hay error lo incluye en el array de mensajes de error (vacío si es válido).*/
const validarNombreDisco = (nombre) => {
  let errores = [];
  if (!nombre || nombre.trim().length === 0) {
    errores = [...errores, `El nombre del disco es obligatorio`];
  } else if (nombre.trim().length < 5) {
    errores = [
      ...errores,
      `El nombre del disco debe tener al menos 5 caracteres.`,
    ];
  }
  return errores;
};

/*Valida el tipo de grupo  y el nombre si hay error añade al array de errores.------*/
const validarGrupo = (tipoGrupo, nombreGrupo) => {
  let errores = [];
  if (!tipoGrupo || tipoGrupo.trim().length === 0) {
    errores = [...errores, `Debe seleccionar si es Grupo musical o Solista.`];
  }
  if (!nombreGrupo || nombreGrupo.trim().length === 0) {
    errores.push("El nombre es obligatorio.");
  } else if (nombreGrupo.trim().length < 5) {
    errores.push("El nombre debe tener al menos 5 caracteres.");
  }
  return errores;
};

/* Valida el año de publicación------------------*/
const validarAnio = (anio) => {
  const errores = [];
  if (!anio || anio.trim().length === 0) {
    errores.push("El año de publicación es obligatorio.");
  } else if (!/^\d{4}$/.test(anio)) {
    errores.push("El año debe tener exactamente 4 dígitos numéricos.");
  }
  return errores;
};

//Valida el género musical, añade error si lo hay al array errores con .push().

const validarGenero = (genero) => {
  const errores = [];
  if (!genero || genero.trim().length === 0) {
    errores.push("Debe seleccionar un género musical.");
  }
  return errores;
};

/*Valida la localización, igual anteriores -----------*/

const validarLocalizacion = (localizacion) => {
  let errores = [];
  if (!localizacion || localizacion.trim().length === 0) {
    errores = [...errores, `El código de localización es obligatorio`];
  } else if (!/^ES-\d{3}[A-Z]{2}$/.test(localizacion.toUpperCase())) {
    errores = [
      ...errores,
      `La localización debe tener el formato ES-001AA donde 001 es el número de estantería y AA son dos letras mayúsculas.`,
    ];
  }
  return errores;
};
/*--Valida todos los campos del formulario de disco - Objeto con los datos del disco - Objeto con errores ----*/
 const validarDiscoCompleto = (disco) => {
  const errores = {
    nombre: validarNombreDisco(disco.nombre),
    grupo: validarGrupo(disco.tipoGrupo, disco.nombreGrupo),
    anio: validarAnio(disco.anio),
    genero: validarGenero(disco.genero),
    localizacion: validarLocalizacion(disco.localizacion),
  };

  return errores;
};

/* Genera ID único para un disco, retorna un string ----- */
const generarIdDisco = () => {
  return crypto.randomUUID();
};
export {
  cargarDiscosDesdeLocalStorage,
  guardarDiscosEnLocalStorage,
 /*  validarNombreDisco,
  validarGrupo,
  validarAnio,
  validarGenero,
  validarLocalizacion, */
  validarDiscoCompleto,
  generarIdDisco,
};
