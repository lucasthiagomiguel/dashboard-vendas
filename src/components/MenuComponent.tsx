import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";


export default function Menu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Sales Report</Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-navbar" />

        <Navbar.Collapse id="menu-navbar">
          <Nav className="me-auto">
            <Nav.Link href="/">Início</Nav.Link>
            <Nav.Link href="/vendas">Vendas</Nav.Link>
            <Nav.Link href="/relatorios">Relatórios</Nav.Link>
          </Nav>

          {'teste'}
          <Nav>
            <NavDropdown
              title={
                <span>
                  <i className="bi bi-person-circle fs-5"></i>
                </span>
              }
              id="user-menu"
              align="end"
            >
              <NavDropdown.Header>
                Usuário Teste
              </NavDropdown.Header>
              <NavDropdown.Item href="#profile">Meu Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Configurações</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
