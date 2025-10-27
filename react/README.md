# Proyecto DWC con React - Vite

## Crear una interfaz con rutas para una aplicación de gestión de películas:
 ### Pasos a seguir:
 1-Crear los componentes que conformarán la estructura de las web:
    - Cabecera.
    - Menú.
    - Contenido.
    - pie.
 ### 2-Crea los componentes para las páginas que se cargarán en la aplicación y que se mostrarán en el componente Contenido:
    -Inicio, que mostrará el contenido inicial.
    -Peliculas, mostrará el listado de películascon la siguiente información: Título, cartelera en miniatura, y el año de exibición.
    -Interpretes, mostrará información de actores y actrices.
    -Galería, con las imágenes de las carteleras de la películas, que contendrá un Submenú con 3 opciones para filtrar la cartelera por título, interprete y director(sin funcionalidad solo mensaje de texto).
    -Acercade, con la información de la aplicación, versión, creador y fecha de modificación.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
