export class categoria {
  #nome;
  #valor;

  constructor(nome) {
    this.#nome = nome;
    this.#valor = 0;
  }

  get valor() {
    return this.#valor;
  }

  get nome() {
    return this.#nome;
  }

  adicionarValor(valor) {
    this.#valor += parseFloat(valor);
  }
}

export class ListaGastoPorCategoria {
  #categoria;

  constructor(...categoria) {
    this.#categoria = categoria;
    console.log('ListaGastoPorCategoria criada com:', this.#categoria);
  }

  get categorias() {
    return this.#categoria;
  }

  obterCategoriaPorNome(nome) {
    console.log('nome recebido em obterCategoriaPorNome:', nome);
    console.log('todas as categorias dentro da lista:', this.#categoria);

    return this.#categoria.find(cat => {
      console.log('comparando:', cat.nome, '===', nome);
      return cat.nome === nome;
    });
  }

  obtertotal() {
    return this.#categoria.reduce(
      (total, cat) => total + cat.valor, 0
    );
}
}