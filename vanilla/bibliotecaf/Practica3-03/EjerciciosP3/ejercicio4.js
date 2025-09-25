"use strict";
//Funciones para la Práctica3.03.
//Ejercicio4.
function constCurso(nomCurso, anioCurso, descripcionCurso) {
  return {
    Nombre: nomCurso,
    Año: anioCurso,
    Descripción: descripcionCurso,
    Alumnado: [],

    // Nuevo método: matricular
    matricular: function(discente) {
      this.Alumnado.push(discente);
      console.log(`${discente.nombre} ${discente.apellidos} ha sido matriculado en ${this.Nombre}.`);
    }
  };
}