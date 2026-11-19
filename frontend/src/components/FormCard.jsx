import './FormCard.css'

function FormCard({ title, subtitle, children }) {
  return (
    <div className="form-card">
      {title && <h2 className="form-card-title">{title}</h2>}
      {subtitle && <p className="form-card-subtitle">{subtitle}</p>}
      {children}
    </div>
  )
}

export default FormCard