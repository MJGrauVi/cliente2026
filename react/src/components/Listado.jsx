import React, { useState } from "react";
import "./Listado.css";

const Listado = () => {
    const [numeros, setNumeros] = useState([]);

    // Generar número aleatorio entre 1 y 100 sin repetir
    const generarNumero = () => {
        if (numeros.length >= 100) return; // Evita bucle infinito
        let nuevoNumero;
        do {
            nuevoNumero = Math.floor(Math.random() * 100) + 1;
        } while (numeros.includes(nuevoNumero));
        setNumeros([...numeros, nuevoNumero]);
    };

    // Eliminar todos los números
    const eliminarNumeros = () => setNumeros([]);

    return (
        <div className="listado-container">
            <h2>Listado de Números</h2>
            <div>
                {numeros.length > 0 ? (
                    <ul>
                        {numeros.map((num, index) => (
                            <li key={index}>{num}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay números generados aún.</p>
                )}
            </div>
            <div className="listado-botones">
                <button onClick={generarNumero}>Generar</button>
                <button onClick={eliminarNumeros}>Eliminar</button>
            </div>
        </div>
    );
};

export default Listado;