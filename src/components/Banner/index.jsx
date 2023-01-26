import Logo from '../../assets/banner.png'
import '../../utils/styles/Banner.css'

function Banner() {
  return (
    <div className="banner">
      <img className="banner_img" src={Logo} alt="Bannière - forêt" />
      <div className="banner_text">
        <h1 className="banner_text_p1">Chez vous, </h1>
        <h1 className="banner_text_p2">partout et ailleurs</h1>
      </div>
    </div>
  )
}

export default Banner
