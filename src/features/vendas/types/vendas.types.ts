export type VendaMes = {
  mes: string;
  valor: number;
};

export type Marca = {
  id: string;
  nome: string;
  vendas: VendaMes[];
};

export type Produto = {
  id: string;
  nome: string;
  marcas: Marca[];
};

export type Categoria = {
  id: string;
  nome: string;
  produtos: Produto[];
};

export type MockVendas = {
  categorias: Categoria[];
};
