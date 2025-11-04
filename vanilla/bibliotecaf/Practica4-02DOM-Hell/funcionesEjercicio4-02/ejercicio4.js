"use strict"; /*Ejercicio 4 - Componente Carrusel DOM
A partir de un array de imágenes como este: 
var imagenes = ["img/feo.jpg", "img/fea.jpg", "img/feos.jpg", "img/feas.jpg"];
Escribir un programa que muestre la primera imagen en una etiqueta <img> dentro de un
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

/* var imagenes = [
  "funcionesEjercicio4-02/img/foto1.jpg",
  "funcionesEjercicio4-02/img/foto2.jpg",
  "funcionesEjercicio4-02/img/foto3.jpg",
  "funcionesEjercicio4-02/img/foto4.jpg",
]; */
var imagenes = [
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1035/600/400",
  "https://picsum.photos/id/1041/600/400",
];
let indiceActual = 0; // Índice de la imagen actual.
let elementoImg; //Creo la variable global para poder acceder a ella desde cambiarImagen().

//Función que añade al body un contenedor con una etiquema img y su atributo alt.
const crearCarrusel = () => {
  const carrusel = document.createElement("div");
  carrusel.id = "contenedorCarrusel";
  //Creo <img>
  elementoImg = document.createElement("img");
  //Añado atributo. La carga inicial la hago en cambiar imagen por funcionalidad.
  elementoImg.alt = "Imagen del carrusel";
  elementoImg.classList.add("fade"); // clase base con transición*******Practica corregida
  //Añado la etiqueta al contenedor.
  carrusel.appendChild(elementoImg);
  //Añado el contenedor al body.
  document.body.appendChild(carrusel);
};

// Función para obtener la imagen actual.
const obtenerImagenActual = () => {
  return imagenes[indiceActual];
};

// Cambiar imagen con efecto en JS.
const cambiarImagen = () => {
  //Cargo imagen indice 0.
  elementoImg.src = imagenes[indiceActual];
  elementoImg.classList.add("fade-out"); // Aplico clase para iniciar el efecto de desvanecimiento****Práctica corregida.

  /*  elementoImg.style.opacity = 0; *******Elimino código inclorrecto****
  elementoImg.style.transition = "opacity 1s ease-in-out"; *******Elimino código inclorrecto****/

  setTimeout(() => {
    //Con el modulo se reinicia el carrusel al llegar al último indice del array.
    indiceActual = (indiceActual + 1) % imagenes.length;
    elementoImg.src = obtenerImagenActual();

    elementoImg.classList.remove("fade-out"); // Quito la clase fade-out para mostrar con fade-in*****Práctica corregida
    //Volvemos a mostrar.
    /* elementoImg.style.opacity = 1;   ******elimino código incorrecto ********* */
  }, 1000);
};

export { crearCarrusel, obtenerImagenActual, cambiarImagen };
