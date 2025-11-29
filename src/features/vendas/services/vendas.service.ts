import mock from '../../../api/data/mockVendas.json';
import type { MockVendas } from '../types/vendas.types';

export const vendasApi = {
  // simula uma chamada async
  async fetchAll(): Promise<MockVendas> {
    return new Promise((res) => setTimeout(() => res(mock as MockVendas), 250));
  }
};
