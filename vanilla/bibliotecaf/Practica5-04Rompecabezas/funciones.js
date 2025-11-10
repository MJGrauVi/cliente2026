"use strict";

function mezclarImagenes(imagenes) {
  let imagenesCopia = [...imagenes];
  return imagenesCopia.sort(() => Math.random() - 0.5); //compara el valor del numero obtenido y resta 0.5, si es positivo devuelve una imagen y si es negativo la otra.
}

const cargarImagenes = () => {
  const contenedorImg = document.getElementById("contenedorImg");

  const arrayImagenes = [...Array(9)].map((_, i) => {
    //Creo un array vacio.
    const img = document.createElement("img"); //Creo elemento img.
    // Agrego los atributos necesarios.

    img.src = `rompecabezas_imagenes/${i + 1}.png`; //Recoge la imagen del directorio.
    img.id = `${i + 1}`; //Asignamos identificador.
    img.alt = `imagen-rompecabezas ${i + 1}`; //Texto alternativo, criterio de buenas prácticas.
    img.classList.add("imagen");
    img.setAttribute("draggable", true); //Añado la propiedad arrastable a las imagenes.
    return img;
  });
  const imagenesMezcladas = mezclarImagenes(arrayImagenes);
  imagenesMezcladas.forEach((img) => contenedorImg.appendChild(img)); //Añado las imagenes al DOM.
};

/* const celdasArrastables = document.getElementsByClassName("celda");
for (let i = 0; i < celdasArrastables.length; i++) {
  celdasArrastables[i].getAttribute("draggable", true);
} */
const completado = () => {
  const celdas = document.querySelectorAll(".celda");
  console.log(celdas);
  let todoCorrecto = true;

  celdas.forEach((celda) => {
    const imagen = celda.querySelector("img");
    if (!imagen || imagen.id !== celda.id) {
      todoCorrecto = false;
    }
  });


  if (todoCorrecto) {
    
    console.log("¡Enhorabuena! Has completado el rompecabezas");
  }else{
  // console.log(`El puzle no es correcto, vuelve a intentarlo.`);
  }
};



export { cargarImagenes, mezclarImagenes, completado };
