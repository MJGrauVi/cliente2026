import "./App.css";
import Contenedor from "./components/Contenedor.jsx";
import Pelicula from "./components/Pelicula.jsx";
import Interprete from "./components/Interprete.jsx/";

const App = () => {
  return (
    <div>
      <Contenedor>
        <Pelicula
          titulo="Sisu"
          director="Jalmari Helander"
          cartel="https://tse3.mm.bing.net/th/id/OIP.zG3sRXu9Aia77F8VIuYKNwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
        >
          En los últimos días de la Segunda Guerra Mundial, un minero encuentra
          oro y lucha contra un grupo de nazis para conservarlo.
        </Pelicula>

        <Interprete
          nombre="Jorma Tommila"
          foto="https://healthyceleb.com/wp-content/uploads/2023/05/Jorma-Tommila-as-seen-in-an-Instagram-Post-in-March-2019-2.jpg"
        >
          Actor principal de la película desarrolla el papel de Aatami, conocido
          por su intensidad interpretativa.
        </Interprete>
        <Interprete
          nombre="Aksel Hennie"
          foto="https://es.web.img3.acsta.net/r_1024_576/pictures/14/08/21/16/35/073768.jpg"
        >
          Actor secundario es esta película. Es más conocido a nivel
          internacional por su rol en la película de Ridley Scott de 2015 The
          Martian.
        </Interprete>
        <Interprete
          nombre="Mimosa Willamo"
          foto="https://es.web.img3.acsta.net/r_1024_576/pictures/17/06/15/14/34/086685.jpg"
        >
          Actriz, desarrolla el papel de Aino en esta película, conocido por su
          intensidad interpretativa.
        </Interprete>
      </Contenedor>
    </div>
  );
};

export default App;
