"use strict";
function suma() {
  //Comprobar numero de parametros que entran.ç
  if (arguments.length < 2) {
    console.log(`Necesita introducir 2 numeros para realizar la operación.`);
    //Si no introduce los datos se para la ejecucion.
    return;
  }
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    let valor = arguments[i];

    if (typeof valor !== "number" || inNaN(valor)) {
      console.log(`El dato introducido no es un número.`);
      return;
    }
    total += valor;
  }
  console.log(
    `La suma de [$¨{Array.from(arguments).join(" + ")}] es = ${total}`
  );
}
