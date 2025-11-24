import React, { useState } from "react";
import "./FormularioObjetoControl.css";
import Errores from "./Errores.jsx";

function FormularioObjetoControl() {
  // Se crea un estado inicial (objeto con valores por defecto para evitar errores al dibujar).
  const valoresIniciales = {
    nombre: "",
    apellidos: "",
    correo: "",
  };

  const erroresIniciales = [];
  // Estado para los valores del disco.
  const [disco, setdisco] = useState(valoresIniciales);
  // Estado para los errores (en este caso un array de cadenas de texto).
  const [errores, setErrores] = useState(erroresIniciales);

  // Función para actualizar el estado con los datos del evento (ya conocida).
  const actualizarDato = (evento) => {
    const { name, value } = evento.target;
    setdisco({ ...disco, [name]: value });
  };

  // Función que valida el valor de un input.
  const validarDato = (elemento) => {
    // Desestructuración del objeto target (obtenido del evento).
    const { name, value } = elemento;
    // Variable con los errores de cada elemento.
    let erroresElemento = [];
    // Comprobaciones para cada uno de los elementos del formulario.
    // Campo nombre.
    if (name === "nombre") {
      // Se comprueba si tiene algo escrito.
      if (!value.length) {
        erroresElemento = [
          ...erroresElemento,
          `El campo ${name} debe tener un valor.`,
        ];
      }
      // Se comprueba que el valor tenga al menos 5 caracteres máximo 21. /* visto */
      if (!/^[a-zA-Z][a-zA-Z0-9 ]{4,20}$/.test(value))
        erroresElemento = [
          ...erroresElemento,
          `El nombre debe tener entre dos y veinte caracteres y no puede comenzar con un número.`,
        ];
    }
    // Campo año.
    if (name === "anio") {
      // Se comprueba si tiene algo escrito.
      if (!value.length)
        erroresElemento = [
          ...erroresElemento,
          `El campo ${name} debe tener un valor.`,
        ];
      // Se comprueba si cumple los requisitos.
      if (!/^\d{4}$/.test(value))
        erroresElemento = [...erroresElemento, `El año debe tener 4 dígitos.`];
    }
    // Campo correo electrónico.
    if (name === "correo") {
      // Se comprueba si tiene algo escrito.
      if (!value.length)
        erroresElemento = [
          ...erroresElemento,
          `El campo correo electrónico debe tener un valor.`,
        ];
    }
    // Se devuelve el listado de errores (o ninguno).
    return erroresElemento;
  };

  // Función para validar el formulario.
  const validarFormulario = (evento) => {
    // Se accede al elemento <form> que contiene el listado de todos sus elementos (elements).
    const formulario = evento.target.parentNode;
    // Array vacío para guardar todos los errores del formulario.
    let erroresListado = [];
    // Se recorre el formulario comprobando cada elemento.
    for (var i = 0; i < formulario.elements.length - 1; i++) {
      // Validar dato devuelve un array con los errores de ese elemento.
      let erroresElemento = validarDato(formulario.elements[i]);
      // Se comprueba si hay errores o no (aplicando un estilo).
      //erroresElemento.length !== 0
      erroresElemento.length
        ? formulario.elements[i].classList.add("error")
        : formulario.elements[i].classList.remove("error");
      // Se añaden los errores (si existen) de cada elemento a erroresListado.
      erroresListado = [...erroresListado, ...erroresElemento];
    }
    // Se cambia el valor el estado por lo errores producidos.
    setErrores(erroresListado);
    // Se devuelva un boleano para poder realizar una acción tras la comprobación.
    // Si no hay errores se devuelve true.
    return erroresListado.length === 0;
  };

  return (
    <>
      <div id="principal">
        <div>
          <h2>Formularios con control de errores.</h2>
          <form>
            <label htmlFor="nombre">Titulo:</label>
            <input
              name="nombre"
              id="nombre"
              className="conEstilo"
              type="text"
              placeholder="Escribe tu nombre."
              value={disco.nombre}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            />
            <br />

            <h3>Acceso a Grupo o solista</h3>
            <label>
              <input
                name="grupoOsolista"
                id="grupoMusica"
                type="radio"
                // El valor no se obtiene esta vez desde el estado,
                // ya que el valor será seleccionado (valores finitos).
                value="sí"
                // Checked sólo admite un booleano. Se obtiene del
                // resultado de comprobar si su valor ("sí" en este caso)
                // coicide con el valor del estado.
                checked={disco.grupoOsolista === "sí"}
                onChange={(evento) => {
                  actualizarDato(evento);
                }}
              />
              Grupo de música
            </label>
            <br />
            <label>
              <input
                name="grupoOsolista"
                id="solista"
                type="radio"
                value="sí"
                checked={disco.grupoOsolista === "sí"}
                onChange={(evento) => {
                  actualizarDato(evento);
                }}
              />
              Solista
            </label>
            <br />
            <label htmlFor="anio">Año lanzamiento:</label>
            <input
              name="anio"
              id="anio"
              className="conEstilo"
              type="text"
              placeholder="(YYYY)"
              value={disco.anio}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            />
            <br />

            <br />
            <label htmlFor="modulos">Correo:</label>
            <input
              name="correo"
              className="conEstilo"
              type="text"
              placeholder="Escribe tu correo electrónico."
              value={disco.correo}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            />
            <br />
            <input
              type="button"
              value="Enviar datos"
              onClick={(evento) => {
                if (validarFormulario(evento)) {
                  console.log("Envío datos al servidor...");
                }
              }}
            />
          </form>
        </div>
        <div>
          <Errores erroresMostrar={errores} />
        </div>
        {/* Otro enfoque es mostrar el componente <Errores> sólo cuando se produzcan errores (mejor optimización). */}
        {/* <div>{errores.length > 0 && <Errores erroresMostrar={errores} />}</div> */}
      </div>
    </>
  );
}

export default FormularioObjetoControl;
