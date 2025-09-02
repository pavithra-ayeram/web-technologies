// Input Field Component
export default function InputField({ value, onChange, placeholder, min = 0, max = 59 }) {
  const handleChange = (e) => {
    let val = Number(e.target.value);
    if (val < min) val = min;
    if (val > max) val = max;
    onChange(val);
  };

  return (
    <input
      type="number"
      className="input-field"
      value={value}
      min={min}
      max={max}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}
