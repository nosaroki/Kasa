import Logo from '../../assets/banner.png'
import '../../utils/styles/Banner.css'

function Banner() {
  return (
    <div className="banner">
      <img className="banner_img" src={Logo} alt="Bannière - forêt" />
      <h1 className="banner_text">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner
