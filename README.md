# 📊 Dashboard de Vendas — React + Vite + TypeScript

Este projeto foi desenvolvido como parte de um desafio técnico, onde o objetivo é criar uma interface que contenha:

- Três selects dependentes: **Categoria → Produto → Marca**
- Um gráfico exibindo vendas dos **4 primeiros meses do ano** para a marca selecionada
- Dados carregados via **mock JSON**
- Interface responsiva e organizada
- Arquitetura limpa e escalável

---

## 🚀 Tecnologias Utilizadas

- **React 19**
- **Vite**
- **TypeScript**
- **Bootstrap 5**
- **React-Bootstrap**
- **Bootstrap Icons**
- **Recharts** (gráficos)
- Arquitetura baseada em **features**

---

## 📁 Estrutura de Pastas

A arquitetura foi projetada seguindo boas práticas adotadas por empresas:
src/
components/
 Menu.tsx
api/
 data/
  mockVendas.json
features/
 vendas/
 components/
  FiltroSelect.tsx
  GraficoVendas.tsx
hooks/
 useVendas.ts
pages/
 DashboardVendasPage.tsx
services/
 vendas.service.ts
types/
 vendas.types.ts
App.tsx
main.tsx


### ✨ Por que essa arquitetura?

- **Organização por feature/domínio** (e não por tecnologia)
- Facilita escalabilidade e manutenção
- Backends ou telas adicionais podem ser adicionados facilmente
- Código altamente reaproveitável e testável

---

## 🛠️ Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/lucasthiagomiguel/dashboard-vendas.git
cd dashboard-vendas
npm install
npm run dev

## Acesse no navegador http://localhost:5173

## Os dados utilizados para categorias, produtos, marcas e vendas estão em:
src/data/mockVendas.json
##. Como testar

 - Selecionar diferentes categorias altera produtos e marcas

 - Selecionar produtos altera marcas

 - Selecionar a marca altera o gráfico

 - O gráfico sempre mostra Jan → Abr

 - Interface deve ser totalmente responsiva


# Autor

- Lucas Souza Santos
- Full Stack Developer — Node • React • Go • Python
- GitHub: https://github.com/lucasthiagomiguel
