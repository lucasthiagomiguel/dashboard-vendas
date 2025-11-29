import { renderHook, act, waitFor } from '@testing-library/react'
import { useVendas } from './useVendas'
import mockData from '../../../api/data/mockVendas.json'

describe('useVendas', () => {
   it('carrega categorias na inicialização', async () => {
    const { result } = renderHook(() => useVendas())

    await waitFor(() => {
      expect(result.current.categorias).toEqual(
        mockData.categorias.map(c => ({ label: c.nome, value: c.id }))
      )
    })
  })

  it('altera produtos quando categoria muda', async () => {
        const { result } = renderHook(() => useVendas())

        // espera categorias carregarem
        await waitFor(() => {
            expect(result.current.categorias.length).toBeGreaterThan(0)
        })

        // escolhe a primeira categoria
        act(() => {
            result.current.selectCategoria(result.current.categorias[0].value)
        })

        // agora deve ter produtos
        await waitFor(() => {
            expect(result.current.produtos.length).toBeGreaterThan(0)
        })
    })
})
