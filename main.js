window.onload = () => {
    document.body.classList.remove("container");
};
  

document.addEventListener("DOMContentLoaded", () => {
    // Tempo após o qual as flores terminam (ajuste conforme sua animação)
    const FLOWERS_ANIMATION_DURATION = 1111000; // 6 segundos
  
    const flowers = document.querySelector('.flowers');
    const messageScreen = document.getElementById('message-screen');
    const messageText = document.getElementById('message-text');
  
    const messages = [
      "A beleza está nos detalhes mais simples...",
      "Assim como essas flores, nosso amor floresce a cada dia.",
      "Obrigada por estar ao meu lado.",
      "Te amo. 🌸"
    ];
  
    setTimeout(() => {
      // Esconde as flores
      flowers.style.display = 'none';
  
      // Mostra a tela de mensagens
      messageScreen.classList.remove('hidden');
  
      // Exibe frases uma a uma
      let i = 0;
      const showNextMessage = () => {
        if (i < messages.length) {
          messageText.style.opacity = 0;
          setTimeout(() => {
            messageText.textContent = messages[i];
            messageText.style.opacity = 1;
            i++;
            setTimeout(showNextMessage, 3000); // mostra próxima após 3s
          }, 500);
        }
      };
  
      showNextMessage();
    }, FLOWERS_ANIMATION_DURATION);
  });
  if (i === messages.length) {
    const restartBtn = document.getElementById('restart-btn');
    restartBtn.classList.remove('hidden');
    restartBtn.onclick = () => location.reload();
  }
  