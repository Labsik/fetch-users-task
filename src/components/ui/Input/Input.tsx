type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const Input = ({ value, onChange }: Props) => {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
