let idades = [];
let posicao = 0;

for (let i = 0; i < 4; i++) {
    idades.push(Number(prompt("Insira uma idade:")));
}

let maiorIdade = idades[0];

for (let i = 1; i < idades.length; i++) {
    if (idades[i] > maiorIdade) {
        maiorIdade = idades[i];
        posicao = i + 1;
    }
}

alert(
    `Maior idade: ${maiorIdade}\n` +
    `Posição: ${posicao}`) ;