import React from 'react'
import Mountains from '../../assets/mountains.png'
import Collapse from '../../components/Collapse'
import '../../utils/styles/About.css'

function About() {
  document.title = 'Kasa - À propos'
  const data = [
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  ]
  return (
    <div>
      <main className="about">
        <img className="about_img" src={Mountains} alt="Montagnes" />
        <div className="about_collapse">
          <Collapse props={data[0]} title={'Fiabilité'} />
          <Collapse props={data[1]} title={'Respect'} />
          <Collapse props={data[2]} title={'Service'} />
          <Collapse props={data[3]} title={'Sécurité'} />
        </div>
      </main>
    </div>
  )
}

export default About
