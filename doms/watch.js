const d = document;



// clock -> div con id = reloj
// btnPlay -> boton id = activar-reloj
// btnStop -> boton id = desactivar-reloj

export function digitalClock(clock, btnPlay, btnStop){
  
  // declaracion de variable que sera usada
  // para el establecer la hora
  let clockTempo;

  d.addEventListener("click", e => {


    
    if(e.target.matches(btnPlay)){
    
    //Deshabilitar el boton para evitar interacciones demas
    // en el website
    e.target.disabled = true;
    console.log(d.querySelector(clock)) 
    // Se almacena el intervalo usando la variable clockTempo
      // donde esta tendra su funcion de proyectarse en el HTML
    clockTempo = setInterval( () => {

        //Almacenando Hora
        let clockHour = new Date().toLocaleTimeString();

        // Agregando el texto para el reloj usando innerhtml
        // y este se actualizara debido al intervalo
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`


     }, 1000);
    
    }



    if(e.target.matches(btnStop)){
      
      //Se termina el intervalo

      clearInterval(clockTempo)

      // AL establecer hare que todo el contenido agregado al div
      // sera reemplazdo a vacio y se  eleminara con poner null
      d.querySelector(clock).innerHTML = null;


      //reestablecer al boton
      d.querySelector(btnPlay).disabled = false;
      
    }
    



  })



}


export function alarm(sound, btnPlay, btnStop){

  // Variable para el tiempo que sera un timeout
  let alarmaTempo;

  // Se creara una etiqueta interactiva html que se usara para el sonido
  // al usarlo de esta manera hara que se comunique con la API
  // de poder usar audios y tener un control interactivo
  const $alarm = d.createElement("audio")
  
  //Agregandole la ruta al audios
  $alarm.src = sound


  d.addEventListener("click", e => {
    
    if(e.target.matches(btnPlay)){
      
      e.target.disabled = true;
      alarmaTempo = setTimeout(() => { 

        $alarm.play()
      


      }, 500)


    }
    

    if(e.target.matches(btnStop)){
    
    clearTimeout(alarmaTempo)
    
    //En audio no existe la propiedad STOP
    //Por lo cual se debe primero poner la propiedad pause

    $alarm.pause()

    // y luego con el metodo currentTime se resetea el tiempo 
    
    $alarm.currentTime = 0 // 0 segundo cero
  
    d.querySelector(btnPlay).disabled = false

    }

    })

}
