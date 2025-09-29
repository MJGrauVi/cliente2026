"use strict";
// Funciones para los ejercicios de la práctica 2-01
//Ejercicio1

//Solo entra si el dato no es un número.
const calcularIMCC = (peso, altura) => {
  let condiciones =
    typeof peso !== "number" ||
    typeof altura !== "number" ||
    isNaN(peso) ||
    isNaN(altura) ||
    peso <= 0 ||
    altura <= 0;
  console.log(condiciones);

  return condiciones
    ? "Porfavor, introduce un dato numérico positivo"
    : peso / (altura * altura);
};

function calcularIMC(peso, altura) {
  if (
    typeof peso !== "number" ||
    typeof altura !== "number" ||
    isNaN(peso) ||
    isNaN(altura) ||
    peso <= 0 ||
    altura <= 0
  ) {
    //console.log();
    return "Porfavor, introduce un dato numérico positivo"; //Para que no devuelva el else.
  }
  return peso / (altura * altura);
}

//Funciones para la práctica 2-02.
//Ejercicio 1.

//Función para obtener el nombre del mes usando el objeto "meses"."
function obtenerMes(valor) {
  //let resultado="";
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

    console.log(`Porfavor, introduce un dato numérico positivo entre 1 y 12.`);
    
    //return console.log("Porfavor, introduce un dato numérico positivo entre 1 y 12");
    
  } else {
    //console.log(`El número corresponde con el mes de ${meses[valor]}.`);
    //return meses[valor];
    return console.log(`El número corresponde con el mes de ${meses[valor]}.`); 
  }
}
const esNumero = (numero) => {
  if (typeof numero !== "number") {
    console.log("Porfavor, introduce un dato numérico.");
    return false;
  } else {
    return numero;
  }
};
//Funciones para la práctica 2-02.
//Ejercicio 2.

//Números solo divisibles por 1 o por sí mismos.
//El bucle termina la iteración en valor-1 porque un número siempre es divisible por sí mismo.
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
//Funciones para la práctica 2-02.
//Ejercicio 3 (multiplos de 3).

const multiploTres = (valor) => {
  if (typeof valor !== "number" || isNaN(valor) || !Number.isInteger(valor)) {
    return "Porfavor, introduce un dato numérico entero.";
    //return null; //Para que no devuelva el else.
  }
  let valoresMultiplos = [];
  for (let i = 1; i <= valor; i++) {
    if (i % 3 === 0) {
      //valoresMultiplos.push(i);
      valoresMultiplos = [...valoresMultiplos, i];
    }
  }
  return `Los múltiplos de tres son: ${valoresMultiplos.join(", ")}`;
};

const valoresMultiplos = (valor, dividendo) => {
  let condiciones =
    typeof valor !== "number" ||
    typeof dividendo !== "number" ||
    isNaN(valor) ||
    isNaN(dividendo) ||
    valor <= 0 ||
    dividendo <= 0;

  if (condiciones) return "Error: introduce números válidos mayores que 0.";

  let valoresDivisores = [];
  let indice = 0;
  for (let i = 0; i < valor; i++) {
    if (i % dividendo === 0) {
      valoresDivisores[indice] = i;
      indice++;
    }
  }
  return `Los números multiplos de ${dividendo} hasta ${valor} son: ${valoresDivisores.join(
    ", "
  )}`;
};

//Funciones para la práctica 2-02.
//Ejercicio 4 (potencia).

const calcularPotencia = (base, exponente) => {
  let resultado = 1;
  let contador = 0;
  if (!esNumero(base)) {
    return;
  } else if (!esNumero(exponente)) {
    return null;
  } else {
    while (contador < exponente) {
      resultado *= base;
      contador++;
    }
    return `El resultado de: ${base} ** ${exponente} = ${resultado}`;
  }
};

//Ejercicio5
function calcularMedia() {
  let suma = 0;
  let cantidad = 0;
  if (arguments.length === 0) return `No se han introducido números`;

  for (let i = 0; i < arguments.length; i++) {
    let valor = arguments[i];
    if (!esNumero(valor) || !esPositivo(valor)) {
      continue;
    }
    suma += valor;
    cantidad++;
  }
  if (cantidad === 0) {
    return `No se han introducido números válidos`;
  }
  let media = suma / cantidad;
  return `La media de los números introducidos es: ${media.toFixed(2)}`;
}

//Ejercicio 6 (calculadora).
/*
function sumar(x, y) {
  return x + y;
}
*/
function restar(x, y) {
  return x - y;
}

function multiplicar(x, y) {
  return x * y;
}

function dividir(x, y) {
  let division = 0;
  if (y === 0) {
    division = "No se puede dividir entre 0.";
  } else {
    division = x / y;
  }
  return division;
}
function modulo(x, y) {
  if (y === 0) {
    console.log("Error: No se puede divisor por 0");
    return null;
  }
  return x % y;
}
const calculadora = (x, y, operador) => {
  let resultado;
  switch (operador) {
    case "+":
      resultado = sumar(x, y);
      break;
    case "-":
      resultado = restar(x, y);
      break;
    case "*":
      resultado = multiplicar(x, y);
      break;
    case "/":
      resultado = dividir(x, y);
      break;
    case "%":
      resultado = modulo(x, y);
      break;
    default:
      console.log("Debe intoducir uno de estos operadores: +, -, *, /, %");
      return;
  }
  if (resultado !== null) {
    console.log(`El resultado de ${x} ${operador} ${y} es: ${resultado}`);
  }
};

//Práctica 2.03
("use strict");
function suma() {
  //utilizo funcion declaración la función flecha no tiene arguments.
  //Comprobar numero de parametros que entran.ç
  if (arguments.length < 2) {
    console.log(`Necesita introducir 2 numeros para realizar la operación.`);
    //Si no introduce los datos se para la ejecucion.
    return;
  }
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    let valor = arguments[i];

    if (typeof valor !== "number" || isNaN(valor)) {
      console.log(`El dato introducido no es un número.`);
      return;
    }
    total += valor;
  }
  console.log(
    `La suma de [${Array.from(arguments).join(" + ")}] es = ${total}`
  );
  return total;
}

export { suma };

//Cada export corresponde a la/las funciones utilizadas en cada ejercicio.
export { calcularIMCC, calcularIMC };
export { obtenerMes };
export { esNumero, esPar, esPositivo, esPrimo, analisisNumerico };
export { multiploTres, valoresMultiplos };
export { calcularPotencia };
export { calcularMedia };
export { calculadora };

//otras funciones.
