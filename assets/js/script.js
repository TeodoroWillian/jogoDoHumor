const nome = document.getElementById("nome");
const situacao = document.querySelector("#situacao");
const imagem = document.querySelector("#imagem");
let button = document.querySelector("#modificar");

button.addEventListener("click", function () {
  if (button.value == "primeiroEstado") {
    imagem.src = "./assets/img/michaelPuto.jpg";
    nome.innerText = "Michael";
    situacao.innerText = "Pistola";
    button.value = "segundoEstado";
  } else if (button.value == "segundoEstado") {
    imagem.src = "./assets/img/prisonMike.jpg";
    nome.innerText = "Mike";
    situacao.innerText = "Prison Mike";
    button.value = "terceiroEstadp";
  } else {
    imagem.src = "./assets/img/michaelOculos.jpg";
    nome.innerText = "Michael Scott";
    situacao.innerText = '"Na Paz"';
    button.value = "primeiroEstado";
  }
});
