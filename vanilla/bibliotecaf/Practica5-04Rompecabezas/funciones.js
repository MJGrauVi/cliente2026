"use strict";

function mezclarImagenes(imagenes) {
  let imagenesCopia = [...imagenes];
  return imagenesCopia.sort(() => Math.random() - 0.5); //compara el valor del numero obtenido y resta 0.5, si es positivo devuelve una imagen y si es negativo la otra.
}

const cargarImagenes = () => {
  const contenedorImg = document.getElementById("contenedorImg");
  const arrayImagenes = [...Array(9)].map((_, i) => `${i + 1}.png`); //Creo un array vacio y agrego los nombres de las img.
  let imagenesMezcladas = mezclarImagenes(arrayImagenes);
  
  imagenesMezcladas.forEach((imagenArray) => {
    const img = document.createElement("img");
    img.src = `rompecabezas_imagenes/${imagenArray}`; //Recoge la imagen del directorio.
    img.alt = "imagen-rompecabezas";
    img.classList.add("imagen");
    contenedorImg.appendChild(img);
  });
};

export { cargarImagenes, mezclarImagenes };
