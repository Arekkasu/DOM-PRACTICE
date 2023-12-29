import hamburgerMenu from "./doms/hamburguer.js";

import { digitalClock, alarm } from "./doms/watch.js";

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

})

