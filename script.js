// JavaScript da GALERIA DE FOTOS DA ESCOLA
const galeriaFotos = document.querySelector(".galeriaFotos");
const setaVoltar = document.querySelector(".arrow-back");
const setaAvancar = document.querySelector(".arrow-forward");

let index = 0;

function atualizarGaleria() {
  const imagemLargura = galeriaFotos.children[0].clientWidth;
  galeriaFotos.style.transform = `translateX(${-index * imagemLargura}px)`;
}

setaAvancar.addEventListener("click", () => {
  index++;
  if (index === galeriaFotos.children.length) {
    index = 0;
  }
  atualizarGaleria();
});

setaVoltar.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = galeriaFotos.children.length - 1;
  }
  atualizarGaleria();
});

atualizarGaleria();
//
