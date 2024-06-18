const d = document;
const n = navigator;

export default function webCam(id) {
  const $video = d.getElementById(id);

  /*NOTE: esta funcion es la cual se usa para ejecutar*/

  //console.log(n.mediaDevices.getUserMedia)

  if (n.mediaDevices.getUserMedia) {
    //NOTE: ESTO ES UNA PROMESA
    n.mediaDevices
      .getUserMedia({
        video: true,
        //HABILITAR AUDIO
        audio: false,
      })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        
        $video.insertAdjacentHTML("afterend", `<p>Este error esta presentandose
        <mark>${err}</mark></p>`)
        console.log(`Sucede el siguiente error ${err} `);
        

      });
  }
}
