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

const completado = () => {
  const celdas = document.querySelectorAll(".celda"); //NodeList.

  let todoCorrecto = true;

  celdas.forEach((celda) => {
    const imagen = celda.querySelector("img");
    if (!imagen || imagen.id !== celda.id) {
      todoCorrecto = false;
    }
  });

  if (todoCorrecto) {
    console.log("¡Enhorabuena! Has completado el rompecabezas");
  } else {
    // console.log(`El puzle no es correcto, vuelve a intentarlo.`);
  }
};

const crearEventosDragAndDrop = () => {
  document.getElementById("contenedorImg").addEventListener(
    "dragstart",
    (evento) => {
      //Configurar el identificador del elemento a arrastrar.
      evento.dataTransfer.setData("identificador", evento.target.id);
    },
    false
  );

  document.getElementById("contenedorImg").addEventListener(
    "dragover",
    (evento) => {
      evento.preventDefault(); //Previene el comportamiento del navegador.
    },
    false
  ); // Permite que el elemento arrastrado pase por encima.

  //Permite arrastrar las imagenes que hemos dejado en el contenedor receptor para corregir su posición.
  document.getElementById("contenedorPuzle").addEventListener(
    "dragstart",
    (evento) => {
      console.log(evento);
      //Configurar el identificador del elemento a arrastrar.
      evento.dataTransfer.setData("identificador", evento.target.id);
    },
    false
  );
  document.getElementById("contenedorPuzle").addEventListener(
    "dragover",
    (evento) => {
      evento.preventDefault();
    },
    false
  );

  document.getElementById("contenedorPuzle").addEventListener(
    "drop",
    (evento) => {
      evento.preventDefault();
      if (evento.target.classList.contains("celda")) {
        const idImagen = evento.dataTransfer.getData("identificador");
        const imagen = document.getElementById(idImagen);
        evento.target.innerHTML = ""; // Limpia la celda antes de insertar
        evento.target.appendChild(imagen);
        completado(); // Verifica si el puzzle está completo
      }
    },
    false
  );
};
const reiniciarPuzle = () => {
  document.getElementById("contenedorPu<le").innerHTML = "";
  const celdas = document.querySelectorAll(".celda");
  celdas.forEach((celda) => (celda.innerHTML = ""));
  //Volver a cargar las imagenes.
  cargarImagenes();
};

export {
  cargarImagenes,
  mezclarImagenes,
  completado,
  crearEventosDragAndDrop,
  reiniciarPuzle,
};
