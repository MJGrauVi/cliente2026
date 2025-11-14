"use strict";

window.onload = ()=>{

    //Tomo referencia con el nombre del formularo.
const form = document.forms.formDisco;
const listado = document.getElementById('listado');
const erroresDiv = document.getElementById('errores');

// Array para almacenar discos.
let discos = [];

// Funciones de validación
function validarNombre(nombre) {
    if (!nombre || nombre.trim().length < 5) return false;
    return true;
}

function validarGrupoSolista(valor) {
    if (!valor || valor.trim().length < 5) return false;
    return true;
}

function validarAnio(anio) {
    return /^\d{4}$/.test(anio);
}

function validarGeneroMusical() {
    const generos = form.querySelectorAll('input[name="generoMusical"]:checked');
    return generos.length > 0;
}

function validarLocalizacion(codigo) {
    return /^ES-\d{3}[A-Z]{2}$/.test(codigo);
}

// Función para destacar errores
function marcarError(input, mensaje) {
    input.classList.add('error');
    return mensaje;
}

function limpiarErrores() {
    erroresDiv.innerHTML = '';
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => input.classList.remove('error'));
}

// Función para guardar disco
function guardarDisco() {
    limpiarErrores();
    let errores = [];

    const nombre = form.nombre.value;
    const caratula = form.caratula.value;
    const grupoSolistaRadio = form.grupoSolista.value;
    const anio = form.anio.value;
    const codigo = form.codigo.value;
    const prestado = form.prestado.checked;

    // Validaciones
    if (!validarNombre(nombre)) errores.push(marcarError(form.nombre, 'El nombre debe tener al menos 5 caracteres.'));
    if (!validarGrupoSolista(grupoSolistaRadio)) {
        const radios = form.querySelectorAll('input[name="grupoSolista"]');
        radios.forEach(r => r.classList.add('error'));
        errores.push('Selecciona grupo musical o solista válido (mínimo 5 caracteres).');
    }
    if (!validarAnio(anio)) errores.push(marcarError(form.anio, 'El año debe tener 4 dígitos numéricos.'));
    if (!validarGeneroMusical()) {
        const checks = form.querySelectorAll('input[name="generoMusical"]');
        checks.forEach(c => c.classList.add('error'));
        errores.push('Debes seleccionar al menos un género musical.');
    }
    if (!validarLocalizacion(codigo)) errores.push(marcarError(form.codigo, 'La localización debe tener el formato ES-001AA.'));

    // Mostrar errores o añadir disco
    if (errores.length > 0) {
        erroresDiv.innerHTML = errores.join('<br>');
        return;
    }

    // Crear objeto disco y añadirlo al array
    const generos = Array.from(form.querySelectorAll('input[name="generoMusical"]:checked')).map(g => g.value);

    const disco = {
        nombre,
        caratula,
        tipo: grupoSolistaRadio,
        anio,
        genero: generos,
        codigo,
        prestado
    };

    discos.push(disco);
    form.reset();
    listadoDiscos();
}

// Función para mostrar discos
function listadoDiscos() {
    listado.innerHTML = '';
    discos.forEach(d => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${d.nombre}</strong> (${d.anio}) - ${d.tipo}<br>
            Género: ${d.genero.join(', ')}<br>
            Localización: ${d.codigo} - Prestado: ${d.prestado ? 'Sí' : 'No'}<br>
            <img src="${d.caratula}" alt="${d.nombre}" width="100"/>
        `;
        listado.appendChild(li);
    });
}

// Eventos de los botones
form.guardar.addEventListener('click', guardarDisco);
form.mostrar.addEventListener('click', listadoDiscos);


}//fin window.onload