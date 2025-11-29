import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Marca } from '../types/vendas.types';

type Props = {
  marca?: Marca;
};

export default function GraficoVendas({ marca }: Props) {
  if (!marca) {
    return <div>Selecione uma marca para ver o gráfico.</div>;
  }

  // usa as vendas da marca (espera meses Jan..Abr no mock)
  const data = marca.vendas;

  return (
    <div style={{ width: '100%', height: 350 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip formatter={(value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />
          <Legend />
          <Line type="monotone" dataKey="valor" name={marca.nome} stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
