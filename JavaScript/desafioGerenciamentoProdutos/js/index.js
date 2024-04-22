// import das classes Produto e ProdutoImportado
import { Produto } from "./classeProduto.js";
import { ProdutoImportado } from "./classeProdutoImportado.js";

// aplicando teste dos métodos da classe Produto

// instancia objeto da classe Produto 
let blusa = new Produto(1, 'Blusa', 29.9, 15);

try {
    // adicionando itens ao estoque de Blusas
    blusa.exibirProduto();
    let qtdAdicionada = Number(prompt('Digite a quantidade de itens que irá adicionar ao estoque:'));
    blusa.adicionarUnidadeEstoqueDoProduto(qtdAdicionada);
    blusa.exibirProduto();

    // removendo itens do estoque de Blusas
    let qtdRemovida = Number(prompt('Quanto itens serão vendidos nessa compra?'));
    blusa.removerUnidadeEstoqueDoProduto(qtdRemovida);
    blusa.exibirProduto();

    // atualizando o preço
    let novoPreco = parseFloat(prompt('Digite o novo valor do produto:'));
    blusa.atualizarPreco(novoPreco);
    blusa.exibirProduto();
} catch (erro) {
    alert(`Ocorreu um erro: ${erro.message}`)
}

// aplicando teste dos métodos da herança de classe - classe ProdutoImportado

// instancia objeto da classe ProdutoImportado 
let blusaImportada = new ProdutoImportado(2, 'Blusa Importada', 47.9, 5, 'China', 17);

try {
    // adiciona itens ao estoque de Blusas Importadas
    blusaImportada.exibirProduto();
    let qtdAdicionada = Number(prompt('Digite a quantidade de itens que irá adicionar ao estoque:'));
    blusaImportada.adicionarUnidadeEstoqueDoProduto(qtdAdicionada);
    blusaImportada.exibirProduto();

    // remove itens do estoque de Blusas Importadas
    let qtdRemovida = Number(prompt('Quanto itens serão vendidos nessa compra?'));
    blusaImportada.removerUnidadeEstoqueDoProduto(qtdRemovida);
    blusaImportada.exibirProduto();

    // atualiza o preço
    let novoPreco = parseFloat(prompt('Digite o novo valor do produto:'));
    blusaImportada.atualizarPreco(novoPreco);
    blusaImportada.exibirProduto();
} catch (erro) {
    alert(`Ocorreu um erro: ${erro.message}`)
}
