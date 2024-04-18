/* 1 - Vamos criar uma função simples para que possa ser executada.Ao ser executada esta primeira função
 possa realizar o calculo - a partir de um argumento numérico - o valor de uma porcentagem que 
 também será oferecido como segundo argumento dessa função. */

function calculator(valor, porcentagem) {
    let resultado = (valor * porcentagem) / 100;

    alert(`Resultado: ${porcentagem}% de ${valor} é igual a ${resultado}`);
}

let value = prompt("Digite um número inteiro positivo:")
let percent = prompt("Digite a porcentagem que deseja obter do numero inserido anteriormente")

calculator(value, percent);