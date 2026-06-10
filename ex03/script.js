let nomes = [];
let alturas = [];

let resposta;
let i = 0;

do {
    nomes[i] = prompt("Digite o nome da pessoa:");

    alturas[i] = Number(
        prompt("Digite a altura da pessoa (em metros):")
        .replace(",", ".")
    );

    resposta = prompt("Deseja cadastrar outra pessoa? (s/n)");

    i++;

} while (resposta === "s");

let maiorAltura = alturas[0];
let menorAltura = alturas[0];

let nomeMaior = nomes[0];
let nomeMenor = nomes[0];

for (let i = 1; i < alturas.length; i++) {

    if (alturas[i] > maiorAltura) {
        maiorAltura = alturas[i];
        nomeMaior = nomes[i];
    }

    if (alturas[i] < menorAltura) {
        menorAltura = alturas[i];
        nomeMenor = nomes[i];
    }
}

alert(
    `Maior altura: ${maiorAltura} m\n` +
    `Pertence a: ${nomeMaior}\n\n` +
    `Menor altura: ${menorAltura} m\n` +
    `Pertence a: ${nomeMenor}`
);