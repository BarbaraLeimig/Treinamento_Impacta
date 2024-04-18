// O JavScript não possui um conjunto de instruções para a definição formal de uma interface. Nem mesmo a palavra INterface existe na linguagem. Dessa forma, propõe algo similar ao comportamento de uma interface.

// definir uma "interface": abaixo a const Forma "assume" o papel de uma interface para que seja associada a uma classe
const Forma = {
    calcularArea: function() {
        throw new Error('Este método DEVE ser implementado quando referenciado dentro de uma classe')
    }
} // obs: o nome desse trecho de código é OBJETO LITERAL. Objeto Literal - é sempre baseado em pares chave-valor -> key-value

// definir uma nova classe
class Retangulo{
    // definir o construtor da classe com 2 parâmetros
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    // tentativa de acesso ao método "intrface"
    calcularArea() {
        return this.largura * this.altura;
    }
}

// definir uma função
function exibirResultado(forma) {
    alert(`Calculo da área ${forma.calcularArea()}`);
}

// definir um objeto a partir de uma classe
const retangulo = new Retangulo(5, 12);
exibirResultado(retangulo);