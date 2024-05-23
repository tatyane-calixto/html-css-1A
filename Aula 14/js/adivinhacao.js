const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const restartButton = document.getElementById('restartButton');
const resultado = document.getElementById('resultado');

let numeroSecreto;
let tentativas;

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 50) + 1;
    tentativas = 3;
    guessInput.disabled = false;
    guessButton.disabled = false;
    restartButton.style.display = 'none';
    resultado.textContent = '';
}

function finalizarJogo(mensagem) {
    resultado.textContent = mensagem;
    guessInput.disabled = true;
    guessButton.disabled = true;
    restartButton.style.display = 'block';
}

guessButton.addEventListener('click', function() {
    const guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess < 1 || guess > 50) {
        alert('Por favor, insira um número válido entre 1 e 100.');
        return;
    }

    tentativas--;

    if (guess === numeroSecreto) {
        finalizarJogo(`Parabéns! Você acertou o número secreto (${numeroSecreto})!`);
    } else if (tentativas === 0) {
        finalizarJogo(`Suas tentativas acabaram. O número secreto era ${numeroSecreto}. Tente novamente!`);
    } else {
        resultado.textContent = `Errado! O número secreto é ${guess > numeroSecreto ? 'menor' : 'maior'} que ${guess}. Tentativas restantes: ${tentativas}`;
    }

    guessInput.value = '';
});

restartButton.addEventListener('click', iniciarJogo);

// Inicia o jogo quando a página carregar
window.onload = iniciarJogo;
