const d = document;

export default function scrollSpy() {
  //A QUIENES VAMOS A OBSERVAR
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    //console.log(entries)

    entries.forEach((entry) => {
      //console.log(entry);
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active",
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active",
        );
      }
    });
  };

  //callback, options
  const observador = new IntersectionObserver(cb, {
    //root --> documento
    //root margin --> en px
    //rootMargin: "-250px",
    //esta opcion es mejor :)
    threshold: 0.5, // 0 es cuando apenas se visualice se marcara - 0.5 es visible
    // hasta 1
  });

  $sections.forEach((el) => observador.observe(el));
}
