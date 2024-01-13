
// Como se usara el scroll se debe usar el BOM que seria windwos


const d = document

const w = window




export default function scrollTopButton(btn){

  const $scrollBtn = d.querySelector(btn)


  w.addEventListener("scroll", e => {

    const scrollTop = w.scrollY || d.documentElement.scrollTop;


    if(scrollTop > 600){
      $scrollBtn.classList.remove("hidden")
    }
    else{

      $scrollBtn.classList.add("hidden")
    }

    //el w.pageYOffset esta deprecado y se usa mejor scrollY
    console.log(w.scrollY, d.documentElement.scrollTop)

  });
  d.addEventListener("click", e => {

    if(e.target.matches(btn)){

      w.scrollTo({
        behavior: "smooth",
        top: 0,
      })
    };
    


  });

}
