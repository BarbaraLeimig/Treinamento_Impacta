// 4º callback
setTimeout(
    // definir arrow function para ser o callback function
    // arrow function nada mais é que uma função anônima 
    () => {
        alert('Este texto será exibido depois de 5 segundos - contados a partir da execução da aplicação')
    }, 5000
)


/* //3º callback
let umTexto = function(){
    alert('Esse texto será exibido depois de 5 segundos - contados a partir da execução da aplicação');
}

// uso da função embarcada/nativa do js para auxiliar na criação do intervalo de tempo - setTimeOut
setTimeout(umTexto, 5000);
 */


/* //2º callback
function perguntar(pergunta, sim, nao) {
    if(confirm(pergunta)){
        sim()
    } else {
        nao()
    }
}

perguntar(
    'Estamos combinados neste tema?',
    // para os próximos 2 argumentos vamos definir duas funções anônimas
    function() {alert('Estamos, então, combinados!')},
    function() {alert('Não encontramos um meio-termo.')}
); */


//1º callback
/* function perguntar(pergunta, sim, nao) {
    if (confirm(pergunta)) {
        sim()
    } else {
        nao()
    }
}

function mostrarSeForOk() {
    alert('Estamos combinados')
}

function mostrarSeForNaoOk() {
    alert('Não encontramos um meio-termo')
}

perguntar('Estamos combinados?', mostrarSeForOk, mostrarSeForNaoOk) */