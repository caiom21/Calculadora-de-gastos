import { categoria, ListaGastoPorCategoria } from "./Definição_das_classes.js";
import { ValorNegativo, AtualizarInterface } from "./Funções auxiliares.js";

console.log('iniciando app.js');

const gastosPorCategoria = new ListaGastoPorCategoria(
  new categoria("Alimentação"),
  new categoria("Transporte"),
  new categoria("Lazer"),
  new categoria("Outros")
);

console.log('gastosPorCategoria criado:', gastosPorCategoria);

const formulario = document.querySelector("form");
console.log('formulario encontrado?', formulario);

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const valorInformado = formulario.elements.valor.value;
  const categoriaInformada = formulario.elements.categoria.value;

  console.log('valorInformado:', valorInformado);
  console.log('categoriaInformada:', categoriaInformada);

  if (ValorNegativo(valorInformado)) {
    alert('Valor invalido, o valor não pode ser negativo.');
    return;
  }

  const cat = gastosPorCategoria.obterCategozriaPorNome(categoriaInformada);
  console.log('categoria retornada:', cat);

  if (!cat) {
    alert('Categoria não encontrada: ' + categoriaInformada);
    return;
  }

  cat.adicionarValor(valorInformado);

  AtualizarInterface(gastosPorCategoria);
  formulario.reset();
});
