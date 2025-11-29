import { render, screen } from '@testing-library/react'
import GraficoVendas from '../GraficoVendas'

describe('GraficoVendas', () => {

  it('mostra mensagem quando nenhuma marca é selecionada', () => {
    render(<GraficoVendas />)
    expect(screen.getByText(/Selecione uma marca/i)).toBeInTheDocument()
  })

})
