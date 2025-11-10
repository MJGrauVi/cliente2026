"use strict";
import {cargarImagenes, completado} from "./funciones.js";


window.addEventListener("DOMContentLoaded", () => {

  cargarImagenes();
  completado();
 

document.getElementById("contenedorImg").addEventListener(
  "dragstart",
  (evento) => {
    console.log(evento);
    //Configurar el identificador del elemento a arrastrar.
    evento.dataTransfer.setData("identificador", evento.target.id);
    // Se muestran los datos por consola.
    console.log(evento.dataTransfer.getData("identificador"));
    
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
      const idImagen = evento.dataTransfer.getData("identificador");
      const imagen = document.getElementById(idImagen);
      evento.target.innerHTML = ""; // Limpia la celda antes de insertar
      evento.target.appendChild(imagen);
      completado(); // Verifica si el puzzle está completo
    }
  },
  false
); 

   

});//fin del addEventListener.
