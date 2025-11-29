
import { useVendas } from '../hooks/useVendas';
import FiltroSelect from '../components/FiltroSelect';
import GraficoVendas from '../components/GraficoVendas';

export default function DashboardVendasPage() {
  const {
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
  } = useVendas();

  return (
    <div className="container py-4">
        <div className="text-center pb-4">
            <small className="mb-4 text-center"><strong> Sales By Month For:</strong></small>
        </div>

      {loading ? (
        <div>Carregando...</div>
      ) : (
        <>
          <div className="row mb-4">
            <div className="col-12 col-md-4">
              <FiltroSelect
                label="Categoria"
                value={categoriaId}
                options={categorias.map((c) => ({ id: c.id, label: c.nome }))}
                onChange={(id) => {
                  selectCategoria(id);
                  // eslint-disable-next-line no-constant-binary-expression
                  const cat = categorias.find((c) => c.id === id ?? '');
                  if (cat && cat.produtos.length === 1) {
                    selectProduto(cat.produtos[0].id);
                  }
                }}
                placeholder="Selecione a categoria"
              />
            </div>

            <div className="col-12 col-md-4">
              <FiltroSelect
                label="Produto"
                value={produtoId}
                options={produtos.map((p) => ({ id: p.id, label: p.nome }))}
                onChange={(id) => {
                  selectProduto(id);
                  // se houver apenas 1 marca no produto, selecione-a automaticamente
                  // eslint-disable-next-line no-constant-binary-expression
                  const prod = produtos.find((p) => p.id === id ?? '');
                  if (prod && prod.marcas.length === 1) {
                    selectMarca(prod.marcas[0].id);
                  }
                }}
                placeholder="Selecione o produto"
              />
            </div>

            <div className="col-12 col-md-4">
              <FiltroSelect
                label="Marca"
                value={marcaId}
                options={marcas.map((m) => ({ id: m.id, label: m.nome }))}
                onChange={(id) => selectMarca(id)}
                placeholder="Selecione a marca"
              />
            </div>
          </div>

          <div className="card p-3">
            <GraficoVendas marca={selectedMarca} />
          </div>
        </>
      )}
    </div>
  );
}
