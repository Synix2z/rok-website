import styles from './legalMentions.module.css'

export default function LegalMentions() {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Legal Mentions</h1>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Website</h2>
                <p className={styles.text}>This website is a personal project created and maintained by Synix2z. It is not affiliated with any company or organization.</p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Hosting</h2>
                <p className={styles.text}>x</p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Intellectual Property</h2>
                <p className={styles.text}>
                    Some images and assets used on this website originate from <span className={styles.highlight}>Rise of Kingdoms</span>, 
                    developed and published by <span className={styles.highlight}>Lilith Games</span>. 
                    All rights related to these assets belong to their respective owners. Their use on this website is purely illustrative 
                    and non-commercial.
                </p>
                <p className={styles.text}>
                    All other content (code, design, text) was created by Synix2z.
                </p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Disclaimer</h2>
                <p className={styles.text}>
                    This website is provided for informational purposes only. The information presented reflect personal gaming statistic.
                </p>
            </div>
        </div>
    )
}