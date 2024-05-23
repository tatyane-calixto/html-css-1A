const meuFormulario = document.getElementById('meuFormulario');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const nomeError = document.getElementById('nomeError');
const emailError = document.getElementById('emailError');

nomeInput.addEventListener('blur', function() {
    if (!nomeInput.validity.valid) {
        nomeError.style.display = 'block';
    } else {
        nomeError.style.display = 'none';
    }
});

emailInput.addEventListener('blur', function() {
    if (!emailInput.validity.valid) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
});

meuFormulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    if (!nomeInput.validity.valid) {
        nomeError.style.display = 'block';
    } else {
        nomeError.style.display = 'none';
    }

    if (!emailInput.validity.valid) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }

    // Aqui você pode incluir lógica adicional para validar ou enviar os dados do formulário
});
