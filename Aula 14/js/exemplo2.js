const botaoContador = document.getElementById('botaoContador');
const contadorCliques = document.getElementById('contadorCliques');
let contador = 0;

botaoContador.addEventListener('click', function() {
    contador++; 
    contadorCliques.textContent = contador + ' cliques';
});
