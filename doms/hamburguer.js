export default function hamburgerMenu(panelBtn, panel, menuLink) {

  const d = document;

//El parametro e es el taget que se envia con el index que tiene
//documentcontenloaded
  d.addEventListener("click", (e) => {

  //Esta operacion OR es para que
  //si presiona todo lo que esta dentro de lo que es
  //panelBTN osea (.panel-btn) tome evento
   if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
    
    //toggle para que se active la clase
    d.querySelector(panel).classList.toggle("is-active");
    d.querySelector(panelBtn).classList.toggle("is-active"); 

    }

  if(e.target.matches(menuLink)) {


    //No se usa toggle sino que se usa remove para que tenga
    //mejor manera y no se quede en palanca las clases
    d.querySelector(panel).classList.remove("is-active");
    d.querySelector(panelBtn).classList.remove("is-active");

    }

  })


}
