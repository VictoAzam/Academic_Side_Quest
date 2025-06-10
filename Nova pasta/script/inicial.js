document.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona os elementos
    const startButtonContainer = document.querySelector('.startButton');
    const botoesUsuarios = document.querySelector('.botoesUsuarios');
  
    // Adiciona um evento de clique ao botão Start
    startButtonContainer.addEventListener('click', function(e) {
      e.preventDefault(); // Impede que o link recarregue a página
      
      // Adiciona uma classe para animar a saída do botão Start
      startButtonContainer.classList.add('fade-out');
  
      // Adiciona a classe 'visivel' para iniciar a animação dos botões de usuário
      botoesUsuarios.classList.add('visivel');
    });
  });