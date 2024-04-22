// cria a classe class
export class Produto {
    _id
    _nome
    _preco
    _estoque

    // metodos get e set
    get id() {
        return this._id;
    }
    set id(value) {
        if (isNaN(value) || !Number.isInteger(value) || value < 0) {
            throw new Error('O valor do ID deve ser um número inteiro positivo')
        }
        this._id = value;
    }

    get nome() {
        return this._nome;
    }
    set nome(value) {
        if (!isNaN(value)) {
            throw new Error('Nome digitado inválido!')
        }
        this._nome = value;
    }

    get preco() {
        return this._preco;
    }
    set preco(value) {
        if (value <= 0 || isNaN(value) || value === null) {
            throw new Error('Valor digitado inválido')
        }
        this._preco = value;
    }

    get estoque() {
        return this._estoque;
    }
    set estoque(value) {
        if (isNaN(value) || !Number.isInteger(value) || value < 0) {
            throw new Error('O valor digitado deve ser um número inteiro positivo')
        }
        this._estoque = value;
    }
    // implementa o construtor
    constructor(id, nome, preco, estoque) {
        this._id = id;
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    // implementa os métodos da classe Produto
    atualizarPreco(novoPreco) {
        this.preco = novoPreco;
        alert(`Preço do produto ${this.nome} atualizado com sucesso!\nPreço atual: R$ ${(this.preco).toFixed(2)}`)
    }

    adicionarUnidadeEstoqueDoProduto(qtd) {
        this.estoque += qtd;
        alert(`Estoque do produto ${this.nome} atualizado com sucesso!\nEstoque atual: ${this.estoque} itens`)
    }

    removerUnidadeEstoqueDoProduto(qtd) {
        if (this.estoque === 0) {
            alert('Atenção! O estoque está vazio')
        } else if (this.estoque < qtd) {
            alert(`O estoque não possui quantidade suficiente deste produto.\nEstoque atual: ${this.estoque}`)
        } else {
            this.estoque -= qtd;
            alert(`Estoque do produto ${this.nome} atualizado com sucesso!\nEstoque atual: ${this.estoque} itens`)
        }
    }

    exibirProduto() {
        alert(`Produto ${this.nome}:\nID: ${this.id}\nNome: ${this.nome}\nPreço: R$ ${(this.preco).toFixed(2)}\nEstoque: ${this.estoque} unidades`);
    }
}
