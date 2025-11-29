import { useEffect, useMemo, useState } from 'react';
import type { Categoria, Marca, Produto } from '../types/vendas.types';
import { vendasApi } from '../services/vendas.service';

export function useVendas() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaId, setCategoriaId] = useState<string | null>(null);
  const [produtoId, setProdutoId] = useState<string | null>(null);
  const [marcaId, setMarcaId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    vendasApi.fetchAll().then((data) => {
      setCategorias(data.categorias);
      // pre-seleciona a primeira categoria/produto/marca se quiser
      if (data.categorias.length > 0) {
        setCategoriaId(data.categorias[0].id);
        const firstProduto = data.categorias[0].produtos?.[0];
        if (firstProduto) {
          setProdutoId(firstProduto.id);
          const firstMarca = firstProduto.marcas?.[0];
          if (firstMarca) setMarcaId(firstMarca.id);
        }
      }
      setLoading(false);
    });
  }, []);

  // produtos filtrados pela categoria selecionada
  const produtos = useMemo<Produto[]>(() => {
    if (!categoriaId) return [];
    const cat = categorias.find((c) => c.id === categoriaId);
    return cat?.produtos ?? [];
  }, [categorias, categoriaId]);

  // marcas filtradas pelo produto selecionado
  const marcas = useMemo<Marca[]>(() => {
    if (!produtoId) return [];
    const prod = produtos.find((p) => p.id === produtoId);
    return prod?.marcas ?? [];
  }, [produtos, produtoId]);

  // marca selecionada
  const selectedMarca = useMemo<Marca | undefined>(() => {
    return marcas.find((m) => m.id === marcaId);
  }, [marcas, marcaId]);

  // helpers para atualizar seleção mantendo dependências
  function selectCategoria(id: string | null) {
    setCategoriaId(id);
    // reset produto e marca
    setProdutoId(null);
    setMarcaId(null);
  }

  function selectProduto(id: string | null) {
    setProdutoId(id);
    setMarcaId(null);
  }

  function selectMarca(id: string | null) {
    setMarcaId(id);
  }

  return {
    loading,
    categorias,
    categoriaId,
    produtos,
    produtoId,
    marcas,
    marcaId,
    selectedMarca,
    selectCategoria,
    selectProduto,
    selectMarca
  };
}
