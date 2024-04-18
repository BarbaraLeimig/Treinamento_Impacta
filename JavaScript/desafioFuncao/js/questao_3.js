/* 3 - criar um nova função para retornar um valor booleano - verdadeiro ou falso - para 
verificar e informar se um determinado numero atribuido a uma variavel é primo.  */

function ehPrimo(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let numero = prompt(`
--------- Verificador de números primos ---------\n
Por favor, digite um número:
`);

if (ehPrimo(numero)) {
    alert(`O número ${numero} é primo!`);
} else {
    alert(`O número ${numero} não é primo!`);
}