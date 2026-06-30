import { Link } from 'react-router-dom'
import { useEffect } from "react";

/* Components */
import Separator from '../../components/separator-section/Separator'
import Title from '../../components/title-section/Title'
import CommandersGrid from '../../components/commander-grid/CommanderGrid'
import Inscription from '../../components/inscription/Inscription'

import profileImage from "../../images/profile.jpg";
import styles from './home.module.css'

/* Infantry commanders */
import Bai_Qi from "../../images/commanders/Bai_Qi.png";
import Liu_Che from "../../images/commanders/Liu_Che.png";
import Sun_Zi_Prime from "../../images/commanders/Sun_Zi_Prime.png";
import William_Wallace from "../../images/commanders/William_Wallace.png";

/* Stuff */
import casqueImage from "../../images/stuff/Casque.png";
import capeImage from "../../images/stuff/Cape.png";
import capeRaffiImage from "../../images/stuff/Cape_Raffi.png";
import bouclierImage from "../../images/stuff/Bouclier.png";
import gantImage from "../../images/stuff/Gant.png";
import pantalonImage from "../../images/stuff/Pantalon.png";
import bottesImage from "../../images/stuff/Bottes.png";
import bottesRaffiImage from "../../images/stuff/Bottes_Raffi.png";

/* Jewellery gears */
import grandeGloireImage from "../../images/stuff/Grande_Gloire.png";
import anneauRaffiImage from "../../images/stuff/Anneau_Raffi.png";
import corneImage from "../../images/stuff/Corne.png";
import dagueImage from "../../images/stuff/Dague.png";

import Archer_Stats from "../../images/stats/Archer_Stats.png";
import Barbarian_Stats from "../../images/stats/Barbarian_Stats.png";
import Inf_Stats from "../../images/stats/Inf_Stats.png";

function Home() {
  return (
    <div className={styles.content}>
      <Title text="About" id="about-title" />

      <div className={styles.aboutContent}>
        <img src={profileImage} alt="Profile picture" className={styles.profileImage} />

        <div className={styles.aboutText}>
          <p>
            <span style={{ color: "var(--color-text-secondary)" }}>Hi</span> and <span style={{ color: "var(--color-text-secondary)" }}>welcome</span> to you !
          </p>
          <br />

          <p>
            First of all, thank you for taking the time to visit my website and view my profile.
            This project was fully created by myself using
            <span style={{ color: "var(--color-text-secondary)" }}> React</span>.
            <br />
            I wanted a cleaner and more pleasant way to present my profile instead of sending simple screenshots,
            and at the same time <span style={{ color: "var(--color-text-secondary)" }}> create a personal</span> project I could maintain and improve over time.
            I’ll try to keep it updated as best as I can.
          </p>

          <br />

          <p>
            My name is Théo, but I’m mostly known as
            <span style={{ color: "var(--color-text-secondary)" }}> Synix2z</span>.
            I enjoy playing strategic video games, especially
            <span style={{ color: "var(--color-text-secondary)" }}> Rise of Kingdoms</span>.
            I’ve been playing this game for 4 years now (since June 6, 2022).
            <br />
            I’m a French player and I play <span style={{ color: "var(--color-text-secondary)" }}> F2P</span>,
            trying to do my best to optimize everything so I don’t fall behind other players.
          </p>

          <br />

          <p>
            At the moment, I only play
            <span style={{ color: "var(--color-text-secondary)" }}> infantry commanders</span> with two marches.
            I also use <span style={{ color: "var(--color-text-secondary)" }}> farm accounts</span> to avoid running out of resources during
            <span style={{ color: "var(--color-text-secondary)" }}> KvK</span> battles.
          </p>

          <br />

          <p>
            Outside of strategy and combat, I enjoy meeting new people, having fun, sharing tips,
            and helping others so we can all progress together !
          </p>

          <br />

          <p>
            I’ll leave you to explore the rest of the site so you can find out more about my <span style={{ color: "var(--color-text-secondary)" }}> statistics</span> and my profile.
          </p>
          <p>
            If you want to talk with me in game, feel free to send me a message and adding me with this ID : <span style={{ color: "var(--color-text-secondary)" }}> 131046134</span> !
          </p>
        </div>
      </div>

      <Separator />

      <Title text="Commanders" id="commanders-title" />
      <div className={styles.commandersColumn}>

        {/* First commander */}
        <div>
          {/* Commanders header section */}
          <div className={styles.commanderHeader}>
            <img src={Sun_Zi_Prime} alt="Sun Zi Prime" className={styles.commanderHeaderImage} />
            <img src={William_Wallace} alt="William Wallace" className={styles.commanderHeaderImage} />
          </div>

          {/* Commanders grid section */}
          <CommandersGrid images={[
            casqueImage,
            bouclierImage,
            capeRaffiImage,
            gantImage,
            grandeGloireImage,
            pantalonImage,
            anneauRaffiImage,
            bottesRaffiImage,
          ]} />

          {/* Inscription section */}
          <div className={styles.inscriptionsColumn}>
            <Inscription text="Airtight" variant="legendary" />
            <Inscription text="Toppler" variant="legendary" />
            <Inscription text="Raider" variant="rare" />
            <Inscription text="Rattling" variant="rare" />
          </div>

          {/* Stats section */}
          <div className={styles.Stats}>
            <ul>
              <li><img src={Inf_Stats} alt="Infantry Stat" className={styles.statImage} /> Infantry Attack +7.2%</li>
              <li><img src={Inf_Stats} alt="Infantry Stat" className={styles.statImage} /> Infantry Defense +4.9%</li>
              <li><img src={Inf_Stats} alt="Infantry Stat" className={styles.statImage} /> Infantry Health 9.6%</li>
              <li><img src={Archer_Stats} alt="Archer Stat" className={styles.statImage} /> Archer Attack +2.6%</li>
              <li><img src={Archer_Stats} alt="Archer Stat" className={styles.statImage} /> Archer Defense +1.9%</li>
              <li><img src={Archer_Stats} alt="Archer Stat" className={styles.statImage} /> Archer March +2.8%</li>
              <li><img src={Barbarian_Stats} alt="Barbarian Stat" className={styles.statImage} /> Barbarian Attack <span>+6.6%</span></li>
            </ul>
          </div>
        </div>

        {/* Second commander */}
        <div>
          {/* Commanders header section */}
          <div className={styles.commanderHeader}>
            <img src={Bai_Qi} alt="Bai Qi" className={styles.commanderHeaderImage} />
            <img src={Liu_Che} alt="Liu Che" className={styles.commanderHeaderImage} />
          </div>

          {/* Commanders grid section */}
          <CommandersGrid images={[
            casqueImage,
            bouclierImage,
            capeImage,
            gantImage,
            corneImage,
            pantalonImage,
            dagueImage,
            bottesImage,
          ]} />

          {/* Inscription section */}
          <div className={styles.inscriptionsColumn}>
            <Inscription text="Toppler" variant="legendary" />
            <Inscription text="Requital" variant="common" />
            <Inscription text="Shielded" variant="common" />
          </div>

          {/* Stats section */}
          <div className={styles.Stats}>
            <ul>
              <li><img src={Inf_Stats} alt="Infantry Stat" className={styles.statImage} /> Infantry Attack +9.9%</li>
              <li><img src={Inf_Stats} alt="Infantry Stat" className={styles.statImage} /> Infantry Defense +9.9%</li>
              <li><img src={Inf_Stats} alt="Infantry Stat" className={styles.statImage} /> Infantry Health 10.9%</li>
            </ul>
          </div>
        </div>
      </div>

      <Separator />
    </div>
  );
}

export default Home;