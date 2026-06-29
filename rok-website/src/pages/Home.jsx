import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Accueil</h1>
      <Link to="/about">Aller vers About</Link>
    </div>
  )
}

export default Home