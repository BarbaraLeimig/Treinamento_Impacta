function carregarConteudo(fonte) {
    // definir uma expressão de retorno
    // nossa função retornará uma Promise
    return new Promise(function (resolve, reject) {
        // definir uma variável para receber como valor o acesso à uma tag html
        let tagueamento = document.createElement('script')
        // indicado que: no documento html será criado um elemento tag <script></script>
        tagueamento.src = fonte

        // os recursos necessários para operar com a promise estão disponíveis
        // agora, serão criadas as tarefas da promise
        // assim que a nossa aplicação for carregada pelo browser, queremos que o valor dado a prop onload seja executado - onload prioriza a execução de algo descrito no documento js
        tagueamento.onload = () => resolve(tagueamento)
        tagueamento.onerror = () => reject(new Error(`Tag não foi criada! A simulação de carregamento de conteúdo falhou! Ocorreu um erro para o endereço: ${fonte}`))

        // acrescentar a nova tag <script src></script> no head da página index.html
        document.head.append(tagueamento)
    })
}

// definir uma variável para receber como valor a chamada da função
let execPromise = carregarConteudo('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js')

// implementar a função then()
execPromise.then(
    (tagueamento) => alert(`${tagueamento.src} está sendo acessado`),
    (error) => alert(`Erro: ${error.message}`)
)

// outra forma de implementar o then
execPromise
    .then(tagueamento => alert(`${tagueamento.src} está sendo acessado`))
    .catch(error => alert(`Erro: ${error.message}`))