"use strict"
;/*Ejercicio 4 - Componente Carrusel DOM
A partir de un array de imágenes como este: 
var imagenes = ["img/feo.jpg", "img/fea.jpg", "img/feos.jpg", "img/feas.jpg"];
Escribir un programa que muestre la primera imagen en con una etiqueta <img> dentro de un
<div>. Tras dos segundos de espera, se muestra la siguiente imagen. Una vez mostrada la
última imagen el carrusel volverá a comenzar por la primera.
Añade alguna transición entre las imágenes utilizando las propiedades CSS. Por ejemplo
desplazando las imágenes fuera de la página con right y left o que aparezcan y
desaparezcan poco a poco con opacity.
Busca cuatro imágenes que estimes oportunas (aptas para menores) y colócalas en la
carpeta img de tu ejercicio o, mejor todavía, utiliza direcciones web para evitar almacenar
esas imágenes.
NOTA: para realizar las transiciones se debe modificar el código CSS a través de JavaScript. No se puede utilizar 
características propias de CSS como transition. */
var imagenes = [
  "img/foto1.jpg", "img/foto2.jpg", "img/foto3.jpg", "img/foto4.jpg"
];
//inicializo el carrusel
const carrusel = document.createElement('div');
carrusel.setAttribute('id', 'contenedorCarrusel');
document.body.appendChild('carrusel');

const elementoImg = document.createElement('img');
  elementoImg.alt('imagen del carrusel');
