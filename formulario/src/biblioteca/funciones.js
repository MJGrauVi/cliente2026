/**
 * Funciones para la gestión de discos
 * Contiene funciones para validación y gestión de localStorage
 */

// Clave para almacenar los discos en localStorage
const CLAVE_LOCAL_STORAGE = "coleccionDiscos";

/**
 * Carga los discos desde localStorage
 * @returns {Array} Array de discos o array vacío si no hay datos
 */
export const cargarDiscosDesdeLocalStorage = () => {
  try {
    const discosGuardados = localStorage.getItem(CLAVE_LOCAL_STORAGE);
    if (discosGuardados) {
      return JSON.parse(discosGuardados);
    }
  } catch (error) {
    console.error("Error al cargar discos desde localStorage:", error);
  }
  return [];
};

/**
 * Guarda los discos en localStorage
 * @param {Array} discos - Array de discos a guardar
 */
export const guardarDiscosEnLocalStorage = (discos) => {
  try {
    localStorage.setItem(CLAVE_LOCAL_STORAGE, JSON.stringify(discos));
    console.log("Discos guardados en localStorage:", discos);
  } catch (error) {
    console.error("Error al guardar discos en localStorage:", error);
  }
};

/**
 * Valida el nombre del disco
 * @param {string} nombre - Nombre del disco a validar
 * @returns {Array} Array de mensajes de error (vacío si es válido)
 */
export const validarNombreDisco = (nombre) => {
  const errores = [];
  if (!nombre || nombre.trim().length === 0) {
    errores.push("El nombre del disco es obligatorio.");
  } else if (nombre.trim().length < 5) {
    errores.push("El nombre del disco debe tener al menos 5 caracteres.");
  }
  return errores;
};

/**
 * Valida el tipo de grupo (Grupo musical o Solista) y el nombre
 * @param {string} tipoGrupo - Tipo seleccionado (Grupo musical o Solista)
 * @param {string} nombreGrupo - Nombre del grupo o solista
 * @returns {Array} Array de mensajes de error (vacío si es válido)
 */
export const validarGrupo = (tipoGrupo, nombreGrupo) => {
  const errores = [];
  if (!tipoGrupo || tipoGrupo.trim().length === 0) {
    errores.push("Debe seleccionar si es Grupo musical o Solista.");
  }
  if (!nombreGrupo || nombreGrupo.trim().length === 0) {
    errores.push("El nombre es obligatorio.");
  } else if (nombreGrupo.trim().length < 5) {
    errores.push("El nombre debe tener al menos 5 caracteres.");
  }
  return errores;
};

/**
 * Valida el año de publicación
 * @param {string} anio - Año a validar
 * @returns {Array} Array de mensajes de error (vacío si es válido)
 */
export const validarAnio = (anio) => {
  const errores = [];
  if (!anio || anio.trim().length === 0) {
    errores.push("El año de publicación es obligatorio.");
  } else if (!/^\d{4}$/.test(anio)) {
    errores.push("El año debe tener exactamente 4 dígitos numéricos.");
  }
  return errores;
};

/**
 * Valida el género musical
 * @param {string} genero - Género seleccionado
 * @returns {Array} Array de mensajes de error (vacío si es válido)
 */
export const validarGenero = (genero) => {
  const errores = [];
  if (!genero || genero.trim().length === 0) {
    errores.push("Debe seleccionar un género musical.");
  }
  return errores;
};

/**
 * Valida la localización
 * @param {string} localizacion - Código de localización
 * @returns {Array} Array de mensajes de error (vacío si es válido)
 */
export const validarLocalizacion = (localizacion) => {
  const errores = [];
  if (!localizacion || localizacion.trim().length === 0) {
    errores.push("La localización es obligatoria.");
  } else if (!/^ES-\d{3}[A-Z]{2}$/.test(localizacion.toUpperCase())) {
    errores.push(
      "La localización debe tener el formato ES-001AA donde 001 es el número de estantería y AA son dos letras mayúsculas."
    );
  }
  return errores;
};

/**
 * Valida todos los campos del formulario de disco
 * @param {Object} disco - Objeto con los datos del disco
 * @returns {Object} Objeto con errores por campo
 */
export const validarDiscoCompleto = (disco) => {
  const errores = {
    nombre: validarNombreDisco(disco.nombre),
    grupo: validarGrupo(disco.tipoGrupo, disco.nombreGrupo),
    anio: validarAnio(disco.anio),
    genero: validarGenero(disco.genero),
    localizacion: validarLocalizacion(disco.localizacion),
  };

  return errores;
};

/**
 * Genera un ID único para un disco
 * @returns {string} UUID único
 */
export const generarIdDisco = () => {
  return crypto.randomUUID();
};
