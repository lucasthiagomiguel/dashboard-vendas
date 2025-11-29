
type Option = { id: string; label: string };

type Props = {
  label?: string;
  value: string | null;
  options: Option[];
  onChange: (id: string | null) => void;
  placeholder?: string;
};

export default function FiltroSelect({ label, value, options, onChange, placeholder }: Props) {
  return (
    <div className="mb-3">
      {label && <label className="form-label">{label}</label>}
      <select
        className="form-select"
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value ? e.target.value : null)}
      >
        <option value="">{placeholder ?? 'Selecione'}</option>
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
