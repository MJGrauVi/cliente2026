"use strict";
//Funciones para la Práctica3.03.
//Ejercicio1.
function constCurso(nomCurso, anioCurso, descripcionCurso) {
  return {
    nombre: nomCurso,
    año: anioCurso,
    descripción: descripcionCurso,
    alumnado: [],
  };
}

function incluirEnArray(curso, alumnos){
  if(Array.isArray(alumnos)){
    curso.alumnado=[...curso.alumnado,alumnos];
  }else{
    console.log(`Debes pasar un array con los datos.`)
  }
}
export { constCurso, incluirEnArray }

