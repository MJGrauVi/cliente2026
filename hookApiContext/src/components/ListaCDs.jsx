// src/components/ListaCDs.jsx

import useCDs from "../hooks/useCDs.js";
import Spinner from "./Spinner.jsx";

const ListaCDs = () => {
  const { cd, cargando, error } = useCDs();

  if (cargando) return <Spinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Listado de CDs</h2>
      <ul>
        {cd.map((item) => (
          <li key={item.id}>
            <strong>{item.nombreDisco}</strong> — {item.grupo} ({item.lanzamiento})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCDs;
