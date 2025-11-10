"use strict";

/*Ejercicio 1 - Acordeón
Crea un acordeón compuesto por seis elementos que al hacer clic sobre los impares se
muestre la información que está situada en el elemento par inmediatamente inferior a él. Al
volver a hacer clic, si el elemento par que contiene la información se ve en pantalla deberá
ocultarse. No se podrá utilizar el atributo id de los elementos HTML.*/

function crearAcordeon() {
  const acordeonDiv = document.createElement("div");

  let numeroParrafos = 6;
  for (let i = 0; i < numeroParrafos; i++) {
    let parrafo = document.createElement("p");
    
    if (i % 2 === 0) {
      parrafo.textContent = `Elemento ${i + 1}`;
      parrafo.classList = "impar";
    } else {
      parrafo.textContent = `Este es el contenido de Elemento ${i}`;
      parrafo.classList = "par"; //Para que aparezcan visibles todos los párragos hay que añadir visible, cuando haga clic en en parrafo se ocultará.
    }
    acordeonDiv.appendChild(parrafo);
  }

  document.body.appendChild(acordeonDiv);

  return acordeonDiv;
}

function activarAcordeon(contenedor) {
  contenedor.addEventListener(
    "click",
    (event) => {
      //Escucha los clics dentro del contenedor.
      const target = event.target; //Identifica el elemento que se clica.

      if (target.classList.contains("impar")) {
        //Se dispara el evento solo si donde clicas contiene la clase especifica.
        const contenido = target.nextElementSibling; //Obtiene el elemento hermano siguente en el DOM.

        if (contenido && contenido.classList.contains("par")) {
          //Si existe el elemento y además tiene la clase "par", muestra su contenido.
          contenido.classList.toggle("visible");
        }
      }
    },
    false
  );
}

export { crearAcordeon, activarAcordeon };
