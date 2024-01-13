

const d = document;

let x=0, 
  y=0;



//COLISIONES Y MOVIMIENTOS

export function moveBall(e, ball, stage){
  
  //Almacenar las variables
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
  //Creacion de limite de pelota y del escenario
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();  

  // RECORDAR QUE EN LA WEB ARRIBA ES NEGATIVO Y ABAJO ES POSITIVO

  switch(e.keyCode){
    
    // 38 --> arriba
    case 38:
      e.preventDefault();
      if(limitsBall.y > limitsStage.y)y--;
      break;
    // 38 --> abajo
    case 40:
      e.preventDefault();
      if(limitsBall.bottom < limitsStage.bottom)y++;
      break;
    // 37 --> izquierda
    case 37:
      e.preventDefault();
      if (limitsBall.left > limitsStage.left)x--; 
      break;
    // 39 --> derecha
    case 39:
      e.preventDefault();
      if(limitsBall.right < limitsStage.right)x++;
      break;

  }
  
  $ball.style.transform = `translate(${x*30}px,${y*30}px)`;

}



//ESTO ES DE ATAJOS

export function shortcuts(e){
  
  //type especifica que tipo de evento es
  //console.log(e.type)
  
  //Key --> es la tecla presiona
  //console.log(e.key)
  // keycode --> es por decirlo asi el id de la tecla por ejemplo Enter es 13
  //console.log(e.keyCode)

  //ctrlKey, altKey & shiftKey es para cuando se precionan estas teclas especiales

  //console.log(e.shiftKey)

  //console.log(e.altKey)

  //console.log(e.ctrlKey)

  //console.log(e)


  if(e.key === "a" && e.altKey){  
    alert("Lanzar Alerta")
  }
  
  if(e.key === "c" && e.altKey){  
    confirm("Lanzar confirmacion")
  }
  
  if(e.key === "p" && e.altKey){  
    prompt("Lanzar prompt")
  }


}
