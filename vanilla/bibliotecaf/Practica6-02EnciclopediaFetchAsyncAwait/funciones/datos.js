"use strict";

export async function traerDatos(urlApi) {
  try {
    const resultado = await fetch(urlApi);
    const data = await resultado.json();
    return data.results || data; // siempre array
  } catch (error) {
    console.error("Se ha producido un error:", error.message);
    return [];
  }
}
