// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Accommodations from '../../utils/accommodations.json'
import '../../utils/styles/Cards.css'

function Cards() {
  const data = Accommodations
  const navigate = useNavigate()

  return (
    <section className="home_accommodations">
      {data.map((elem) => {
        return (
          <article
            key={elem.id}
            className="accommodation_card"
            onClick={() => navigate(`logement/${elem.id}`)}
            style={{ backgroundImage: `url(${elem.cover})` }}
          >
            <div className="accommodation_card_filter">
              <h2 className="accommodation_card_title">{elem.title}</h2>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Cards

//   div className="card" key={logement.id}>
// 	 <img className="img" src={logement.cover} alt="logement" />
