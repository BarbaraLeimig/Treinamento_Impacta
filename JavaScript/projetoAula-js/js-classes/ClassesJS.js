// 1ª abordagem

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
dados.dizendoUmOla();

// 4ª abordagem: propriedades de acesso restrito em js 

class copoDagua {
    _qtdAgua = 0;

    // fazer uso do método acessor para possibilitar o acesso a prop privada e, posteriormente, configurá-la com algum tipo de valor
    get qtdAgua() {
        return this._qtdAgua;
    }

    // fazer uso do método acessor set -  que nos possibilita atribuir a prop private um valor qualquer
    set qtdAgua(value) {
        // verificar o valor que foi atribuido ao parametro value
        if (value < 0) {
            value = 0;
        }
        this._qtdAgua = value;
    }

    constructor(corDaAgua, qtdAgua) {
        this.corDaAgua = corDaAgua;
        this.qtdAgua = qtdAgua;
    }

    exibirValores() {
        alert(`Cor da água: ${this.corDaAgua}. A quantiade da água é de ${this.qtdAgua}ml.`)
    }
}

// praticar a instância da classe
let sede = new copoDagua('Limpida/cristalina', 100);

// fazer acesso ao "elemento público da propriedade privada" - seu encapsulamento dado
sede.exibirValores();


// 4ª abordagem: mecanismo de herança
class Pessoa {

    // caracteristicas gerais
    altura
    nome
    idade
    documento

    constructor(altura, nome, idade, documento) { 
        this.altura = altura;
        this.nome = nome;
        this.idade = idade;
        this.documento = documento;
    }
}

// definir uma nova classe para praticar o mecanismo de herança com a classe Pessoa{}

class Professor extends Pessoa {

    discMinistrada
    salario

    constructor(discMinistrada, salario) {
        super() // faz referência direta ao método construtor da classe pai
        this.discMinistrada = discMinistrada;
        this.salario = salario;
    }

    exibirInfos() {
        alert(`Nome: ${this.nome}\nIdade: ${this.idade}\nAltura: ${this.altura}\nDocumento ${this.documento}\nDisciplina: ${this.discMinistrada}\nSalario: ${this.salario}`);
    }
}

// definir uma nova classe para paticar o mecanismo de herança

class Aluno extends Pessoa {
    constructor(curso, mensalidade) {
        super()
        this.curso = curso; 
        this.mensalidade = mensalidade;
    }

    exibirInfos() {
        alert(`Nome: ${this.nome}\nIdade: ${this.idade}\nAltura: ${this.altura}\nDocumento ${this.documento}\nDisciplina: ${this.curso}\nMensalidade: ${this.mensalidade}`);
    }
}

// definir os o0bjetos das respectivas classes
let professor = new Professor('matemática', 2.039);

professor.nome = 'Celio';
professor.idade = 45;
professor.altura = 181;
professor.documento = 123456;

professor.exibirInfos();

// praticar a instância da classe Aluno
let aluno = new Aluno('Historia', 299);

aluno.nome = 'Samuel';
aluno.idade = 3;
aluno.altura = 181;
aluno.documento = 123456;

aluno.exibirInfos();

// 5ª abordagem: outro modo mecanismo de herança
class Pessoa {

    // caracteristicas gerais
    altura
    nome
    idade
    documento

    constructor(altura, nome, idade, documento) {
        this.altura = altura;
        this.nome = nome;
        this.idade = idade;
        this.documento = documento;
    }

    // metodo pertencente a classe Pesso{}
    informacoesPessoais() {
        return `Pessoal, tudo bem? Meu nome é ${this.nome}, tenho ${this.idade}, minha altura é de ${this.altura}cm e meu numero de documento é ${this.documento}.`;
    }
}

class Professor extends Pessoa {

    discMinistrada
    salario

    constructor(altura, nome, idade, documento, discMinistrada, salario) {
        super(altura, nome, idade, documento); // faz referência direta ao método construtor da classe pai
        this.discMinistrada = discMinistrada;
        this.salario = salario;
    }

    // sobrescrita do método informacoesPessoais(){} descrito na classe-pai
    informacoesPessoais() {
        return `${super.informacoesPessoais()} Sou professor de ${this.discMinistrada} e ganho miseros ${this.salario} reais`;
    }
}

let professor = new Professor(181, 'Celio', 45, 987654, 'matemática', 2039);

alert(professor.informacoesPessoais())