"use strict";
import { mostrarError, escapeHtml, contenedor, mostrarErrorGente, contenedorGente } from "./funciones/funciones.js";

// Ejercicio1. Creamos una promesa que genera un número aleatorio

window.onload = () => {
  // Ejercicio1. Creamos una promesa que genera un número aleatorio
  //Simulamos programación asincrona.
  /*   const promesaPar = new Promise ((resolver, rechazar)=>{
        setTimeout(()=>{
            let numeroPar = Math.floor(Math.random()*101);
            console.log(`Número generado ${numeroPar}`);
            if(numeroPar % 2 === 0){ 
                 resolver(numeroPar)
            }else{  
                 rechazar(new Error("El numero es impar"));
            }

        },1000);
    });
    console.log(promesaPar);
    console.log(typeof promesaPar);

    console.log(promesaPar.value)
    /*Consumir la promesa----------------------------------------------------*/
  /*    promesaPar.then((datos) => {console.log("Resultado:", datos)})
  .catch((error) => {console.error("Error:", error.message);})
  .finally(() => console.log("Proceso terminado ok"));  */

  /**********************Ejercicio 2. Solicitud externa al objeto document.*****************************************************/

  /* const listaFeos = "./feos.json";

  fetch(listaFeos)
  .then(respuesta => {
        // Aquí es importante usar exactamente "respuesta" (no "respuesta") si lo usas así.
        console.log(respuesta)
        if (!respuesta.ok) {
          // Construimos un error para que salte al .catch
          throw new Error("La petición falló con estado " + respuesta.status + " " + respuesta.statusText);
        }
        // Convertimos a JSON
        return respuesta.json();
      })
      .then(data => {
        // Validaciones
        if (!Array.isArray(data)) {
          throw new Error("El JSON no contiene un array en la raíz.");
        }

        // Comprobar que todos los elementos tienen 'nombre' como string
        data.forEach((item, idx) => {
          if (!item || typeof item.first_name !== "string") {
            throw new Error(`Elemento en índice ${idx} no tiene una propiedad "nombre" válida.`);
          }
        });

        // Ordenar alfabéticamente por nombre (ascendente) usando localeCompare
        data.sort((a, b) => a.first_name.localeCompare(b.first_name, 'es', { sensitivity: 'base' }));

        // Construir HTML formateado (ejemplo: lista con meta info)
        let html = "<ul aria-live='polite'>";
        data.forEach(item => {
          // mostramos nombre escapado y alguna meta si existe
          const nombre = escapeHtml(item.first_name);
        

          html += `<li><strong>${nombre}</strong></li>`;
        });
        html += "</ul>";

        // Insertar en el contenedor (reemplaza el "Cargando..." anterior)
        contenedor.innerHTML = html;
      })
      .catch(error => {
        // Mostrar el error al usuario
        console.error("Error al procesar feos.json:", error);
        mostrarError(error.message || "Se produjo un error desconocido.");
      })
      .finally(() => {
        // Informar que el proceso ha terminado (si se desea, agregar al final del contenedor)
        // Usamos insertAdjacentHTML para añadir sin borrar el contenido actual (si ya hay error, también lo añadimos)
        // Comprobamos si existe contenido para no repetir demasiado.
        const mensajeFinal = "<p class='finished'>Proceso finalizado.</p>";
        // Si el contenedor está vacío, lo ponemos; si ya tiene algo, lo añadimos
        if (!contenedor.innerHTML.trim()) {
          contenedor.innerHTML = mensajeFinal;
        } else {
          contenedor.insertAdjacentHTML("beforeend", mensajeFinal);
        }
      });
 */
  /**********************Ejercicio 3. Solicitud externa a la API de STAR WARS.*****************************************************/

  const URL = "https://swapi.info/api/people";

  fetch(URL)

    .then((respuesta) => {
        console.log(`Respuesta ${respuesta}`)
      if (!respuesta.ok) {
        throw new Error(
          "No se pudo cargar el archivo JSON. Estado: " + respuesta.status
        );
      }
      return respuesta.json();
      
    })
    .then((data) => {
      if (!Array.isArray(data)) {
        
        throw new Error("El JSON no contiene una lista válida de personajes.");
      }

      // Validar propiedades esenciales
      data.forEach((p, i) => {
        if (typeof p.name !== "string")
          throw new Error(`El elemento ${i} no tiene un 'name' válido.`);
        if (!p.mass) p.mass = "¿desconocido?";
        if (!p.gender) p.gender = "¿desconocido?";
        if (!p.hair_color) p.hair_color = "¿desconocido?";
        if (!p.birth_year) p.birth_year = "¿desconocido?";
      });

      // Ordenar alfabéticamente
      data.sort((a, b) =>
        a.name.localeCompare(b.name, "es", { sensitivity: "base" })
      //localeCompare() es un método de cadena que compara dos textos usando reglas lingüísticas reales,
      );

      // Construcción del listado
      let html = "<ul>";
      data.forEach((p) => {
        html += `
            <li>
              <span class="label">Nombre:</span> ${escapeHtml(p.name)} <br>
              <span class="label">Peso:</span> ${escapeHtml(p.mass)} kg <br>
              <span class="label">Género:</span> ${escapeHtml(p.gender)} <br>
              <span class="label">Color de pelo:</span> ${escapeHtml(
                p.hair_color
              )} <br>
              <span class="label">Año de nacimiento:</span> ${escapeHtml(
                p.birth_year
              )}
            </li>
          `;
      });
      html += "</ul>";

      contenedor.innerHTML = html;
    })
    .catch((err) => {
      console.error("ERROR:", err);
      mostrarErrorGente(err.message);
    })
    .finally(() => {
      contenedorGente.insertAdjacentHTML(
        "beforeend",
        `<p class="finished">Proceso finalizado.</p>`
      );
    });
}; //fin window.
