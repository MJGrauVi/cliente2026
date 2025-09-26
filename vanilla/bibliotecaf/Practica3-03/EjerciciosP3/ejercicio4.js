"use strict";
//Funciones para la Práctica3.03.
//Ejercicio4.
function constCurso(nomCurso, anioCurso, descripcionCurso) {
  return {
    Nombre: nomCurso,
    Año: anioCurso,
    Descripción: descripcionCurso,
    Alumnado: [],

    // Método matricular.
    matricular: function (discente) {
      this.Alumnado = [...this.Alumnado, discente];
      console.log(
        `${discente.nombre} ${discente.apellidos} ha sido matriculado en ${this.Nombre}.`
      );
    },
  };
}
