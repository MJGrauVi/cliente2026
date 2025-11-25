import React, { useState } from "react";
import "./Disco.css";

/**
 * Componente Disco
 * Muestra la información de un disco individual
 * Al hacer clic muestra/oculta la información completa
 */
const Disco = ({ disco, onEliminar }) => {
  const [mostrarCompleto, setMostrarCompleto] = useState(false);

  /**
   * Alterna la visualización de información completa
   */
  const alternarInformacion = () => {
    setMostrarCompleto(!mostrarCompleto);
  };

  /**
   * Maneja la eliminación del disco
   */
  const manejarEliminar = (evento) => {
    evento.stopPropagation(); // Evitar que se active el click del contenedor
    evento.preventDefault(); // Evitar recarga de página
    onEliminar(disco.id);
    console.log(`Disco "${disco.nombre}" eliminado.`);
  };

  return (
    <div
      className={`disco-item ${mostrarCompleto ? "disco-expandido" : ""}`}
      onClick={alternarInformacion}
    >
      <div className="disco-resumen">
        {/* Imagen de carátula */}
        <div className="disco-imagen">
          {disco.caratula ? (
            <img src={disco.caratula} alt={disco.nombre} />
          ) : (
            <div className="disco-sin-imagen">Sin imagen</div>
          )}
        </div>

        {/* Información básica */}
        <div className="disco-info-basica">
          <h3 className="disco-nombre">{disco.nombre}</h3>
          <p className="disco-grupo">{disco.grupo}</p>
          <p className="disco-genero">{disco.genero}</p>
          <p className="disco-estado">
            {disco.prestado ? (
              <span className="prestado">Prestado</span>
            ) : (
              <span className="disponible">Disponible</span>
            )}
          </p>
        </div>

        {/* Botón eliminar */}
        <input
          type="button"
          className="boton-eliminar"
          onClick={manejarEliminar}
          value="Eliminar"
          title="Eliminar disco"
        />
      </div>

      {/* Información completa (se muestra al hacer clic) */}
      {mostrarCompleto && (
        <div className="disco-informacion-completa">
          <div className="disco-detalle">
            <p>
              <strong>Año de publicación:</strong> {disco.anio}
            </p>
            <p>
              <strong>Localización:</strong> {disco.localizacion}
            </p>
            <p>
              <strong>Estado:</strong>{" "}
              {disco.prestado ? (
                <span className="prestado">Prestado</span>
              ) : (
                <span className="disponible">Disponible</span>
              )}
            </p>
            {disco.caratula && (
              <div className="disco-imagen-completa">
                <img src={disco.caratula} alt={disco.nombre} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Disco;
