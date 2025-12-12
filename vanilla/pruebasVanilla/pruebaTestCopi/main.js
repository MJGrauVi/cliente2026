"use strict";
// Captura de elementos
const form = document.querySelector("#miFormulario");
const msg = document.querySelector("#mensaje");
const btnBorrar = document.querySelector("#borrarDatos");

// Función de validación
function validarFormulario(data) {
  if (data.nombre.length < 3) return "El nombre debe tener al menos 3 caracteres";
  if (!/\S+@\S+\.\S+/.test(data.email)) return "El email no es válido";
  if (data.password.length < 6) return "La contraseña debe tener al menos 6 caracteres";
  return null; // sin errores
}

// Función para consumir API con async/await (GET)
const consumirAPI = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) throw new Error("Error en la petición");
    const result = await response.json();
    console.log("Respuesta de la API:", result);
    return result;
  } catch (error) {
    throw error;
  }
}

// Manejo del submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    nombre: form.nombre.value,
    email: form.email.value,
    password: form.password.value
  };

  const error = validarFormulario(data);
  if (error) {
    msg.textContent = error;
    msg.className = ""; // reset clases
    return;
  }

  try {
    await consumirAPI();
    msg.textContent = "Datos validados y API consultada con éxito ✅";
    msg.className = "exito";
    localStorage.setItem("formData", JSON.stringify(data));
    console.log(`Los datos son ${data}`);
    form.reset(); // limpiar formulario tras éxito
  } catch {
    msg.textContent = "Error al consultar la API ❌";
    msg.className = "";
  }
});

// Precarga desde localStorage al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("formData");
  if (saved) {
    const data = JSON.parse(saved);
    form.nombre.value = data.nombre;
    form.email.value = data.email;
    form.password.value = data.password;
    console.log("Datos cargados desde localStorage:", data);
  }
});

// Botón para borrar datos guardados
btnBorrar.addEventListener("click", () => {
  localStorage.removeItem("formData");
  msg.textContent = "Datos borrados de localStorage 🗑️";
  msg.className = "";
  form.reset();
});
