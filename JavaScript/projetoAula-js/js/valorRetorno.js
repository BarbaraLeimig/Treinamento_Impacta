function validarIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return confirm('Você possui autorização de um responsável para acessar a área restrita?');
    }
}

// 1ª parte -  criar uma variável para receber como valor o argumento que será atribuido a resposta de retorno
let umArgumento = prompt('Por favor, sua idade corresponde a indicada abaixo? Se não, por favor nos informe:', 18);

// executar a chamada da função a partir de uma estrutura condicioanl
if (validarIdade(umArgumento)) {
    // chamada da função sendo indicada como expressão de teste do if
    alert('acesso liberado')
} else {
    alert('acesso negado')
}

/* function somar(a, b, c) {
    return a + (b + c);
}

let resultado = somar('resultado', 25, 210);

alert(resultado); */