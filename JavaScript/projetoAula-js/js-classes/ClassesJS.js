// definição do nome da classe com a palavra reservada class
class DadosUsuario {
    constructor(nome, idade) {
        // criar dentro do método construtor uma variável para receber como valor aquilo que é atribuido ao parametro do método
        this.nome = nome
        this.idade = idade
    }

    // definir um métood para operar com os dados que serão recebidos pela classe
    dizendoUmOla() {
        alert(`Olá, ${this.nome}! Por acaso a sua idade é ${this.idade} anos?`)
    }
}

// definir uma let para receber como valor a inicialização da classe
let dados = new DadosUsuario('Daiane', 19);

// nwe -> algo novo está sendo gerado a partir de algo já existente
// DadosUsuario() -> na verdade, é o nome atibuido - de forma implicita - ao método construtor

// fazer uso do objeto
dados.dizendoUmOla();

// 2ª abordagem

class DadosDoUsuario{
    nome
    idade

    dizendoOla() {
        alert(`Olá ${this.nome}. Sua idade é ${this.idade} anos?`)
    }
}

let dadoUser = new DadosDoUsuario();

dadoUser.nome = 'Bárbara'
dadoUser.idade = 29

dadoUser.dizendoOla();

// 3ª abordagem

let DadosUsuario = class{
    
    dizendoUmOla() {
        alert('Olá! Sou uma expressão de classe!')
    }
}

let dados = new DadosUsuario();
dados.dizendoUmOla()