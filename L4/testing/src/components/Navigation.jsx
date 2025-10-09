import { Link, useLocation } from 'react-router'

const Navigation = () => {

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">Testing</span>
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={'/'} className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/pizzas'} className={`nav-link ${isActive('/pizzas') ? 'active' : ''}`}>
                Pizze
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/users'} className={`nav-link ${isActive('/users') ? 'active' : ''}`}>
                Tutti gli utenti
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/user-search'} className={`nav-link ${isActive('/user-search') ? 'active' : ''}`}>
                Cerca utenti
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/user-table'} className={`nav-link ${isActive('/user-table') ? 'active' : ''}`}>
                Tabella utenti
              </Link>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation