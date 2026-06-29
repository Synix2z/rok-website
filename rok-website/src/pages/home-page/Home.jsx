import { Link } from 'react-router-dom'
import Separator from '../../components/separator-section/Separator'
import Title from '../../components/title-section/Title'
import styles from './home.module.css'

function Home() {
  return (
    <div className={styles.content}>
      <Title text="About" />
      <Separator />
    </div>
  )
}

export default Home