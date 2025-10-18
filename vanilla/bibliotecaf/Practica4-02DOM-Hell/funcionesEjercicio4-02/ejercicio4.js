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
var imagenes = [
  "funcionesEjercicio4-02/img/foto1.jpg",
  "funcionesEjercicio4-02/img/foto2.jpg",
  "funcionesEjercicio4-02/img/foto3.jpg",
  "funcionesEjercicio4-02/img/foto4.jpg",
];
/* var imagenes2 = [
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1035/600/400",
  "https://picsum.photos/id/1041/600/400",
]; */
let indiceActual = 0; // Índice de la imagen actual.
let elementoImg;

//inicializo el carrusel
const crearCarrusel = () => {
  const carrusel = document.createElement("div");
  carrusel.id = "contenedorCarrusel";
  //Creo <img>
  elementoImg = document.createElement("img");
  //Añado atributo. La carga inicial la hago en cambiar imagen por funcionalidad.
  elementoImg.alt = "Imagen del carrusel";
  //Añado la etiqueta al contenedor.
  carrusel.appendChild(elementoImg);
  //Añado el contenedor al body.
  document.body.appendChild(carrusel);
};

// Función para obtener la imagen actual
const obtenerImagenActual = () => {
  return imagenes[indiceActual];
};

// Cambiar imagen con ejecto en JS.
const cambiarImagen = () => {
  //Cargo imagen indice 0.
  elementoImg.src = imagenes[indiceActual];
  setInterval(() => {
    elementoImg.style.opacity = 0;
    elementoImg.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
      //Con el modulo
      indiceActual = (indiceActual + 1) % imagenes.length;
      elementoImg.src = obtenerImagenActual();
      //Volvemos a mostrar
      elementoImg.style.opacity = 1;
    }, 1000);
  }, 3000);
};

/*   // Hacemos que la imagen actual se desvanezca
  //const desvanecer = setInterval(() => {
    if (opacidad <= 0) {
      clearInterval(desvanecer);
      // Cambia la imagen cuando ya está invisible
      indiceActual = (indiceActual + 1) % imagenes.length;
      elementoImg.src = imagenes[indiceActual];
      console.log(elementoImg.src);
      elementoImg.style.opacity = "1"; // vuelve a ser visible instantáneamente
    } else {
      opacidad -= 0.05; // velocidad de desvanecimiento
      elementoImg.style.opacity = opacidad;
    }
 // }, 50); // intervalo de tiempo entre pasos
}; */
export { crearCarrusel, obtenerImagenActual, cambiarImagen };
