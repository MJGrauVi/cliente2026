"use strict";

// Definición de variables.
let puntosEqJuan = [89, 120, 103];
let puntosEqMiguel = [116, 94, 123];
let puntosEqMaria = [97, 134, 105];

// Función para imprimir por pantalla los puntos de un equipo en los partidos jugados.
function imprimirPuntos(arrayPuntos, equipo) {
  let linea = "";
  for (let i = 0; i < arrayPuntos.length; i++) {
    if (i < arrayPuntos.length - 1) {
      linea = `${linea} ${arrayPuntos[i]} -`;
    } else {
      linea = `${linea} ${arrayPuntos[i]}`;
    }
  }
  return `Los puntos del equipo de ${equipo} son: ${linea}.`;
}

// Función que calcula la media de puntos de un equipo.
function calcularMedia(arrayPuntos) {
  let media = 0;
  for (let i = 0; i < arrayPuntos.length; i++) {
    media = arrayPuntos[i] + media;
  }
  return media / arrayPuntos.length;
}

// Función para rellenar aletorimente los puntos de un equipo a partir del número de partidos.
function obtenerPuntos(numPartidos) {
  let arrayPuntos = [];
  for (let i = 0; i < numPartidos; i++) {
    arrayPuntos[i] = Math.floor(Math.random() * 80) + 60;
  }
  return arrayPuntos;
}

// Función que de devuelve el nombre del equipo ganador. En caso de empate de devuelve "Empate".
function obtenerGanador(equipo1, mediaEq1, equipo2, mediaEq2) {
  // ¡¡CUIDADO!! Cuatro parámetros son demasiados. Hay que usar objetos (pero aún no sabemos).
  let ganador;
  if (mediaEq1 > mediaEq2) {
    ganador = equipo1;
    console.log(
      `El equipo ganador es el equipo de ${equipo1} y la puntuación media es: %.2f.`,
      mediaEq1
    );
  } else if (mediaEq1 < mediaEq2) {
    ganador = equipo2;
    console.log(
      `El equipo ganador es el equipo de ${equipo2} y la puntuación media es: %.2f.`,
      mediaEq2
    );
  } else {
    ganador = "Empate";
    console.log(
      `Hay empate entre los equipos de ${equipo1} y ${equipo2} y la media de puntuación es: %.2f.`,
      mediaEq1
    );
  }
  return ganador;
}

// Resultados con los datos del enunciado.
console.log(`----- Cálculos con los datos del enunciado -----`);
let mediaEqJuan = calcularMedia(puntosEqJuan);
let mediaEqMiguel = calcularMedia(puntosEqMiguel);
console.log(imprimirPuntos(puntosEqJuan, "Juan"));
console.log(`La puntuación media del equipo de Juan es: %.2f.`, mediaEqJuan);
console.log(imprimirPuntos(puntosEqMiguel, "Miguel"));
console.log(
  `La puntuación media del equipo de Miguel es: %.2f.`,
  mediaEqMiguel
);
let equipoGanador = obtenerGanador(
  "Juan",
  mediaEqJuan,
  "Miguel",
  mediaEqMiguel
);
console.log(); // Para imprimir una línea en blanco.

//Resultados con los mismos datos (aleatorios) en los equipos de Juan y Miguel.
console.log(
  `----- Cálculos con los mismos puntos en ambos equipos para forzar el empate -----`
);
puntosEqJuan = obtenerPuntos(3);
puntosEqMiguel = puntosEqJuan;
console.log(imprimirPuntos(puntosEqJuan, "Juan"));
mediaEqJuan = calcularMedia(puntosEqJuan);
console.log(`La puntuación media del equipo de Juan es: %.2f.`, mediaEqJuan);
console.log(imprimirPuntos(puntosEqMiguel, "Miguel"));
mediaEqMiguel = calcularMedia(puntosEqMiguel);
console.log(
  `La puntuación media del equipo de Miguel es: %.2f.`,
  mediaEqMiguel
);
equipoGanador = obtenerGanador("Juan", mediaEqJuan, "Miguel", mediaEqMiguel);
console.log();

// Resultados con puntuación aleatoría para los equipos de Juan y Miguel.
console.log(`----- Cálculos con datos aleatorios para Juan y Miguel -----`);
puntosEqJuan = obtenerPuntos(3);
puntosEqMiguel = obtenerPuntos(3);
console.log(imprimirPuntos(puntosEqJuan, "Juan"));
mediaEqJuan = calcularMedia(puntosEqJuan);
console.log(`La puntuación media del equipo de Juan es: %.2f.`, mediaEqJuan);
console.log(imprimirPuntos(puntosEqMiguel, "Miguel"));
mediaEqMiguel = calcularMedia(puntosEqMiguel);
console.log(
  `La puntuación media del equipo de Miguel es: %.2f.`,
  mediaEqMiguel
);
equipoGanador = obtenerGanador("Juan", mediaEqJuan, "Miguel", mediaEqMiguel);
console.log();

// Añadimos los puntos de María.
console.log(`----- Cálculos con los puntos de los tres equipos -----`);
let mediaEqMaria = calcularMedia(puntosEqMaria);
console.log(imprimirPuntos(puntosEqMaria, "Maria"));
console.log(`La puntuación media del equipo de Maria es: %.2f.`, mediaEqMaria);

// Resultado del equipo ganador de entre los tres (Juan, Miguel y María).
if (equipoGanador == "Juan") {
  equipoGanador = obtenerGanador(
    equipoGanador,
    mediaEqJuan,
    "Maria",
    mediaEqMaria
  );
} else if (equipoGanador == "Miguel") {
  equipoGanador = obtenerGanador(
    equipoGanador,
    mediaEqMiguel,
    "Maria",
    mediaEqMaria
  );
} else if (mediaEqJuan == mediaEqMaria) {
  console.log(
    `Hay empate entre los 3 equipos y la media de puntuacion es: %.2f.`,
    mediaEqJuan
  );
} else if (mediaEqJuan > mediaEqMaria) {
  console.log(
    `Hay empate entre los equipos de Juan y Miguel la media de puntuacion es: %.2f.`,
    mediaEqJuan
  );
} else {
  console.log(
    `El equipo ganador es el equipo de María y la puntuacion media es: %.2f.`,
    mediaEqMaria
  );
}