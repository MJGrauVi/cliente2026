"use strict";
//Funciones para la Práctica3.03.
//Ejercicio3.

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
  calcularMedia: function () {
    const { primera, segunda, tercera } = this.notas;
    const media = (primera + segunda + tercera) / 3;
    return Number(media.toFixed(2)).toLocaleString("es-ES");
  },

  // Método para imprimir las aficiones del alumnado.

  imprimirAficiones: function () {
    console.log(`----- Aficiones ------------------`);
    this.aficiones.map((aficion, index) => {
      console.log(`${index + 1}. ${aficion}`);
    });
    console.log(`----------------------------------`);
  },

  // Método para imprimir un informe completo
  imprimirInforme: function () {
    console.log("=========== INFORME DEL DISCENTE ===========");
    console.log(`ID         : ${this.id}`);
    console.log(`Nombre     : ${this.nombre} ${this.apellidos}`);
    console.log(
      `Notas      : 1ª = ${this.notas.primera.toLocaleString(
        "es-ES"
      )}, 2ª = ${this.notas.segunda.toLocaleString(
        "es-ES"
      )}, 3ª = ${this.notas.tercera.toLocaleString("es-Es")}`
    );
    //console.log(typeof this.calcularMedia());
    console.log(`Nota media : ${this.calcularMedia()}`);
    console.log("Aficiones  :");
    this.aficiones.map((aficion) => console.log(`   - ${aficion}`));
    console.log("============================================");
  },
};

export {discente};


