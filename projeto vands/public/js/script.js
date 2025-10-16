document.addEventListener('DOMContentLoaded', function () {
  // Botão de alerta
  const btn = document.getElementById('alertBtn');
  if (btn) {
    btn.addEventListener('click', function () {
      alert('Dica: Clique nos filmes para marcar como assistido!');
    });
  }

  // Interação: marcar/desmarcar como assistido
  document.querySelectorAll('.filme-item').forEach(function(item) {
    item.addEventListener('click', function() {
      this.classList.toggle('assistido');
      this.classList.toggle('nao-assistido');

      // Troca o texto e cor do badge, se existir
      const badge = this.querySelector('.badge');
      if (badge) {
        if (this.classList.contains('assistido')) {
          badge.textContent = 'Assistido';
          badge.classList.add('badge-verde');
          badge.classList.remove('badge-vermelho');
        } else {
          badge.textContent = 'Não assistido';
          badge.classList.add('badge-vermelho');
          badge.classList.remove('badge-verde');
        }
      }
    });
  });
});