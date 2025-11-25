import React, { useState, useEffect } from "react";
import "./ListadoDiscos.css";
import Disco from "./Disco.jsx";
import MensajeTemporal from "./MensajeTemporal.jsx";
import {
  cargarDiscosDesdeLocalStorage,
  guardarDiscosEnLocalStorage,
} from "../biblioteca/funciones.js";

/*---Muestra un listado de discos con funcion de filtrado------------------*/
const ListadoDiscos = () => {
  // Estado para almacenar todos los discos.
  const [discos, setDiscos] = useState([]);


  const [discosFiltrados, setDiscosFiltrados] = useState([]);

  // Estado para el texto de filtrado
  const [textoFiltro, setTextoFiltro] = useState("");

  // Estado para el mensaje de eliminación
  const [mensajeEliminado, setMensajeEliminado] = useState("");

  /*-----Carga los discos desde localStorage al montar el componente--------------*/
  useEffect(() => {
    const discosCargados = cargarDiscosDesdeLocalStorage();
    setDiscos(discosCargados);
    setDiscosFiltrados(discosCargados);
  }, []);

  /*Filtra los discos según el texto introducido y busca según en nombre, grupo y género
   */
  useEffect(() => {
    if (!textoFiltro.trim()) {
      setDiscosFiltrados(discos);
    } else {
      const textoBusqueda = textoFiltro.toLowerCase().trim();
      const filtrados = discos.filter(
        (disco) =>
          disco.nombre.toLowerCase().includes(textoBusqueda) ||
          disco.grupo.toLowerCase().includes(textoBusqueda) ||
          disco.genero.toLowerCase().includes(textoBusqueda)
      );
      setDiscosFiltrados(filtrados);
    }
  }, [textoFiltro, discos]);

  /**
   * Maneja el cambio en el input de filtrado
   * @param {Event} evento - Evento del input
   */
  const manejarCambioFiltro = (evento) => {
    setTextoFiltro(evento.target.value);
  };

  /**
   * Limpia el filtro y restaura el listado completo
   */
  const limpiarFiltro = () => {
    setTextoFiltro("");
  };

  /**
   * Elimina un disco de la colección
   * @param {string} idDisco - ID del disco a eliminar
   */
  const eliminarDisco = (idDisco) => {
    const discoEliminado = discos.find((disco) => disco.id === idDisco);
    const discosActualizados = discos.filter((disco) => disco.id !== idDisco);
    setDiscos(discosActualizados);
    guardarDiscosEnLocalStorage(discosActualizados);

    // Mostrar mensaje de eliminación
    setMensajeEliminado(`Disco "${discoEliminado?.nombre || ""}" eliminado.`);

    console.log("Disco eliminado. Total de discos:", discosActualizados.length);
  };

  /**
   * Oculta el mensaje después de 3 segundos
   */
  useEffect(() => {
    if (mensajeEliminado) {
      const temporizador = setTimeout(() => {
        setMensajeEliminado("");
      }, 3000);

      return () => clearTimeout(temporizador);
    }
  }, [mensajeEliminado]);

  return (
    <div className="contenedor-listado-discos">
      <h2>Listado de Discos</h2>

      <MensajeTemporal texto={mensajeEliminado} />

      {/* Controles de filtrado */}
      <div className="controles-filtrado">
        <div className="campo-filtro">
          <label htmlFor="filtro-texto">Filtrar discos:</label>
          <input
            type="text"
            id="filtro-texto"
            value={textoFiltro}
            onChange={manejarCambioFiltro}
            className="input-filtro"
            placeholder="Buscar por nombre, grupo o género..."
          />
        </div>
        <button
          type="button"
          onClick={limpiarFiltro}
          className="boton-limpiar"
          disabled={!textoFiltro.trim()}
        >
          Limpiar
        </button>
      </div>

      {/* plantilla para información del listado */}
      <div className="info-listado">
        <p>
          Mostrando {discosFiltrados.length} de {discos.length} discos
          {textoFiltro.trim() && ` (filtrados por "${textoFiltro}")`}
        </p>
      </div>

      {/* Listado de discos */}
      {discosFiltrados.length > 0 ? (
        <div className="lista-discos">
          {discosFiltrados.map((disco) => (
            <Disco key={disco.id} disco={disco} onEliminar={eliminarDisco} />
          ))}
        </div>
      ) : (
        <div className="sin-discos">
          {discos.length === 0 ? (
            <p>
              No hay discos en la colección. Añade uno desde "Insertar disco".
            </p>
          ) : (
            <p>No se encontraron discos que coincidan con el filtro.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ListadoDiscos;
