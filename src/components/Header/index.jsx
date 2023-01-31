import { NavLink } from 'react-router-dom'
import '../../utils/styles/Header.css'
import Logo from '../../assets/red-logo.png'

function Header() {
  return (
    <header>
      <nav className="nav_container">
        <NavLink to="/">
          <img className="home_logo" src={Logo} alt="Logo Kasa" />
        </NavLink>
        <div>
          <NavLink className="nav_link" to="/">
            Accueil
          </NavLink>
          <NavLink className="nav_link" to="/a-propos">
            À propos
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
