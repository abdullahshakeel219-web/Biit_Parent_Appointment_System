import './Input.css';

function Input({ label, type='text', placeholder, name, id,value,onChange }) {
  return (
    <div className="input-group">
      <label className="input-label" htmlFor={id}>
        {label}
      </label>

      <input
        className="input-field"
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;