document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('numberForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obter os valores dos campos numéricos
        var numberA = parseInt(document.getElementById('numberA').value);
        var numberB = parseInt(document.getElementById('numberB').value);

        // Verificar se o número B é maior que o número A
        if (numberB > numberA) {
            // Exibir mensagem positiva para o usuário
            showMessage('Formulário válido: Número B é maior que o número A.', 'green');
        } else {
            // Exibir mensagem negativa para o usuário
            showMessage('Formulário inválido: Número B deve ser maior que o número A.', 'red');
        }
    });
});

function showMessage(message, color) {
    var messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;
}
