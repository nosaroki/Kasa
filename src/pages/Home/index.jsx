import Banner from '../../components/Banner'
import Cards from '../../components/Cards'

function Home() {
  document.title = 'Kasa - Accueil'
  return (
    <main>
      <Banner />
      <Cards />
    </main>
  )
}
export default Home
