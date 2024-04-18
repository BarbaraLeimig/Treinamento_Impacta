/* enunciado: criar uma Promise com um manipulador de tempo com o intervalo de 5 segundos;
o objetivo da criação desta Promise é proporcionar à aplicação a execução de três tarefas 
especificas - a seguir:

a) criar um loop que exibirá um intervalo de valores que vai de 1 até 20;
b) criar um novo loop que imprime os intervalos de números impares menores do que 100;
c) imprimir a tabuada do número 9; */

// função para exibir o intervalo de valores de 1 a 20
function loopA() {
    let numero = "";
    for (let i = 1; i <= 20; i++) {
        numero += i + "\n";
    }
    alert(`Contagem dos números de 1 a 20: \n${numero}`);
}

// função para exibir o intervalo de números impares menores que 100
function loopB() {
    let numImpar = "";
    for (let i = 1; i < 100; i += 2) {
        numImpar += i + ",";
    }
    alert(`Números impares menores que 100: \n${numImpar}`);
}

// função para imprimir a tabuada do número 9
function loopC() {
    let numero = 9;
    let tabuada = "";
    for (i = 1; i <= 10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(`Tabuada do número 9: \n${tabuada}`);
}

let objPromise = new Promise((resolve, reject) => {
    setTimeout(
        () => {

            loopA();
            loopB();
            loopC();

            resolve('Tarefas concluídas');
            reject(new Error('Não foi possível exibir a contagem'));
        }, 9000
    )
})

objPromise.then(
    result => alert(result),
    error => alert(`Erro: ${error.message}`)
)
