import { Produto } from "./classeProduto.js";

export class ProdutoImportado extends Produto {
    _paisOrigem
    _taxaImportacao

    // métodos get e set
    get paisOrigem() {
        return this._paisOrigem;
    }
    set paisOrigem(value) {
        if (!isNaN(value)) {
            throw new Error('País digitado inválido!');
        }
        this._paisOrigem = value;
    }

    get taxaImportacao() {
        return this._taxaImportacao;
    }
    set taxaImportacao(value) {
        if (value <= 0 || isNaN(value) || value === null) {
            throw new Error('Valor digitado inválido');
        }
        this._taxaImportacao = value;
    }

    // implementa o construtor
    constructor(id, nome, preco, estoque, paisOrigem, taxaImportacao) {
        super(id, nome, preco, estoque);
        this.paisOrigem = paisOrigem;
        this.taxaImportacao = taxaImportacao;
    }

    // Métodos da classe ProdutoImportado
    calcularPrecoComTaxa() {
        return this.preco + (this.preco * (this.taxaImportacao / 100));
    }

    atualizarPreco(novoPreco) {
        this.preco = novoPreco;
        let precoComTaxa = this.calcularPrecoComTaxa();
        alert(`Preço do produto ${this.nome} atualizado com sucesso!\nPreço atual: R$ ${precoComTaxa.toFixed(2)}`)
    }

    adicionarUnidadeEstoqueDoProduto(qtd) {
        super.adicionarUnidadeEstoqueDoProduto(qtd);
    }

    removerUnidadeEstoqueDoProduto(qtd) {
        super.removerUnidadeEstoqueDoProduto(qtd);
    }

    exibirProduto() {
        let precoComTaxa = this.calcularPrecoComTaxa();

        // O preço a ser exibido já inclui a taxa de importação no valor do produto
        alert(`Produto Importado ${this.nome}:\nID: ${this.id}\nNome: ${this.nome}\nPreço: R$ ${precoComTaxa.toFixed(2)}\nEstoque: ${this.estoque} unidades\nPaís de Origem: ${this.paisOrigem}\nTaxa de Importação: ${this.taxaImportacao}%`)
    }

}