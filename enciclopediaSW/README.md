# Enciclopedia Star Wars - Aplicación React

Aplicación web para explorar películas y personajes de Star Wars usando la [SWAPI](https://swapi.dev/). Permite seleccionar películas, ver el elenco, consultar detalles de cada actor y, si corresponde, los vehículos y naves que pilota.

---

## Estructura del proyecto

src/
├─ components/
│ ├─ ListaPeliculas.jsx
│ ├─ ListaActores.jsx
│ ├─ ActorDetalle.jsx
│ ├─ DatosPelicula.jsx
│ ├─ Elenco.jsx
│ ├─ PeliculaInfo.jsx
│ └─ Resumen.jsx
├─ context/
│ ├─ ProveedorPelicula.jsx
│ └─ ProveedorActor.jsx
├─ funciones/
│ └─ funciones.js
├─ App.jsx
└─ main.jsx

- `context/`: Maneja estados globales de película y actor mediante Context API.  
- `components/`: Componentes funcionales de la aplicación.  
- `funciones/funciones.js`: Funciones reutilizables para fetch y manejo de datos.

---

## Requisitos del entorno

- Node.js ≥ 18  
- npm ≥ 9 o yarn ≥ 1.22  
- Navegador moderno (Chrome, Edge, Firefox)  

---

## Instalación

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
````

```bash
npm install
# o con yarn
# yarn

npm run dev

````
```bash
## Build para producción
npm run build
