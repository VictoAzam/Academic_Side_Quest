document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const botoesUsuario = document.getElementById("botoesUsuario");

  startButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Adiciona classe que ativa animação de saída do botão START
    startButton.classList.add("fade-out");

    // Espera o botão desaparecer para mostrar os botões de usuário
    setTimeout(() => {
      botoesUsuario.classList.add("visivel");
    }, 400); // mesmo tempo do transition do botão Start
  });
});
