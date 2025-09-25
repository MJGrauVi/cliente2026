"use strict";
//Funciones para la Práctica3.03.
//Ejercicio1.
function constCurso(nomCurso, anioCurso, descripcionCurso) {
  return {
    Nombre: nomCurso,
    Año: anioCurso,
    Descripción: descripcionCurso,
    Alumnado: [],
  };
}
function incluirEnArray(curso, alumnos){
  if(Array.isArray(alumnos)){
    curso.Alumnado.push(...alumnos);
  }else{
    console.log(`Debes pasar un array con los datos.`)
  }
}
export { constCurso, incluirEnArray }

