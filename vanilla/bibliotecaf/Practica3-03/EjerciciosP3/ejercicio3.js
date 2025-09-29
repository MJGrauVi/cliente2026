"use strict";
//Funciones para la Práctica3.03.

/*Ejercicio 3 - Recorriendo (objetos)
Crea un objeto JSON denominado discente que tenga las siguientes propiedades: id, nombre,
apellidos, aficiones (que será un array de string) y notas (que será un objeto JSON con las
propiedades primera, segunda y tercera con las notas de cada evaluación).
Añade los siguientes métodos:
• calcularMedia, que calculará la nota media de las tres evaluaciones,
• imprimirAficiones, que imprimirá pos consola las aficiones del alumnado e
• imprimirInforme, que imprime por consola un informe completo.
Las impresiones deben hacerse debidamente formateadas. */

const discente = {
  id: 1,
  nombre: "Ana",
  apellidos: "García López",
  aficiones: ["Lectura", "Ciclismo", "Programación"],
  notas: {
    primera: 7.55,
    segunda: 8.35,
    tercera: 6.25,
  },
  // Método para calcular la media de las tres evaluaciones.
  //He dividido directamente entre 3 porque esta funciones está pensada solo para esta utilidad.
  //Si aportaramos más valores no los tomaría por la desestructuracion que crea esas 3 variables loales.
  calcularMedia: function () {
    const { primera, segunda, tercera } = this.notas;
    const media = (primera + segunda + tercera) / 3;
    return Number(media.toFixed(2)).toLocaleString("es-ES");
  },

  // Método para imprimir las aficiones del alumnado.

  imprimirAficiones: function () {
    console.log(`----- Aficiones ------------------`);
    this.aficiones.map((aficion, index) => {
      return console.log(`${index + 1}. ${aficion}`);
    });
    console.log(`----------------------------------`);
  },

  // Método para imprimir un informe completo
  imprimirInforme: function () {
    console.log("=========== INFORME COMPLETO ===========");
    console.log(`ID         : ${this.id}`);
    console.log(`Nombre     : ${this.nombre} ${this.apellidos}`);
    console.log(
      `Notas      : 1ª = ${this.notas.primera.toLocaleString(
        "es-ES"
      )}, 2ª = ${this.notas.segunda.toLocaleString(
        "es-ES"
      )}, 3ª = ${this.notas.tercera.toLocaleString("es-Es")}`
    );
    console.log(`Nota media : ${this.calcularMedia()}`);
    console.log("Aficiones  :");
    this.aficiones.map((aficion) => console.log(`   - ${aficion}`));
    console.log("============================================");
  },
};

export { discente };
