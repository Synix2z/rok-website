import styles from "./commanders.module.css";

/* Components */
import CommandersGrid from "../../../components/commander-grid/CommanderGrid";
import Inscription from "../../../components/inscription/Inscription";
import Title from "../../../components/title-section/Title";

/* Infantry commanders */
import Bai_Qi from "../../../images/commanders/Bai_Qi.png";
import Liu_Che from "../../../images/commanders/Liu_Che.png";
import Sun_Zi_Prime from "../../../images/commanders/Sun_Zi_Prime.png";
import William_Wallace from "../../../images/commanders/William_Wallace.png";

/* Stuff */
import casqueImage from "../../../images/stuff/Casque.png";
import capeImage from "../../../images/stuff/Cape.png";
import capeRaffiImage from "../../../images/stuff/Cape_Raffi.png";
import bouclierImage from "../../../images/stuff/Bouclier.png";
import gantImage from "../../../images/stuff/Gant.png";
import pantalonImage from "../../../images/stuff/Pantalon.png";
import bottesImage from "../../../images/stuff/Bottes.png";
import bottesRaffiImage from "../../../images/stuff/Bottes_Raffi.png";

/* Jewellery gears */
import grandeGloireImage from "../../../images/stuff/Grande_Gloire.png";
import anneauRaffiImage from "../../../images/stuff/Anneau_Raffi.png";
import corneImage from "../../../images/stuff/Corne.png";
import dagueImage from "../../../images/stuff/Dague.png";

import Archer_Stats from "../../../images/stats/Archer_Stats.png";
import Barbarian_Stats from "../../../images/stats/Barbarian_Stats.png";
import Inf_Stats from "../../../images/stats/Inf_Stats.png";

import { Sword, BowArrow, Axe } from "lucide-react";

export default function Commanders() {
    return (
        <>
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
                            <li><Sword size={30} color="#0a88df" /> Infantry Attack +7.2%</li>
                            <li><Sword size={30} color="#0a88df" /> Infantry Defense +4.9%</li>
                            <li><Sword size={30} color="#0a88df" /> Infantry Health 9.6%</li>
                            <li><BowArrow size={30} color="#e44033" /> Archer Attack +2.6%</li>
                            <li><BowArrow size={30} color="#e44033" /> Archer Defense +1.9%</li>
                            <li><BowArrow size={30} color="#e44033" /> Archer March +2.8%</li>
                            <li><Axe size={30} color="#d9b800" /> Barbarian Attack <span>+6.6%</span></li>
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
                            <li><Sword size={30} color="#0a88df" /> Infantry Attack +9.9%</li>
                            <li><Sword size={30} color="#0a88df" /> Infantry Defense +9.9%</li>
                            <li><Sword size={30} color="#0a88df" /> Infantry Health 10.9%</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}