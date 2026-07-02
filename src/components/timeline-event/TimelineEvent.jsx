import styles from "./timelineEvent.module.css";
import { Sword, Skull } from "lucide-react";

export default function TimelineEvent({ dateStart, dateEnd, title, stats, kd, comment, index, side }) {
    return (
        <div className={styles.event}>

            <div className={styles.left}>
                {side === "left" && (
                    <div className={styles.content}>
                        <div className={styles.dates}>{dateStart} — {dateEnd}</div>
                        <div className={styles.title}>{title} — Kingdom {kd}</div>
                        {stats && (
                            <div className={styles.stats}>
                                {stats.kills && <span className={styles.stat}><Sword /> {stats.kills} kills</span>}
                                {stats.deaths && <span className={styles.stat}><Skull /> {stats.deaths} deaths</span>}
                            </div>
                        )}
                        {comment && <p className={styles.comment}>{comment}</p>}
                    </div>
                )}
            </div>

            <div className={styles.circle}>{index}</div>

            <div className={styles.right}>
                {side === "right" && (
                    <div className={styles.content}>
                        <div className={styles.dates}>{dateStart} — {dateEnd}</div>
                        <div className={styles.title}>{title} — Kingdom {kd}</div>
                        {stats && (
                            <div className={styles.stats}>
                                {stats.kills && <span className={styles.stat}><Sword /> {stats.kills} kills</span>}
                                {stats.deaths && <span className={styles.stat}><Skull /> {stats.deaths} deaths</span>}
                            </div>
                        )}
                        {comment && <p className={styles.comment}>{comment}</p>}
                    </div>
                )}
            </div>

        </div>
    )
}