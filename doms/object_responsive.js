const d = document;
const w = window;

export default function responsiveMedia(id, mediaQuery, mobileContent, dektopContent){

  /* MEDIAQUERY ES DONDE ESTA ESTABLECIDO EL MINIMO DE PIXELES PARA QUE SE CONVIERTA EN MOBILE 1024PX*/
  let breakpoint = w.matchMedia(mediaQuery)

  const responsive = (e) => {
    
    if (e.matches){
      d.getElementById(id).innerHTML = dektopContent;
    }else{
      d.getElementById(id).innerHTML = mobileContent;
    }
    
    //console.log("MQ", e.matches, breakpoint)
  };


  breakpoint.addEventListener("change", responsive)
  responsive(breakpoint)


}
