const d = document;
const n = navigator;
const w = window;

//userAgent da informacion del navegador, OS
const ua = n.userAgent;
export default function userDeviceInfo(id){
  
  const $id = d.getElementById(id)
  // OBJETO DE REDIRECCIONES QUE USABA EN SU TIEMPO

  const isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () =>  ua.match(/windows phone/i),
      any: function () {

      return this.android() || this.ios() || this.windows();

    }
  };

  const isDesktop = {
  
    linux: () => ua.match(/linux/i),
    windows: () => ua.match(/windows/i),
    mac: () => ua.match(/mac os/i),
    any: function () {

    return   this.linux() || this.windows() || this.mac() ;

    }

  };
  
  const isBrowser = {

    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    firefox: () => ua.match(/firefox/i),
    opera: () => ua.match(/opera/i),
    ie: () => ua.match(/msie|iemobile/i),
    edge: () => ua.match(/edg|edge/i),
    any: function () {

      return this.chrome() || this.safari() || this.firefox() || this.opera() || this.edge() || this.ie()

    }


  };

  $id.innerHTML = `
  <ul>
    <li>User Agent: <b>${ua}</b></li>
    
    <li>Plataforma: <b>${

      isMobile.any()? isMobile.any(): isDesktop.any()

      }</b></li>
    
    <li>Navegador: <b>${isBrowser.any()}</b></li>
    
  </ul>
  `

  if(isBrowser.chrome()){
      
    $id.innerHTML += `<h5>Este GiF solo lo ven los que usan chrome</h5>
    <img src="https://media0.giphy.com/media/3oGRFEkn8TPenUvzAk/200w.webp?cid=ecf05e47dpugncqlgnmsnoncl2l0d0kt30x5jsvmtr8b5mx8&ep=v1_gifs_search&rid=200w.webp&ct=g"/>`
  }

  else if(isBrowser.firefox()){
  
    $id.innerHTML += `<h5>Este GiF solo lo ven los que usan Mozilla Firefox</h5>
    <img src="https://media0.giphy.com/media/fvM5D7vFoACAM/giphy.gif?cid=ecf05e47beshuc9jcaxuat415zq2noatk43s2f0akwq7oxwv&ep=v1_gifs_search&rid=giphy.gif&ct=g"/>
    `
  }
    
  else if(isBrowser.opera()){


    $id.innerHTML += `<h5>Este GiF solo lo ven los que usan Opera</h5>
    <img src=""/>`
  }
  else if(isBrowser.safari()){

    $id.innerHTML += `<h5>Este GiF solo lo ven los que usan safari</h5>
    <img src="https://media1.giphy.com/media/QNMc1qv4VX8IdTLGOm/giphy.gif?cid=ecf05e47y58ca3ibv3ot12q0dt5viulwwxa66y8tywj1ywfy&ep=v1_gifs_search&rid=giphy.gif&ct=g"/>`
  }
  else if(isBrowser.edge()){
  $id.innerHTML +=`<h5>Este GIF solo lo ven los que este usando edge</h5>
img<https://media3.giphy.com/media/l41YcLtmnhYyUlbfq/giphy.gif?cid=ecf05e47a1f5bzd310tpvvvvu7aa1n6lx0ohc01y2tn8ixyv&ep=v1_gifs_search&rid=giphy.gif&ct=g>
`
  }
  /* Redirecciones */

  if (isMobile.android() || isMobile.ios() || isMobile.windows()){

    const input = confirm("Se detecto que estas en dispositivo movil, deseas continuar a la pagina version movil?")
    if(input){
      w.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0"
    }
  }







}
