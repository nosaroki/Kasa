import { Link } from 'react-router-dom'
import '../../utils/styles/NotFound.css'

function NotFound() {
  document.title = 'Kasa - Page introuvable'
  return (
    <main className="main_error">
      <div className="main_error_content">
        <h1 className="main_error_h1">404</h1>
        <h2 className="main_error_text">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link className="main_error_link" to="/">
          Retourner sur la page d'Accueil
        </Link>
      </div>
    </main>
  )
}
export default NotFound
