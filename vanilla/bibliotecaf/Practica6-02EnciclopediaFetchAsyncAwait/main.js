"use strict";
import {traerDatos, traerDatosApi} from "./funciones/funcionesManejarDatos.js";

window.onload = () => {
  const divPeliculas = document.getElementById("peliculas");
  const divInfo = document.getElementById("informacion");

  const urlurl = "https://swapi.info/api";
    try{
        traerDatos(urlurl);
    }catch(error){
        console.error(`Error al cargar los datos: ${error}`);
    }
      const urlApi = "https://swapi.info/api";
    try{
        traerDatosApi(urlApi);
    }catch(error){
        console.error(`Error al cargar los datos: ${error}`);
    }
  
  console.log(`Datos ${traerDatos(urlurl)}`);
  console.log(`DatosApi: ${traerDatosApi(urlApi)}`);
}; //fjin de window.onload
