"use strict";
//Funciones para la Práctica3.04.

const usuarios = [
  {
    nombre: "Luis",
    preferencias: { tema: "oscuro", idioma: "español", edad: 25 },
    contacto: {
      direccion: {
        calle: "Calle falsa, 666",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correofalso@yahoo.com",
      telefono: "123456789",
    },
  },
  {
    nombre: "Marta",
    preferencias: { tema: "claro", idioma: "catalán", edad: 15 },
    contacto: {
      direccion: {
        calle: "Calle también falsa, 123",
        localidad: "Andorra la Vella",
        pais: "Andorra",
      },
      correoelectronico: "correoandorrano@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Alberto",
    preferencias: { tema: "oscuro", idioma: "español", edad: 56 },
    contacto: {
      direccion: {
        calle: "Elm Street, 666",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correonulo@yahoo.com",
      telefono: "548632478",
    },
  },
  {
    nombre: "Jacinto",
    preferencias: { tema: "claro", idioma: "inglés", edad: 17 },
    contacto: {
      direccion: {
        calle: "Elm Street, 667",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Rigoberta",
    preferencias: { tema: "claro", idioma: "francés", edad: 34 },
    contacto: {
      direccion: {
        calle: "Calle inexistente, 6",
        localidad: "Burdeos",
        pais: "Francia",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "232547859",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle de mentira, s/n",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "estecorreonoexiste@gmail.com",
      telefono: "452158697",
    },
  },
  {
    nombre: "Clara",
    preferencias: { tema: "oscuro", idioma: "español", edad: 19 },
    contacto: {
      direccion: {
        calle: "Calle existente, 34",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correoinexistente@yahoo.com",
      telefono: "",
    },
  },
];

/* Ejercicio 3 - Arrays de objetos
Con el objeto que encontrarás en el fichero Ejercicio3.js (copia y pega) reliza las
siguientes acciones utilizando para ello el spread operator y los métodos que creas
conveniente (las funciones recibirán por defecto el objeto usuarios contenido en el
fichero salvo que se especifique lo contrario):
• función que permita insertar un nuevo usuario (devolverá el array con todos los
usuarios más el nuevo usuario pasado como parámetro),*/

const insertarUsuario = (usuarios, usuario) => {
  return [...usuarios, usuario];
};

//• una función que devuelva un array de objetos con los usuarios mayores de edad,

const usuariosMayores = (usuarios) => {
  return usuarios.filter((v) => v.preferencias.edad >= 18);
};

/*• un función que devuelva otro array de objetos con los usuarios que tengan correo
electrónico del servidor Yahoo,*/
const correoYahoo = (usuarios) => {
  return usuarios.filter((v) => v.contacto.correoelectronico.includes("yahoo"));
};

//• otra que devuelva un array con los usuarios que prefieran el tema claro, sean ma￾yores de edad y su país sea España,
//He comentado este código porque me marca un error que no entiendo.

const usuariosTemaClaroEsp = (usuarios) => {
  return usuarios.filter(
    (v) =>
      v.preferencias.tema === "claro" &&
      v.preferencias.edad >= 18 &&
      v.contacto.direccion.pais === "España"
  );
};
/*• la antepenúltima que devuelva un array de usuarios a los que les falte algún dato
en su ficha,*/
const usuariosIncompletos = (usuarios) => {
  return usuarios.filter((v) => {
    if (!v.nombre) return true;

    // comprobamos preferencias
    const prefs = v.preferencias;
    if (!prefs.tema || !prefs.idioma || prefs.edad == null) return true;

    // comprobamos contacto
    const contacto = v.contacto;
    if (!contacto.correoelectronico || contacto.telefono == null) return true;

    // comprobamos dirección
    const dir = contacto.direccion;
    if (!dir.calle || !dir.localidad || !dir.pais) return true;

    // si todo está completo, no lo incluimos
    return `No hay usuarios incompletos`;
  });
};

/*• una penúltima función que añada una nueva clave apellidos a todos los usuarios
(el valor por defecto será “No indicado”).*/

const incluirApellidos = (usuarios) => {
  return usuarios.map((v) => ({
    ...v,
    apellidos: "No indicado",
  }));
};

//• y una última función que permita añadir una nueva entrada a direccion denomi￾nada codigo cuyo valor por defecto será “00000”. */

const incluirCodigo = (usuarios) => {
  return usuarios.map((v) => ({
    ...v, // copiamos todas las propiedades del usuario
    contacto: {
      ...v.contacto, // copiamos todo el objeto contacto
      direccion: {
        ...v.contacto.direccion, // copiamos todo lo que ya hay en direccion
        codigo: "00000", // añadimos la nueva propiedad
      },
    },
  }));
};

export {
  usuarios,
  insertarUsuario,
  usuariosMayores,
  correoYahoo,
  usuariosIncompletos,
  incluirApellidos,
  usuariosTemaClaroEsp,
  incluirCodigo, 
};
