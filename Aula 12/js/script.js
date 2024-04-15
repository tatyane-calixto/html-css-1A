function calculate() {
    // Obtém os valores dos inputs e do seletor
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    // Verifica se os números são válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Realiza a operação selecionada
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Erro: Divisão por zero.");
                return;
            }
            break;
        default:
            alert("Operador inválido.");
            return;
    }

    // Exibe o resultado em um alerta
    alert("Resultado: " + result);

    // Limpa os inputs
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
}
