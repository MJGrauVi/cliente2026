import React, { useState } from "react";
 import ValorEstado from "./ValorEstado.jsx";
  

function FormularioControlado() {
  // Crear un estado inicial (objeto con valores por defecto para evitar errores al dibujar).
  const valoresIniciales = {
    nombre: "",
    apellidos: "",
    correo: "",
    desestructuro: "",
    condiciones: "",
    genero: "",
    rugby: "",
    formula1: "",
    videojuegos: "",
  };
  // Estado para los valores del discos.
  const [discos, setDiscos] = useState(valoresIniciales);

  const actualizarDato = (evento) => {
    // Se obtienen los datos necesarios de evento que lanza esta función: el input.
    // Dos maneras de hacerlo (son equivalentes):
    // La primera indigna de uno de mis discentes (comentada para evitar errores):
    /* const name = evento.target.name;
    const value = evento.target.value; */
    // La segunda de forma profesional:
    const { name, value } = evento.target;
    // Se asignan al estado.
    setDiscos({ ...discos, [name]: value });
  };

  // La cosa empieza a complicarse con los elementos checkbox,
  // por eso se hace una función especial para este elemento.
  const actualizarDatoCheck = (evento) => {
    const { name } = evento.target;
    const value = discos[name] === "" ? evento.target.value : "";
    setDiscos({ ...discos, [name]: value });
  };

  return (
    <>
      <h2>Formulario Controlado</h2>
      <div className="App-header">
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input
            name="nombre"
            className="conEstilo"
            type="text"
            placeholder="Escribe tu nombre."
            // Se asigna el valor del estado (que es un objeto).
            value={discos.nombre || ""}
            // Se asigna el evento que va a manejar ese dato.
            onChange={(evento) => {
              actualizarDato(evento);
            }}
          />
          <br />
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            name="apellidos"
            className="conEstilo"
            type="text"
            placeholder="Escribe tus apellidos."
            value={discos.apellidos || ""}
            onChange={(evento) => {
              actualizarDato(evento);
            }}
          />
          <br />
          <label htmlFor="modulos">Correo:</label>
          <input
            name="correo"
            className="conEstilo"
            type="text"
            placeholder="Escribe tu correo electrónico."
            value={discos.correo || ""}
            onChange={(evento) => {
              actualizarDato(evento);
            }}
          />
          <br />
          <h3>Acceso a un seleccionable</h3>
          <select
            name="genero"
            className="conEstilo"
            onChange={(evento) => {
              actualizarDato(evento);
            }}
          >
            <option value="">No seleccionado</option>
            <option value="femenino">Femenino</option>
            <option value="masculino">Masculino</option>
            <option value="no definido">No definido</option>
            <option value="otro">Otro</option>
          </select>
          <h3>Acceso a un radiobutton</h3>
          <label>
            <input
              name="desestructuro"
              type="radio"
              // El valor no se obtiene esta vez desde el estado,
              // ya que el valor será seleccionado (valores finitos).
              value="sí"
              // Checked sólo admite un booleano. Se obtiene del
              // resultado de comprobar si su valor ("sí" en este caso)
              // coicide con el valor del estado.
              checked={discos.desestructuro === "sí"}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            />
            Sé utilizar desestructuración de objetos.
          </label>
          <br />
          <label>
            <input
              name="desestructuro"
              type="radio"
              value="no"
              checked={discos.desestructuro === "no"}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            />
            No sé utilizar desestructuración de objetos.
          </label>
          <br />
          <label>
            <input
              name="desestructuro"
              type="radio"
              value="a veces"
              checked={discos.desestructuro === "a veces"}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            />
            Sólo cuando quiero.
          </label>
          <h3>Acceso a un único checkbox</h3>
          <label>
            <input
              name="condiciones"
              type="checkbox"
              id="topping"
              value="aceptadas"
              // Opción para una cadena de texto.
              // Si la comparación es correcta, se marca el checkbox.
              checked={discos.condiciones === "aceptadas"}
              // Opción para un booleano.
              // Versión reducida: si contiene datos es verdadero, si no, es falso.
              //checked={discos.condiciones}
              onChange={(evento) => {
                actualizarDatoCheck(evento);
              }}
            />
            Acepto las condiciones de uso de DWC.
          </label>

          <h3>Acceso a múltiples checkbox</h3>
          <label>
            <input
              name="rugby"
              type="checkbox"
              id="rugby"
              value="rugby"
              checked={discos.rugby}
              onChange={(evento) => {
                actualizarDatoCheck(evento);
              }}
            />
            Rugby
          </label>
          <label>
            <input
              name="formula1"
              type="checkbox"
              id="formula1"
              value="formula1"
              checked={discos.formula1}
              onChange={(evento) => {
                actualizarDatoCheck(evento);
              }}
            />
            Fórmula 1
          </label>
          <label>
            <input
              name="videojuegos"
              type="checkbox"
              id="videojuegos"
              value="videojuegos"
              checked={discos.videojuegos}
              onChange={(evento) => {
                actualizarDatoCheck(evento);
              }}
            />
            Videojuegos
          </label>
          <br />
          <button
            onClick={(evento) => {
              // Un input <button> dentro de una etiqueta <form> genera por defecto en evento
              // omSubmit recargando la página (no queremos eso). Para solucionarlo se puede
              // utilizar un <input type='button' /> o evitar el comportamiento por defecto
              // con evento.preventDefault();
              evento.preventDefault();
              setDiscos(valoresIniciales);
            }}
          >
            Borrar formulario.
          </button>
          <input
            type="button"
            value="Borrar Formulario"
            onClick={() => {
              setDiscos(valoresIniciales);
            }}
          />
        </form>

        <br />
        {/* Imprimir el estado con formato JSON (Objeto) para comprobar. */}
        <ValorEstado estado={discos} titulo="discos completo" />
      </div>
    </>
  );
}

export default FormularioControlado;
