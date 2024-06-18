const d = document;

export default function searchFilter(input, selector) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      d.querySelectorAll(selector).forEach((el) => {

        if(e.key === "Escape")e.target.value = "";


        //NOTE: INCLUDES ES UN BOOLEANO
        //QUE EVALUA SI EXISTE
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? el.classList.remove("filter")
          : el.classList.add("filter");
      });
    }
  });
}
