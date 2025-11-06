"use strict";
/* Ejercicio 2 - Pestañas
Realiza un sistema de pestañas compuesto por dos <div>:
• el primero contendrá las pestañas (mínimo tres) que mostrarán un nombre (elige la
etiqueta HTML que prefieras para ello), 
• el segundo contendrá la información de cada pestaña (elige la etiqueta HTML que
prefieras para esta tarea).
Al pulsar sobre cada pestaña del primer <div> se mostrará la información relacionada del
segundo <div>. Su relación será secuencial: la primera pestaña mostrará el primer contenido,
la segunda pestaña el segundo contenido… No se podrá utilizar el atributo id de los
elementos HTML.
Aplica un poco de tu estilo a las pestañas a través de CSS. */

function configurarTabs(contenedorTabs, contenedorContenido) {
  const tabsContenedor = document.querySelector(contenedorTabs); //Guardo la referencia al contenedor porque la voy a usar después para el evento.
  const tabs = tabsContenedor.querySelectorAll(".tab");
  const contenido = document.querySelectorAll(
    `${contenedorContenido} .contenido`
  ); //Guardo la referencia a los nodos .contenido que hay en su contenedor.

  if (tabs.length !== contenido.length) {
    console.log("El número de pestañas y contenidos no coincide.");
    return;
  }

  tabsContenedor.addEventListener(
    "click",
    (event) => {
      //Aplico el evento al contenedor.
      if (!event.target.classList.contains("tab")) return;

      const index = Array.from(tabs).indexOf(event.target); //Guardamos el índice del elemento si lo hay, sino -1.

      tabs.forEach((tab) => tab.classList.remove("active"));
      contenido.forEach((content) => content.classList.remove("visible"));

      if (index !== -1) {
        //Comprobamos que hay elementos, si es así, le aplicamos la clase activo y visible a su respectivo contenido.
        tabs[index].classList.add("active");
        contenido[index].classList.add("visible");
      }
    },
    false
  ); //Flujo a false, se puede omitir ya que es el que aplica por defecto.
}
export default configurarTabs;
