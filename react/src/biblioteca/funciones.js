"use strict";
const generarNombreAleatorio = () => {
  let nombres = [
    "Ana",
    "Barbara",
    "Carlos",
    "Dani",
    "Esther",
    "Fran",
    "Guillermo",
    "Hector",
  ];
  return nombres[Math.floor(Math.random() * nombres.length)];
};
const generarApellidosAleatorio = () => {
  let apellidos = [
    "Alonso",
    "Bordera",
    "Carrion",
    "Dominguez",
    "Espinosa",
    "Ferrán",
    "Grau",
  ];
  return [Math.floor(Math.random() * apellidos.lenght)];
};
const generarVerduraAleatorio = () => {
  // Listas de verduras
  let verduras = [
    "Acelga",
    "Ajo",
    "Apio",
    "Berro",
    "Berenjena",
    "Calabaza",
    "Cebolla",
    "Coliflor",
    "Chayote",
    "Chícharo",
    "Col",
    "Colifrol",
    "Chile poblano",
    "Ejote",
    "Elote",
    "Espinaca",
    "Jitomate",
    "Lechuga",
    "Pepino",
    "Rábano",
    "Nopales",
    "Verdolagas",
    "Tomate",
    "Zanahoria",
  ];

  // Devolver una verdura aleatoria
  return verduras[Math.floor(Math.random() * verduras.length)];
};

const generarFrutaAleatorio = () => {
  // Listas de frutas
  var frutas = [
    "Manzana",
    "Plátano",
    "Fresa",
    "Uva",
    "Kiwi",
    "Naranja",
    "Mango",
    "Pera",
    "Cereza",
    "Sandía",
    "Piña",
    "Melón",
    "Limón",
    "Coco",
    "Granada",
    "Mandarina",
    "Fruta de la pasión",
    "Frambuesa",
    "Papaya",
    "Melocotón",
  ];

  // Devolver una fruta aleatoria
  return frutas[Math.floor(Math.random() * frutas.length)];
};

const generarUuidAleatorio = () => {
  return crypto.randomUUID();
};
// Función para generar un número aleatorio.
const generarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generarNumeroNoRepetido = (lista) => {
  if (lista.length >= 100) return null;
  let nuevoNumero;
  do {
    nuevoNumero = Math.floor(Math.random() * 100) + 1;
  } while (lista.includes(nuevoNumero));
  return nuevoNumero;
};

export {
  generarNombreAleatorio,
  generarApellidosAleatorio,
  generarVerduraAleatorio,
  generarUuidAleatorio,
  generarNumeroAleatorio,
  generarNumeroNoRepetido,
  generarFrutaAleatorio,
  
};
