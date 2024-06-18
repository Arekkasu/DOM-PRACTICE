const d = document;
const w = window;
const n = navigator;

//NOTE: Esta funcion no require ningun valor boleano
export default function networkStatus() {


  const isOnline = () => {
    const $div = d.createElement("div")

    if (n.onLine) {

      $div.textContent = "Conexion Reestablecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {

      $div.textContent = "Conexion Perdida"
      $div.classList.add("offline");
      $div.classList.remove("online");
    }

    d.body.insertAdjacentElement("afterbegin", $div);
    setTimeout(() => {
      d.body.removeChild($div)
    }, 3000);
  }


  //Evento de ventana

  w.addEventListener("online", e => isOnline())
  w.addEventListener("offline", e => isOnline())

}
