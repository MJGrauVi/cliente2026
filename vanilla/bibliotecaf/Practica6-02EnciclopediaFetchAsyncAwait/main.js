"use strict";

window.onload = ()=>{

    const divPeliculas = document.getElementById("peliculas");
    const divInfo = document.getElementById("informacion");

    const urlApi = "https://swapi.info/api";

    const traerDatos = (urlApi)=>{

        return fetch(urlApi)
        .then((respuesta)=>{
           return respuesta.json();
        });
       
    };
    



};//fjin de window.onload
