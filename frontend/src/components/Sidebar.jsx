import { NavLink } from 'react-router-dom'
import './Sidebar.css'

function Sidebar({ links, title }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">{title}</div>

      <nav>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <button className="sidebar-logout">Logout</button>
    </aside>
  )
}

export default Sidebar