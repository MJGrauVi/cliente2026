"use strict";
import {
  stringAmayusculas,
  stringMayus,
  ordenaAlReves,
  convertirAJson,
} from "./EjerciciosP4/ejercicio1.js";
import { generarArray } from "./EjerciciosP4/ejercicio2.js";
import {
  insertarUsuario,
  usuarios,
  usuariosMayores,
  correoYahoo,
  usuariosTemaClaroEsp,
  usuariosIncompletos,
  incluirApellidos, incluirCodigo
} from "./EjerciciosP4/ejercicio3.js";

let nombrePropio = ["Manolo", "Juan", "Paco", "Carmina", "Pilar"];

//Ejercicio 1.
console.log(`Array original: `, nombrePropio);
console.log(`Transformado con toUpperCase: `, stringAmayusculas(nombrePropio));
console.log(`Transformo utilizando un objeto "stringMayus" `, stringMayus);

//Ordena al reves el array.
console.log(`Ordenado al revés: `, ordenaAlReves(nombrePropio));
console.log(`No modifico el original`, nombrePropio);
let noEsArray = "hola";
console.log(`¿Entra un array?`, ordenaAlReves(noEsArray));
console.log(typeof ordenaAlReves(nombrePropio));

//Punto3

console.log(`Los valores del objeto son:\n`, convertirAJson(nombrePropio));

//Ejercicio2
const numeros1 = generarArray(10, 1, 10);
const numeros2 = generarArray(10, 1, 20);
const numeros3 = generarArray(10, 1, 30);

const mixArrays = [...numeros1, ...numeros2, ...numeros3];
const filtroArraysMas5 = mixArrays.filter((valor) => valor > 5);
console.log(
  `Los números mayores a 5 del combinado de arrays son:  ${filtroArraysMas5.join(
    ", "
  )}`
);

//Ejercicio3
const usuario = {
  nombre: "Andrea",
  preferencias: { tema: "oscuro", idioma: "español", edad: 28 },
  contacto: {
    direccion: {
      calle: "Calle tente, 34",
      localidad: "Petrer",
      pais: "España",
    },
    correoelectronico: "correomalisimo@yahoo.com",
    telefono: "",
  },
};

let listaUsuarios = insertarUsuario(usuarios, usuario);

listaUsuarios.map((v, i) => {
  console.log(
    `Usuario ${i + 1}: ${v.nombre}, ${v.preferencias.edad} años, vive en ${
      v.contacto.direccion.localidad
    }, y para programar prefiere el tema ${v.preferencias.tema}, su email es: ${
      v.contacto.correoelectronico
    }`
  );
});

//Uso mayoresEdad.
const usuariosMayoresEdad = usuariosMayores(usuarios);
console.log(`Los usuarios mayores de edad son: `);
usuariosMayoresEdad.map((v) => {
  console.log(`${v.nombre} con ${v.preferencias.edad} años.`);
});
//Yahoo.
const usuariosYahoo = correoYahoo(usuarios);
console.log(`Los usuarios de yahoo son: `);
usuariosYahoo.map((v) => {
  console.log(`${v.nombre} con correo ${v.contacto.correoelectronico}.`);
});
 
 //Usuarios tema claro, mayores de edad españoles.

const usuariosTemaClaro = usuariosTemaClaroEsp(usuarios);
console.log(`Los usuarios mayores de edad, españoles y que prefieren el tema claro en su monitor son: `);
usuariosTemaClaro.map((v) => {
  console.log(`${v.nombre}`);
});

 //Usuarios incompletos.
const usuariosIncomp = usuariosIncompletos(usuarios);
console.log(`Usuarios a los que les falta algún dato: `);
usuariosIncomp.map((v) => {
  console.log(`${v.nombre} ${v.apellidos}`);
});

//Incluir apellidos.
const usuariosConApellidos = incluirApellidos(usuarios);
console.log(`He incluido el apellido `);
usuariosConApellidos.map((v)=>{
  console.log(`${v.nombre} ${v.apellidos}`)
})

//Incluir código.

const codigoDireccion = incluirCodigo(usuarios);
console.log(`He incluido el código :`)
codigoDireccion.map((v)=>{
  console.log(`${v.contacto.direccion.codigo} de cada localidad ${v.contacto.direccion.localidad}, a falta de actualizar.`)

})
