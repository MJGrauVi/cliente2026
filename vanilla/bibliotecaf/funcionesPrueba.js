"user strict";

/*Funciones de prueba*/
//Pasa sumar un array con for.
function sumaArrayFor(array) {
  let acumulado = 0;
  for (let i = 0; i < array.length; i++) {
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
//Prueba objeto
let nombres = ["Manolo", "Juan", "Paco", "Carmina", "Pilar"];
const stringMayus = nombres.map((valor) => {
  return valor.toUpperCase();
});
//cambiar una palabra por otra en la web.
function reemplazarPalabraEnTodaLaWeb(palabraOriginal, palabraNueva) {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let nodoTexto;

  while ((nodoTexto = walker.nextNode())) {
    if (nodoTexto.nodeValue.includes(palabraOriginal)) {
      nodoTexto.nodeValue = nodoTexto.nodeValue.replaceAll(palabraOriginal, palabraNueva);
    }
  }
}
// ---- 4. FORMATEAR FECHA ---------------------
function formatearFechaEuropea(fechaISO) {
  const d = new Date(fechaISO);
  return d.toLocaleDateString("es-ES");
}

console.log(typeof null); //object
console.log(null === "object"); //false
console.log(typeof NaN); //number
console.log(NaN === "number"); //false
console.log(isNaN(123)); // false, porque sí es número
console.log(isNaN("123")); //false, ¿¿ se puede
console.log(isNaN("abc")); //true, no es un número
console.log(isNaN(undefined)); //true, se convierte en NaN.
console.log(isNaN(NaN)); // true, es NaN-
console.log(isNaN(null)); //false, se convierte en 0 que sí es número.
console.log(true); //false, devuelve 1 que sí es número.
console.log(false); //false, devuelve 0 que sí es número.
console.log(isNaN([])); //false, []convierte en string "" y " " en 0
console.log(isNaN({})); //true, porque{} se convierte en NaN.
console.log(typeof {}); //object
console.log(Number({})); //NaN
console.log(Number([])); //0
console.log(Array.isArray([]));
export { sumaArrayFor, entraEnteroDelRango, imcMayor, stringMayus, reemplazarPalabraEnTodaLaWeb, formatearFechaEuropea};
