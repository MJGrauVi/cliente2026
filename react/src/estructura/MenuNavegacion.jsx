import "./MenuNavegacion.css";
import React from 'react'

const MenuNavegacion = ({children}) => {
  return (
    <>
        <div className="menuNavegacion-contenedor">
            {children}
        </div>
    </>
  )
}

export default MenuNavegacion;