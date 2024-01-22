import hamburgerMenu from "./doms/hamburguer.js";

import { digitalClock, alarm } from "./doms/watch.js";

import { moveBall, shortcuts } from "./doms/teclado.js";


import cowntdown from "./doms/cowntdown.js";
import scrollTopButton from "./doms/scrollbtn.js";
import darkTheme from "./doms/Dark&Light.js";
import responsiveMedia from "./doms/object_responsive.js";
import responsiveTester from "./doms/test-responsive.js";


const d = document;


/*
 *
 * Al usar DOMcontenLoaded permite que cargue primero el html
 * y ahi si se pueda usar la funcion, al tener document como
 * tarjeta de activarse al escuchar, este automaticamente al asignarle
 * los parametros de la parte de hamburguesa hara que funcione
 * esta funcion
 *
 * */

d.addEventListener("DOMContentLoaded", (e) => {

  // Estos son los parametros, especialmente CLASES CSS
  // que se mandan para que funcione el aside que es el panel
  // donde en la parte menu este enviara todos los links osea
  // las etiquetas a
  hamburgerMenu(".panel-btn", ".panel", ".menu a");



  //Los parametros son las ID que se pusieron en los 
  digitalClock("#reloj","#activar-reloj","#desactivar-reloj")

  
  alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma")


  cowntdown(
    "cowntdown", 
    "Jan 13, 2024 13:30:00",
    "Se cumplio esa vuelta mijo"
  )

  scrollTopButton(".scroll-top-btn")
  
  responsiveMedia(
    "youtube", 
    "(min-width: 1024px)", 
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA">Ver Video</a>`, 
    `<h3>Mi Ambiente de escritorio linux</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/jM95mwLvaq4?si=9f9IBvaeBzIo9Q-L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)

  responsiveMedia(
    "gmaps", 
    "(min-width: 1024px)", 
    `<a href="https://maps.app.goo.gl/NqUHR9udRrzRYMSC6">Ver Mapa<a>`, 
    `<h1>Monte Fuji Google Maps</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13015.197494929274!2d138.72736339999997!3d35.36062499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019629a42fdc899%3A0xa6a1fcc916f3a4df!2sMonte%20Fuji!5e0!3m2!1ses!2sco!4v1705437098776!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)



  responsiveTester("responsive-tester")
})

//Windwo load espera que cargo todos los estilos y scripts

// PARTE DE LOS EVENTOS addEventListener

//kewydown es cuando uno presiona la tecla

//keyup es cuando uno suelta la tecla despues de presiona

//keypress detecta las veces que se mantiene presionado la tecla

//

d.addEventListener("keydown", e => {


  shortcuts(e)
  moveBall(e, ".ball", ".stage")

})

// Se saca la funcon ya que no puede haber mas de un evento igual

darkTheme(".dark-theme-btn", "dark-mode")
