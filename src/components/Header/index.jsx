import { Link } from 'react-router-dom'
import '../../utils/styles/Header.css'
import Logo from '../../assets/red-logo.png'

function Header() {
  return (
    <header>
      <nav className="nav_container">
        <Link to="/">
          <img className="home_logo" src={Logo} alt="Logo Kasa" />
        </Link>
        <div>
          <Link className="nav_link" to="/">
            Accueil
          </Link>
          <Link className="nav_link" to="/a-propos">
            À propos
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
