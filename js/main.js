function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}
const ListaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
  const tecla = ListaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; //template string

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      tecla.classlist.add("ativa");
    }
  };
  
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
