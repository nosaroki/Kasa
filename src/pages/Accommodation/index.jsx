import React from 'react'
import { useParams } from 'react-router-dom'
import '../../utils/styles/Accommodation.css'
import Accommodations from '../../utils/accommodations.json'
import Collapse from '../../components/Collapse'
import NotFound from '../NotFound'
import Carrousel from '../../components/Slideshow'
// import Tags from '../../components/Tags'
// import Rating from '../../components/Rating'

function Accomodation() {
  const { id } = useParams(window.location.href)
  console.log("Voilà l'appartement numéro " + id)

  const accommodation = Accommodations.find((object) => object.id === id)
  if (!accommodation) return <NotFound />

  return (
    <main className="accommodation">
      <Carrousel slideshow={accommodation.pictures} />
      <section className="accommodation_top">
        <div className="accommodation_details_left">
          <h1 className="accommodation_title">{accommodation.title}</h1>
          <h2 className="accommodation_location">{accommodation.location}</h2>
          {/* <Tags tags={accommodation.tags} /> */}
          <div> tag={accommodation.tags} </div>
        </div>
        <div className="accommodation_details_right">
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img
            src={accommodation.host.picture}
            // eslint-disable-next-line no-template-curly-in-string
            alt="{`Photo de '${accommodation.host.name}`}"
          />
          {/* <Rating rating={accommodation.rating}/> */}
          <div>rating={accommodation.rating}</div>
        </div>
      </section>
      <section className="accommodation_collapse">
        <Collapse
          className="accommodation_collapse_description"
          props={accommodation.description}
          title="Description"
        />
        <Collapse
          className="accommodation_collapse_equipments"
          props={accommodation.equipments}
          title="Équipements"
        />
      </section>
    </main>
  )
}

export default Accomodation
