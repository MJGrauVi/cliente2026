"use strict";

// Estado de la aplicación
let videojuegos = [];

// Actualizar estado
const setVideojuegos = (nuevosVideoJuegos) => {
  videojuegos = nuevosVideoJuegos;
};

// Validaciones
const validarFormulario = ({ titulo, desarrollador, genero }) => {
  let errores = [];
  const regExp = /^[A-Za-z\s]{4,}$/;

  if (!titulo || !regExp.test(titulo)) {
    errores.push("El título es obligatorio y debe contener al menos 4 caracteres.");
  }
  if (!desarrollador || !regExp.test(desarrollador)) {
    errores.push("El desarrollador es obligatorio y debe contener al menos 4 caracteres.");
  }
  if (!genero) {
    errores.push("El género es obligatorio.");
  }
  return errores;
};

// Local Storage
const guardarVJEnLocalStorage = (lista) => {
  try{
  localStorage.setItem("videojuegos", JSON.stringify(lista));
  return true; //se guardó correctamente.
  }catch(error){
    console.error("Error al guardar: ", error);
    return false;//Hubo algún problema.
  }
};

const cargarVJDesdeLocalStorage = () => {
  const datos = localStorage.getItem("videojuegos");
  try {
    return datos ? JSON.parse(datos) : [];
  } catch (e) {
    console.warn("Local Storage corrupto, reiniciamos array vacío.");
    localStorage.removeItem("videojuegos");
    return [];
  }
};

// Mostrar tabla videojuegos
const renderTabla = (seccionTablaBody, lista) => {
  seccionTablaBody.innerHTML = "";

  lista.forEach((vj) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${vj.titulo}</td>
      <td>${vj.desarrollador}</td>
      <td>${vj.genero}</td>
      <td><button class="btn-eliminar" data-id="${vj.id}">Eliminar</button></td>
      <td><button class="btn-ver" data-id="${vj.id}">Ver</button></td>
    `;
    seccionTablaBody.appendChild(fila);
  });
};

//Mostrar detalle.

// Función para mostrar detalle de un videojuego 
function mostrarDetalle(vj) { 
const detallesSeccion = document.getElementById("detalleSeccion");    
    detallesSeccion.innerHTML = 
    ` <h3>${vj.titulo}</h3> 
    <p><strong>Plataforma principal:</strong> ${vj.plataforma_principal || "No especificada"}</p> 
    <p><strong>Personajes:</strong></p> 
    <ul> ${ vj.listado_personajes && vj.listado_personajes.length 
        ? vj.listado_personajes.map(p => `<li>${p}</li>`).join("") 
        : "<li>No hay personajes registrados</li>" } 
    </ul> `; 
    }

// Mostrar errores
const mostrarErrores = (erroresSeccion, errores) => {
  erroresSeccion.innerHTML = "";

  if (!errores.length) {
    erroresSeccion.classList.add("oculto");
  } else {
    erroresSeccion.classList.remove("oculto");
  }

  erroresSeccion.innerHTML = `<ul>${errores.map((error) => `<li>${error}</li>`).join("")}</ul>`;
};



// Exportar funciones
export {
  videojuegos,
  setVideojuegos,
  validarFormulario,
  guardarVJEnLocalStorage,
  cargarVJDesdeLocalStorage,
  renderTabla,
  mostrarDetalle,
  mostrarErrores,
};
