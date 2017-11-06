let infoEl = document.querySelector('#info'),
  botaoInfoEl = document.querySelector('#botao-info');

botaoInfoEl.addEventListener('click', function() {
  infoEl.classList.add('info');
  infoEl.innerHTML = '<button id="botao-fechar-info">X</button><br><p>Gammy é uma rede de jogos, que possui aproximadamente 2 jogos. O site possui um sistema de conquistas, que incentiva mais ainda o usuário a jogar. O site foi desenvolvido por Pedro César (Alface), Sammuel Reis (Sammy) e Samuel Simonetti (Sabonete).</p>';
  let botaoFecharInfoEl = document.querySelector('#botao-fechar-info');
  botaoFecharInfoEl.addEventListener('click', function() {
    infoEl.innerHTML = '';
    infoEl.classList.remove('info');
  });
});
