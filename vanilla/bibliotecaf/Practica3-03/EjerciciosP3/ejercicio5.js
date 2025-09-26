"use strict";

function imprimirObjeto(obj) {
  console.log("=========== OBJETO ===========");

  // Recorremos las claves con Object.entries → devuelve [clave, valor]
  Object.entries(obj).map(([clave, valor]) => {
    const tipo = Array.isArray(valor) ? "array" : typeof valor;

    switch (tipo) {
      case "number":
        console.log(`${clave} (${tipo}) : ${valor}`);
        break;

      case "string":
        console.log(`${clave} (${tipo}) : "${valor}"`);
        break;

      case "array":
        console.log(`${clave} (${tipo}) : [`);
        valor.map((el, i) =>
          console.log(`   ${i + 1}. ${el} (${typeof el})`)
        );
        console.log("]");
        break;

      case "object":
        console.log(`${clave} (${tipo}) : {`);
        imprimirObjeto(valor); // recursividad para objetos anidados
        console.log("}");
        break;

      case "function":
        console.log(`${clave} (${tipo}) : [función]`);
        break;

      default:
        console.log(`${clave} (${tipo}) : ${valor}`);
    }
  });

  console.log("==============================");
}

export {imprimirObjeto};
// Ejemplo con tu objeto
imprimirObjeto(discente);