"use strict";
//Funciones para la Práctica3.03.
//Ejercicio3.

"use strict";

const discente = {
  id: 1,
  nombre: "Ana",
  apellidos: "García López",
  aficiones: ["Lectura", "Ciclismo", "Programación"],
  notas: {
    primera: 7.5,
    segunda: 8.0,
    tercera: 9.0,
  },

  // Método para calcular la media de las tres evaluaciones
  calcularMedia: function () {
    const { primera, segunda, tercera } = this.notas;
    return ((primera + segunda + tercera) / 3).toFixed(2);
  },

  // Método para imprimir las aficiones del alumnado
  imprimirAficiones: function () {
    console.log("----- Aficiones del alumnado -----");
    this.aficiones.forEach((aficion, index) => {
      console.log(`${index + 1}. ${aficion}`);
    });
    console.log("----------------------------------");
  },

  // Método para imprimir un informe completo
  imprimirInforme: function () {
    console.log("=========== INFORME DEL DISCENTE ===========");
    console.log(`ID         : ${this.id}`);
    console.log(`Nombre     : ${this.nombre} ${this.apellidos}`);
    console.log(
      `Notas      : 1ª = ${this.notas.primera}, 2ª = ${this.notas.segunda}, 3ª = ${this.notas.tercera}`
    );
    console.log(`Nota media : ${this.calcularMedia()}`);
    console.log("Aficiones  :");
    this.aficiones.forEach((aficion) => console.log(`   - ${aficion}`));
    console.log("============================================");
  },
};
