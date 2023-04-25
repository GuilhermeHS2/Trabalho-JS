const form = document.getElementById('form-media');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const nota3 = parseFloat(document.getElementById('nota3').value);
  const nota4 = parseFloat(document.getElementById('nota4').value);

  const media = (nota1 + nota2 + nota3 + nota4) / 4;

  let situacao;
  let corFundo;

  if (media >= 6.0) {
    situacao = 'Aprovado';
    corFundo = 'green';
  } else if (media >= 2.0 && media <= 5.9) {
    situacao = 'Recuperação';
    corFundo = 'blue';
  } else {
    situacao = 'Reprovado';
    corFundo = 'red';
  }

  resultado.innerHTML = `<p>A média do aluno ${nome} é ${media.toFixed(2)}. Situação: ${situacao}</p>`;
  resultado.style.backgroundColor = corFundo;
});
