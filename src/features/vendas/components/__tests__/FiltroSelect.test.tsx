import { render, screen } from '@testing-library/react'
import Menu from '../../../../components/MenuComponent'

describe('Menu', () => {
  it('renders brand name', () => {
    render(<Menu />)
    expect(screen.getByText('Sales Report')).toBeInTheDocument()
  })

  it('renderiza links principais', () => {
    render(<Menu />)

    expect(screen.getByText('Início')).toBeInTheDocument()
    expect(screen.getByText('Vendas')).toBeInTheDocument()
    expect(screen.getByText('Relatórios')).toBeInTheDocument()
  })

})
