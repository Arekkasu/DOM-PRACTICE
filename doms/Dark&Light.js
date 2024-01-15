const d = document;

const ls = localStorage;


export default function darkTheme(btn, classDark){


//Recordar que en el local storage guarda hasta 5 MB
 const $themeBtn = d.querySelector(btn);
 const $selectors = d.querySelectorAll("[data-dark]") // ESLA DATA QUE SE CREO  y al poner los corchetes 
                                                      // Es como decira que todos los elemetnos que tengan ese query
//console.log($themeBtn.textContent)

 const sun = "☀️";
 const moon = "🌙";
 const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon
        ls.setItem("theme", "light")
  };
 const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun
        ls.setItem("theme", "dark")
  };


  d.addEventListener("click", (e) =>{

  if(e.target.matches(btn)){
    if($themeBtn.textContent === moon){
      darkMode()
    }else{
      lightMode()
    }

  }

  
  })

  

  d.addEventListener("DOMContentLoaded", (e) => {
  
  /*
   *
   * FUNCION DE LOCAL STORAGE ES COMO UN OBJETO
   * EN EL CUAL TIENE KEY Y VALUE EN ESTOS ES NECESARIO PODER CREAR
   * LAS PROPIEDADES DE ESTE POR LO CUAL LOS COMANDOS SON
   *
   * ls.setItem("propiedad", valor)
   *
   *
   * ls.getItem("propiedad")
   *
   *
  */
  if(ls.getItem("theme") === null) ls.setItem("theme", "light");
  if(ls.getItem("theme") === "light") lightMode();
  if(ls.getItem("theme") === "dark") darkMode();


})






}
