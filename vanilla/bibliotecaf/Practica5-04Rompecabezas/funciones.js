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
  const celdas = document.querySelectorAll(".celda");
  //Toma todos los elementos con clase celda
  let todoCorrecto = true;

  celdas.forEach((celda) => {
    const imagen = celda.querySelector("img");

    if (!imagen || imagen.id !== celda.id) {
      //Comprueba todas las celdas que tiem¡nen imagen.
      todoCorrecto = false; //No hay imagen o no coinciden los ids.
    }
  });

  if (todoCorrecto) {
    //Coinciden los ides de la imagen arratrada con el de la celda.
    mostrarMensaje(true);
  }
};

const mostrarMensaje = (todoCorrecto) => {
  const zonaMensaje = document.getElementById("mensaje");

  zonaMensaje.innerHTML = ""; // limpia mensajes previos

  const mensaje = document.createElement("h1");

  if (todoCorrecto) {
    mensaje.textContent = "¡Enhorabuena! Has completado el rompecabezas";
  }

  zonaMensaje.appendChild(mensaje);
};

//He creado esta función porque veo que queda mucho mas claro el código.
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

        //Ver cuantas celdas tiene el puzle.
        const piezasColocadas = document.querySelectorAll('.celda img').length;
       
        if(piezasColocadas === 9){
        completado(); // Verifica si el puzzle está completo
        }
      }
    },
    false
  );
};

const reiniciarPuzle = () => {
  const contenedorImg = document.getElementById("contenedorImg");
  // Limpiar puzle.
  document.querySelectorAll(".celda").forEach((celda) => {
    celda.innerHTML = "";
  });
  // Limpiar imágenes iniciales.
  contenedorImg.innerHTML = "";

  // Limpiar mensaje sin borrar el botón
  document.getElementById("mensaje").innerHTML = "";
  // Recargar imágenes.
  cargarImagenes();
};
export {
  cargarImagenes,
  mezclarImagenes,
  completado,
  crearEventosDragAndDrop,
  reiniciarPuzle,
};
