import { NavLink, Link } from 'react-router-dom'
import { site, navLinks } from '../data/site.js'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-logo">A</span> {site.name}
        </Link>
        <nav className="nav-links">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
