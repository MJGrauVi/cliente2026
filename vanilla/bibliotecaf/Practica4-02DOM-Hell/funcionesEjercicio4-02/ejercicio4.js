/*Ejercicio 4 - Componente Carrusel DOM
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
  "https://www.10wallpaper.com/wallpaper/1920x1080/1410/Best_Nature_Views-Scenery_HD_Wallpaper_1920x1080.jpg",
  "https://images5.alphacoders.com/444/444113.jpg",
  "https://4.bp.blogspot.com/-E7bPPfQVr0w/T8bOZC8-XpI/AAAAAAAAeYI/lguz3krSlQk/s1600/Bosque-de-Pinos-Paisajes-Naturales-en-HD.jpg",
  "https://2.bp.blogspot.com/-epneGMSghoM/T7Etq2B4yEI/AAAAAAAAc9U/u7F8lh0GkCw/s1600/Reflexion-Montanas-Lagos_Paisajes-Naturales.jpg"
];