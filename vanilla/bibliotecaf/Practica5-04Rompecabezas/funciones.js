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

const celdasArrastables = document.getElementsByClassName("celda");
for (let i = 0; i < celdasArrastables.length; i++) {
  celdasArrastables[i].getAttribute("draggable", true);
}

document.getElementById("contenedorImg").addEventListener(
  "dragstart",
  (evento) => {
    console.log(evento);
    //Configurar el identificador del elemento a arrastrar.
    evento.dataTransfer.setData("identificador", evento.target.id);
    // Se muestran los datos por consola.
    console.log(evento.dataTransfer.getData("identificador"));
    console.log(evento.dataTransfer.getData("nombre"));
  },
  false
);
document.getElementById("contenedorImg").addEventListener(
  "dragover",
  (evento) => {
    evento.preventDefault(); //Previene el comportamiento del navegador.
  },
  false
);
document.getElementById("contenedorPuzle").addEventListener(
  "dragstart",
  (evento) => {
    console.log(evento);
    //Configurar el identificador del elemento a arrastrar.
    evento.dataTransfer.setData("identificador", evento.target.id);
    // Se muestran los datos por consola.
    console.log(evento.dataTransfer.getData("identificador"));
    console.log(evento.dataTransfer.getData("nombre"));
  },
  false
);
document.getElementById("contenedorPuzle").addEventListener(
  "dragover",
  (evento) => {
    evento.preventDefault("");
  },
  false
);
document.getElementById("contenedorPuzle").addEventListener(
  "drop",
  (evento) => {
    evento.preventDefault();
    if (evento.target.classList.contains("celda")) {
      console.log(`Suelto imagen: ${evento.target.className}`);
      evento.target.appendChild(
        document.getElementById(evento.dataTransfer.getData("identificador"))
      );
    }
  },
  false
);
export { cargarImagenes, mezclarImagenes };
