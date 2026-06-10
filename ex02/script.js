let nomes = [];
let sexo = [];
let salario = [];
let salarioMinimo = 5000;
let resultado = " ";

for (let i = 0; i < 5; i++) {
    nomes.push(prompt("Insira o nome:"));
    sexo.push(prompt("Insira o sexo (f ou m):"));
    salario.push(Number(prompt("Insira o salario")));
}

for (let i = 0; i < 5; i++) {
    if (sexo[i] === "f" && salario[i] >= salarioMinimo) {
        resultado +=
            `Nome: ${nomes[i]}\n` +
            `Sexo: ${sexo[i]}\n` +
            `Salário: R$ ${salario[i]}\n\n`;
    }
}


alert(resultado);