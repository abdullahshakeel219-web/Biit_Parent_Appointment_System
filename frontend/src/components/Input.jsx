import './Input.css';

function Input({ label, type, placeholder, name, id }) {
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
      />
    </div>
  );
}

export default Input;