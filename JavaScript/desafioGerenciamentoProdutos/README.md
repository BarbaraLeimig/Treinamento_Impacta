# Sistema de Gerenciamento de Produtos

Desenvolva um sistema de gerenciamento de produtos em JavaScript utilizando classes. O sistema deve ser capaz de realizar as seguintes operações:

- Criar uma classe Produto com as seguintes propriedades privadas: (** a partir do ES11 - EcmaScript 2020 que para definir propriedades privadas convencionou-se usar o caracter # e, também, é possivel fazer uso de qualuer método publico para lidar com encapsulamento.)
	id: um identificador único do produto (número inteiro)
	nome: o nome do produto (string)
	preco: o preço do produto (número decimal)
	estoque: a quantidade em estoque do produto (número inteiro)
Implementar um construtor na classe Produto que permita inicializar as propriedades id, nome, preco e estoque no momento da criação do objeto.

Implementar métodos na classe Produto para:
	Obter o ID do produto.
	Obter o nome do produto.
	Obter o preço do produto.
	Obter a quantidade em estoque do produto.
	Atualizar o preço do produto.
	Adicionar unidades ao estoque do produto.
	Remover unidades do estoque do produto.

Criar instâncias da classe Produto e realizar operações como adicionar unidades ao estoque, remover unidades do estoque e atualizar o preço.
Testar o sistema criado com exemplos de uso, demonstrando a funcionalidade de todas as operações implementadas.

Crie, também, uma classe chamada ProdutoImportado, que herda as propriedades e métodos da classe Produto, e adiciona uma nova propriedade específica para produtos importados, como por exemplo, o país de origem e taxa de importação de um determinado produto.