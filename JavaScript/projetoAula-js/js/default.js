// definir a função
function outraFuncao() {
  let texto = "Olá!";
  return texto;
}

function usandoValorDefault(nome, dialogo = outraFuncao()) {
  /* outraFuncao() somente será chamada a sua execução se e somente se não ocorrer
    nenhum tipo de argumentação para o parâmetro */
  alert(nome + ": " + dialogo);
}

usandoValorDefault("Bárbara");

/* // definir uma nova função para lidar com valores-padrão (default)
function usoValorDefault(nome = 'Vinicius', dialogo) {
    console.log(nome + ':' + dialogo);
}


// 2ª chamada da função
usoValorDefault(undefined, 'Aquele abraço!') */
