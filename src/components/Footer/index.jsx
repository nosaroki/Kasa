import '../../utils/styles/Footer.css'
import Logo from '../../assets/white-logo.png'

function Footer() {
  return (
    <footer>
      <img className="footer_img" src={Logo} alt="Logo Kasa" />
      <span className="footer_span">© 2020 Kasa. All rights reserved</span>
    </footer>
  )
}

export default Footer
