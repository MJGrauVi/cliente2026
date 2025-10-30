import Pelicula from "./Pelicula.jsx";
import Contenedor from "./Contenedor.jsx";
import archivoPeliculas from "../assets/archivoPelis2.json";

const Peliculas = () => {
  //Inicializo el estado con un array vacio, luego cargo con setPeliculas el json.

  /*const [peliculas, setPeliculas] = useState([]);
     if (peliculas.length === 0) {
      setPeliculas(archivoPelis.peliculas);
    } */
  //Probando el comportamiento con un array vacio generaba un bucle infinito, al intentar cargar siempre ese mismo array vacio
  //por lo que he cargado directamente en una constante. Puedes comprobarlo cambiando archivoPelis2 por archivoPelisVacio

  //Se puede cargar directamente y no es necesario estado.
  const archivoPelis = archivoPeliculas.peliculas;

  return (
    <Contenedor>
      {/* Ternaria para mostrar el contenido si lo hay, sino, muestra un mensaje informando al usuario. */}
      {archivoPelis.length !== 0 ? (
        archivoPelis.map((peli, index) => (
          <Pelicula key={index} datos={peli}>
            {peli.resumen}
          </Pelicula>
        ))
      ) : (
        <h2>¡No hay películas, el archivo está vacío!</h2>
      )}
    </Contenedor>
  );
};

export default Peliculas;
