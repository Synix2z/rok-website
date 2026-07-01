import { Link } from 'react-router-dom'
import { useEffect } from "react";

/* Components */
import Separator from '../components/separator-section/Separator'
import About from './sections/about/About'
import Commanders from './sections/commanders/Commanders'
import Statistics from './sections/statistics/Statistics'
import FadeIn from '../components/fade-in/FadeIn'

import styles from './mainPage.module.css'

function MainPage() {
  return (
    <div className={styles.content}>
      <FadeIn delay={0}>
        <About />
      </FadeIn>

      <Separator />

      <FadeIn delay={100}>
        <Commanders />
      </FadeIn>

      <Separator />

      <FadeIn delay={200}>
        <Statistics />
      </FadeIn>
    </div>
  );
}

export default MainPage;