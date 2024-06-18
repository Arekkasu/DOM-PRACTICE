const d = document;

//Informacion de las caracteristicas del dispositivo o USER
const n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximiumAge: 0,
    };

  const success = (position) => {
    let coords = position.coords;
    console.log(position);
    $id.innerHTML = `
      <p>Tu posicion actual es:</p>
      <ul>
        <li>Latitud: ${coords.latitude}</li>
        <li>Longitud:${coords.longitude}</li>
        <li>Precision: ${coords.accuracy} metros</li>
      </ul>
      <a href="https://www.googlemaps.com/maps/@${coords.latitude}
      ,${coords.longitude},20z" target="_blank" rel="noopener">Ver en google maps</a>
    `;
  };
  const error = (err) => {
    $id.innerHTML = `<p><mark>${err.message}</mark></p>`;
    console.log(`Error: ${err}:  ${err.message}`);
  };

  //ESTO ES UN CALLBACK
  // WARNING: EL TEMA DE GEOLOCALIZACION FUNCIONA CON HTTPS NO HTTP;
  n.geolocation.getCurrentPosition(success, error, options);

  //WHATCSPOSICIOn
  //NOTE : ESTE ES EN EL QUE MANTENDRA ACTUALIZADO O REVISARA SI HA CAMBIADO
  //LA POSICION
}
