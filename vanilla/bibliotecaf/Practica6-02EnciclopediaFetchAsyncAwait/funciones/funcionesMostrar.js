"use strict";

const dibujarPlanetas = (planetas) => {
  // Se pinta en el DOM el contenido de la llamada a la API.
  let plantilla = "";
  Array.isArray(planetas) && planetas.length
    ? planetas.map((planeta) => {
        let gente = parseInt(planeta.population)
          ? parseInt(planeta.population).toLocaleString("es-ES")
          : "Desconocido";
        plantilla += `<div class="planeta borde"><h2>${planeta.name}</h2><p>Población: ${gente}</p></div>`;
      })
    : (plantilla = "<h3>No se han encontrado planetas en la galaxia.</h3>");
  // Se introducen en el DOM en el lugar indicado.
  return plantilla;
};

const dibujarGentuza = (gentuza) => {
  let cadena = "";
  Array.isArray(gentuza) && gentuza.length
    ? gentuza.map((gente) => {
        //console.log(v);
        cadena += `<p class="gentuza"> ${gente.name} tiene los ojos de color ${gente.eye_color}.</p>`;
      })
    : (cadena = "No se ha encontrado gentuza.");
  return plantilla;
};

export { dibujarPlanetas, dibujarGentuza };