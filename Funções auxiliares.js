const ObeterElementos = id => document.getElementById(id);

export const ValorNegativo = valor => parseFloat(valor) < 0;

export const AtualizarInterface = gastosPorCategoria => {
  const categorias = gastosPorCategoria.categorias;
  console.log('AtualizarInterface - categorias:', categorias);

  categorias.forEach(({ nome, valor }) => {
    console.log('AtualizarInterface - atualizando:', nome, valor);
    const elemento = ObeterElementos(nome);
    console.log('elemento encontrado para', nome, ':', elemento);
    if (elemento) {
      elemento.textContent = `${nome}: R$ ${valor}`;
    }
  });

  const elementoTotal = ObeterElementos("Total");
  console.log('elementoTotal:', elementoTotal);
  if (elementoTotal) {
    elementoTotal.textContent = `Total: R$ ${gastosPorCategoria.obtertotal()}`;
}
};