import {
  getCategorias,
  getProdutos,
  getMarcas,
  getVendasPorMarca,
  vendasApi
} from '../vendas.service'

import mock from '../../../../api/data/mockVendas.json'

describe('vendas.service', () => {

  it('deve retornar todas as categorias', () => {
    const categorias = getCategorias()
    expect(categorias).toHaveLength(mock.categorias.length)
  })

  it('deve retornar produtos de uma categoria válida', () => {
    const categoriaId = mock.categorias[0].id
    const produtos = getProdutos(categoriaId)

    expect(produtos.length).toBeGreaterThan(0)
  })

  it('deve retornar lista vazia se a categoria não existir', () => {
    const produtos = getProdutos('categoria-invalida')
    expect(produtos).toEqual([])
  })

  it('deve retornar marcas de um produto válido', () => {
    const categoria = mock.categorias[0]
    const produto = categoria.produtos[0]

    const marcas = getMarcas(produto.id)

    expect(marcas.length).toBeGreaterThan(0)
  })

  it('deve retornar lista vazia para produto inexistente', () => {
    expect(getMarcas('produto-inexistente')).toEqual([])
  })

 it('deve retornar vendas para uma marca válida', () => {
  const marcaValida = mock.categorias[0].produtos[0].marcas[0].id
  const vendas = getVendasPorMarca(marcaValida)

  expect(vendas).toHaveLength(4) // 4 vendas no ano, por ex. 4 meses

  expect(vendas[0]).toHaveProperty('mes')
  expect(vendas[0]).toHaveProperty('valor')
})

  it('deve retornar undefined para marca inválida', () => {
    expect(getVendasPorMarca('marca-inexistente')).toBeUndefined()
  })

  it('fetchAll deve retornar dados do mock', async () => {
    const res = await vendasApi.fetchAll()
    expect(res).toEqual(mock)
  })
})
