// definição de uma promise
/* let objPromise = new Promise(function (resolve, reject) {
    // a function será executada, automaticamente, quando a promise for "construída"
    // após 2 segundos será sinalizado que a tarefa está concluída
    // entao, a string 'tarefa concluida' será exibida em tela
    setTimeout(
        () => {
            resolve('tarefa concluída')
        }
    ), 2000
}) */

/* let objPromise = new Promise(function (promiseExec, promiseNaoExec) {
    // a function será executada, automaticamente, quando a promise for "construída"
    // após 2 segundos será sinalizado que a tarefa está concluída
    // entao, a string 'tarefa concluida' será exibida em tela
    setTimeout(
        () => {
           promiseExec('tarefa concluída')
        }
    ), 2000
})

// fazer uso do objeto objPromise para que a Promise seja executada - "a promessa seja cumprida"
console.log(objPromise);

// uso da função/método then()
objPromise.then(
    // () => {}
    resultado => alert(resultado),
    erro => alert(erro)
) */


// definir o objeto da Promise
let objPromise = new Promise(function (promiseExec, promiseNaoExec) {
    setTimeout(
        () => {
            promiseNaoExec(new Error('Algo deu errado'))
        }, 2000
    )
});

objPromise.then(
    resultado => alert(resultado),
    erro => alert(erro)
)