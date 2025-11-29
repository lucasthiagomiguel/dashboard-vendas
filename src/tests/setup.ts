import '@testing-library/jest-dom'
// Mock do offsetWidth/offsetHeight para Recharts funcionar
Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
  configurable: true,
  value: 500
})

Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
  configurable: true,
  value: 300
})

// Mock de getBBox (usado por SVG)
SVGElement.prototype.getBBox = () => ({
  x: 0,
  y: 0,
  width: 500,
  height: 300
})
