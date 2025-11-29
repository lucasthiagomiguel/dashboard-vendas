import mock from '../../../api/data/mockVendas.json';
import type { MockVendas, VendaMes } from '../types/vendas.types';

export const vendasApi = {
  // simula uma chamada async
  async fetchAll(): Promise<MockVendas> {
    return new Promise((res) => setTimeout(() => res(mock as MockVendas), 250));
  }
  
};

export function getCategorias() {
  return mock.categorias;
}

export function getProdutos(categoriaId: string) {
  const categoria = mock.categorias.find((c) => c.id === categoriaId);
  return categoria?.produtos ?? [];
}

export function getMarcas(produtoId: string) {
  for (const categoria of mock.categorias) {
    const produto = categoria.produtos.find((p) => p.id === produtoId);
    if (produto) return produto.marcas;
  }
  return [];
}

export function getVendasPorMarca(marcaId: string) {
  for (const categoria of mock.categorias) {
    for (const produto of categoria.produtos) {
      const marca = produto.marcas.find((m) => m.id === marcaId);
      if (marca) return marca.vendas ?? [];
    }
  }
  return undefined;
}
