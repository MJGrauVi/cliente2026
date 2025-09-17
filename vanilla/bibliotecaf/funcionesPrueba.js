"user strict";

/*Funciones de prueba*/
//Pasa sumar un array con for.
function sumaArrayFor(array) {
    let acumulado = 0;
    for(let i = 0; i < array.length; i++){
        acumulado += array[i];
      
    }
    return acumulado;
}

const entraEnteroDelRango = (numero, min, max) => {
  const numeroMes = Number(numero);
  if (!Number.isInteger(numeroMes)) {
    return null;
  } else if (numeroMes < min || numeroMes > max) {
    //console.log("El número no está en el rango");
    return null;
  } else {
    return numeroMes;
  }
};
//const sumarConReduce = array => array.reduce(acumulador, valorActual, indice, arrayOriginal) => acumulador + valorActual, 0);

const imcMayor = (imc1, imc2) => {
  //et mayor = 0;
  if (imc1 > imc2) {
    //mayor = imc1;
    return imc1;
  } else {
    return imc2;
  }
};
export {sumaArrayFor, entraEnteroDelRango, imcMayor, };