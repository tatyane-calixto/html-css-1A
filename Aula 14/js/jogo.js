const buttons = document.querySelectorAll('.btn');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultadoDisplay = document.getElementById('resultado');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const resultado = getResultado(playerChoice, computerChoice);
        
        computerChoiceDisplay.textContent = computerChoice;
        resultadoDisplay.textContent = resultado;
    });
});

function getComputerChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getResultado(player, computer) {
    if (player === computer) {
        return 'Empate!';
    } else if (
        (player === 'pedra' && computer === 'tesoura') ||
        (player === 'papel' && computer === 'pedra') ||
        (player === 'tesoura' && computer === 'papel')
    ) {
        return 'Você ganhou!';
    } else {
        return 'Você perdeu!';
    }
}
