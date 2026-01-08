"use strict";

const traerDatos = async (url) => {
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status} - ${respuesta.statusText}`);
    }
    const datos = await respuesta.json();
    console.log("Los datos llegan:", datos);
    return datos ?? datos.results;
}

const traerDatosConPromiseAll = async (urls = []) => {
    return await Promise.all(
        urls.map(url => fetch(url).then(res => res.json()))
    );
};

const validarFormulario = ({ titulo, desarrollador, genero }) => {
    let errores = [];
    const regExp = /^[A-Za-z\s]{4,}$/;
    
    if (!titulo || !regExp.test(titulo)) {
        errores.push("El título es obligatorio y debe tener al menos 4 caracteres.");
    }
    if (!desarrollador || desarrollador.length < 4) {
        errores.push("El desarrollador es obligatorio y debe tener al menos 4 caracteres.");
    }
    if (!genero) {
        errores.push("El género es obligatorio.");
    }
    return errores;

}
//Añadimos elementos a la interfaz - ok.
const mostrarDatos = (seccion, videojuegos) => {
    seccion.innerHTML = "";
    videojuegos.forEach((v) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${v.titulo}</td>
        <td>${v.desarrollador}</td>
        <td>${v.genero}</td>
        <td><button class="eliminar" data-id="${v.id}">Eliminar</button></td>
        <td><button class="ver" data-id="${v.id}">Ver</button></td>`;
        seccion.appendChild(fila);
    });

}
//Muestra en la seccion indicada el mensaje durante el tiempo indicado.

const mostrarMensaje = (seccion, mensaje, tiempo = 5000) => {
  seccion.innerHTML = "";
  seccion.classList.remove("oculto");

  if (Array.isArray(mensaje)) {
    const ul = document.createElement("ul");

    mensaje.forEach(texto => {
      const li = document.createElement("li");
      li.textContent = texto;
      ul.appendChild(li);
    });

    seccion.appendChild(ul);
  } else {
    seccion.textContent = mensaje;
  }

  setTimeout(() => {
    seccion.classList.add("oculto");
    seccion.innerHTML = "";
  }, tiempo);
};
const filtrarPorGenero = (lista, genero) => {
    const nuevaLista = lista.filter((v) => 
        v.genero === genero
    );
    return !genero ? lista : nuevaLista;
}

const pintarDetalle = async (seccion, juego) => {

    const personajes = await traerDatosConPromiseAll(juego.listado_personajes);
    seccion.innerHTML = `
        <h3>${juego.titulo}</h3>
        <p><strong>Plataforma: </strong>${juego.plataforma_principal ?? "No especificada"}</p>
        <h4>Personajes:</h4>
        <ul>
            ${personajes.map(p => `<li>${p.nombre}</li>`).join("")}
        </ul>
    `;

};

//Persistenci de la información.
const guardarEnLocalStorage = (clave, lista)=>{
    localStorage.setItem(clave, JSON.stringify(lista));
};
//Cargar los datos de Localstorage.
const cargarDesdeLocalStorage =(clave)=>{
    try{
        const datos = localStorage.getItem(clave);
         return datos ? JSON.parse(datos) : [];
    }catch(error){
        console.warn("Localstorage corrupto, reiniciamos array vacio");
        localStorage.removeItem(clave);
        //mostrarMensaje(erroresSeccion, "Localstorage corrupto, reiniciamos array vacio");
        return [];
    } 
}

export { traerDatos, validarFormulario, mostrarDatos, mostrarMensaje, filtrarPorGenero, pintarDetalle, guardarEnLocalStorage, cargarDesdeLocalStorage};