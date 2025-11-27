

    // Referencia al contenedor
    const contenedor = document.getElementById("feos");

    // Función auxiliar para mostrar un mensaje de error en pantalla
    function mostrarError(mensaje) {
      contenedor.innerHTML = `<p class="error">Error: ${escapeHtml(mensaje)}</p>`;
    }

    // Escape muy básico para evitar inyección al insertar texto
    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }
    const contenedorGente = document.getElementById("gentuza");



    function mostrarErrorGente(msg) {
      contenedorGente.innerHTML = `<p class="error">Error: ${escapeHtml(msg)}</p>`;
    }

    export{mostrarError, escapeHtml, contenedor, contenedorGente, mostrarErrorGente}