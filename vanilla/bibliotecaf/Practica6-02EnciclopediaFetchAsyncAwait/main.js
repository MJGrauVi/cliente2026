// Variable global donde guardaremos las películas
let listaPeliculas = [];

// ----------- 1. INICIO ------------
init();

function init() {
    fetchPeliculas();
}

// ----------- 2. FUNCIÓN PARA TRAER DATOS ------------
function fetchPeliculas() {
    fetch("https://swapi.info/api/films")
        .then(res => res.json())
        .then(data => {
            // Algunas APIs devuelven info en data.results
            listaPeliculas = data.results || data;

            console.log("Datos recibidos:", listaPeliculas); // Para inspeccionar

            renderPeliculas(listaPeliculas);
        })
        .catch(error => console.log("Error:", error));
}

// ----------- 3. FUNCIÓN PARA MOSTRAR LISTA ------------
function renderPeliculas(listaPeliculas) {

    const ul = document.getElementById("listaPeliculas");
    ul.innerHTML = ""; // Limpiar

    listaPeliculas.forEach(pelicula => {

        // Crear UUID único
        const uuid = crypto.randomUUID();

        // Crear <li>
        const li = document.createElement("li");
        li.textContent = `${uuid} - ${pelicula.title}`;

        // Evento click → al pulsar muestra los detalles
        li.addEventListener("click", function () {
            mostrarDetalles(pelicula);
        });

        // Añadir al <ul>
        ul.appendChild(li);
    });
}

// ----------- 4. FUNCIÓN PARA MOSTRAR DETALLES ------------
function mostrarDetalles(pelicula) {

    const contenedor = document.getElementById("detalles");

    const fechaEuro = formatearFechaEuropea(pelicula.release_date);

    contenedor.innerHTML = `
        <p><strong>Título:</strong> ${pelicula.title}</p>
        <p><strong>Director:</strong> ${pelicula.director}</p>
        <p><strong>Productor:</strong> ${pelicula.producer}</p>
        <p><strong>Fecha de lanzamiento:</strong> ${fechaEuro}</p>
        <p><strong>Sinopsis:</strong> ${pelicula.opening_crawl}</p>
    `;
}

// ----------- 5. FUNCIÓN PARA FORMATEAR FECHA ------------
function formatearFechaEuropea(fechaISO) {
    const d = new Date(fechaISO);
    return d.toLocaleDateString("es-ES");
}
