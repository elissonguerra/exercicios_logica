// Exercícios de revisão

// 1) Um posto está vendendo combustíveis com a seguinte tabela de descontos:    
// Álcool: 
//      Até 20 litros: desconto de 3% por litro 
//      Acima de 20 litros: Desconto de 5% por litro. 
//  Gasolina: 
//      Até 20 litros: desconto de 4% por litro 
//      Acima de 20 litros, desconto de 6% por litro

// Escreva um algoritmo que leia o número de litros vendidos, o valor do litro de combustível e o tipo de combustível (codificado da seguinte forma: A-álcool. G-gasolina), calcule e imprima o valor a ser pago pelo cliente.

var qtdeLitros = parseFloat(prompt("Digite a quantidade de litros vendidos"));
var precoLitro = parseFloat(prompt("Digite o preço por litro"));
var tipoCombustivel = prompt("Digite o tipo de combustível, sendo A para álcool e G para gasolina");

tipoCombustivel = tipoCombustivel.toUpperCase();

var totalSemDesconto = qtdeLitros * precoLitro;
var totalComDesconto = 0;

if (tipoCombustivel == "A" && qtdeLitros <= 20) {
    totalComDesconto = totalSemDesconto - (totalSemDesconto * 0.03);
} else if (tipoCombustivel == "A" && qtdeLitros > 20) {
    totalComDesconto = totalSemDesconto - (totalSemDesconto * 0.05); 
} else if (tipoCombustivel == "G" && qtdeLitros <= 20) {
    totalComDesconto = totalSemDesconto - (totalSemDesconto * 0.04);
} else {
    totalComDesconto = totalSemDesconto - (totalSemDesconto * 0.06);
}

console.log("O valor a ser pago é de R$ " + totalComDesconto.toFixed(2));

// 2) As organizações CSM resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual; 
// b. Salários até R$ 2800,00 (incluindo): aumento de 20%; 
// c. Salários entre R$ 2800,00 e R$7000,00: aumento de 15%; 
// d. Salários entre R$ 7000,00 e R$ 15000,00: aumento de 10%; 
// e. Salários de R$ 15000,00 em diante: aumento de 5% 
// Após o aumento ser realizado; informe na tela; 
// O salário antes do reajuste; 
// O percentual de aumento aplicado; 
// O valor do aumento; 
// O novo salário, após o aumento.

var salario = parseFloat(prompt("Digite o seu salário atual"));
var reajuste = 0;

if (salario <= 2800) {
    reajuste = 0.20
} else if (salario > 2800 && salario <= 7000) {
    reajuste = 0.15   
} else if (salario > 7000 && salario <= 15000) {
    reajuste = 0.10
} else {
    reajuste = 0.05
}

var aumento = salario * reajuste;
var salarioNovo = salario + aumento;
reajuste = reajuste * 100

console.log("O salário antes do reajuste era de R$ " + salario.toFixed(2));
console.log("O reajuste foi de " + reajuste.toFixed(2) + "%");
console.log("O valor do aumento foi de R$ " + aumento.toFixed(2));
console.log("O novo salário é de R$ " + salarioNovo.toFixed(2));

// 3) Faça um algoritmo que imprima o somatório de todos os números entre 1 e um valor digitado pelo usuário. Por exemplo, se o usuário digitar o número 4, o programa deverá calcular o somatório 1 + 2 + 3 + 4 = 10.

var num = parseFloat(prompt("Digite um número"));
var soma = 0;
for (let i = 0; i <= num; i++) {
    soma += i;
}

console.log("A soma de 1 até " + num + " é igual a " + soma);

// 4) Faça um algoritmo que receba 5 números inteiros, armazene-os em um vetor, em seguida, descubra e exiba o maior número.

var num = [];
var limiteNumeros = 5;

for (let i = 0; i < limiteNumeros; i++) {
    num[i] = parseInt(prompt("Digite o " + (i+1) + "º número"));  
}

var maiorNumero = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] > maiorNumero) {
        maiorNumero = num[i]
    }
    
}

console.log("O maior número digitado é: " + maiorNumero);


