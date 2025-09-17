"use strict";
// Funciones para los ejercicios de la práctica 2-01
//Ejercicio1
function calcularIMC(peso, altura) {
  //Solo entra si el dato no es un número.
  if (
    typeof peso !== "number" ||
    typeof altura !== "number" ||
    isNaN(peso) ||
    isNaN(altura) ||
    peso <= 0 ||
    altura <= 0
  ) {
    console.log("Porfavor, introduce un dato numérico positivo");
    return null; //Para que no devuelva el else.
  } else {
    return peso / (altura * altura);
  }
}

//Funciones para la práctica 2-02.
//Ejercicio 1.

//Función para obtener el nombre del mes usando el objeto MESES
function obtenerMes(valor) {
  const meses = {
    1: "Enero",
    2: "Febrero",
    3: "Marzo",
    4: "Abril",
    5: "Mayo",
    6: "Junio",
    7: "Julio",
    8: "Agosto",
    9: "Septiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre",
  };
  if (
    typeof valor !== "number" ||
    isNaN(valor) ||
    valor <= 0 ||
    valor >= 13 ||
    !Number.isInteger(valor)
  ) {
    console.log("Porfavor, introduce un dato numérico positivo entre 1 y 12");
    return null; //Para que no devuelva el else.
  } else {
    console.log(`El número corresponde con el mes de ${meses[valor]}.`);
    return meses[valor];
  }
}

//Ejercicio 2.
const esNumero = (numero) => {
  if (typeof numero !== "number" || isNaN(numero)) {
    console.log("Porfavor, introduce un dato numérico.");
    return false;
  } else {
    return numero;
  }
};

//Números solo divisibles por 1 o por sí mismos.
const esPrimo = (numero) => {
  if (numero < 2) return false;
  if (numero === 2) return true;
  // Iteramos desde 2 hasta el número introducido.
  for (let i = 2; i <= numero - 1; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
};

const esPar = (numero) => {
  return numero % 2 == 0 ? true : false;
};

const esPositivo = (numero) => {
  return numero > 0 ? true : false;
};

const analisisNumerico = (numero) => {
  let esUnNumero = esNumero(numero);
  let esNumeroPositivo = esPositivo(numero);
  let esNumeroPar = esPar(numero);
  let esNumeroPrimo = esPrimo(numero);
  if (esUnNumero === false) {
    return null;
  } else {
    return `El número ${numero} es ${
      esNumeroPositivo ? "positivo" : "negativo"
    }, ${esNumeroPar ? "par" : "impar"} y ${
      esNumeroPrimo ? "es primo" : "no es primo"
    }.`;
  }
};
//Ejercicio 3 (multiplos de 3).



//Cada export corresponde a la/las funciones utilizadas en cada ejercicio
export { calcularIMC };
export { obtenerMes };
export { esNumero, esPar, esPositivo, esPrimo, analisisNumerico };

//otras funciones.
