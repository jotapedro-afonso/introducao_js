// 1. Seleção dos elementos do DOM
const inputNome = document.getElementById('campoNome');
const botao = document.getElementById('botaoEnviar');
const resultado = document.getElementById('resultado');
// 2. Função para processar a ação
function processarClique() {
    const nomeDigitado = inputNome.value; // Captura o valor
    resultado.innerText = `Olá, ${nomeDigitado}! Bem-vindo ao JS.`;
}
// 3. Vinculação do evento de clique
botao.addEventListener('click', processarClique);

const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const botaoCalcular = document.getElementById('botaoSomar');
const displayResultado = document.getElementById('resultadoSoma');
botaoCalcular.addEventListener('click', () => {
    // Conversão explícita de String para Number
    const valor1 = Number(input1.value);
    const valor2 = Number(input2.value);

    const soma = valor1 + valor2;
    displayResultado.innerText = `Resultado: ${soma}`;
});
