import styles from './techStack.module.css'

export default function TechStack() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Tech Stack</h1>
      <p className={styles.subtitle}>Technologies and libraries used to build this website.</p>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Core</h2>
        <ul className={styles.list}>
          <li className={styles.item}><span className={styles.name}>React</span><span className={styles.desc}>UI library</span></li>
          <li className={styles.item}><span className={styles.name}>Vite</span><span className={styles.desc}>Build tool & dev server</span></li>
          <li className={styles.item}><span className={styles.name}>CSS Modules</span><span className={styles.desc}>Scoped component styling</span></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Libraries</h2>
        <ul className={styles.list}>
          <li className={styles.item}><span className={styles.name}>React Router DOM</span><span className={styles.desc}>Client-side routing</span></li>
          <li className={styles.item}><span className={styles.name}>Lucide React</span><span className={styles.desc}>Icon library</span></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Fonts</h2>
        <ul className={styles.list}>
          <li className={styles.item}><span className={styles.name}>DM Sans</span><span className={styles.desc}>Primary text font</span></li>
          <li className={styles.item}><span className={styles.name}>Syne</span><span className={styles.desc}>Title font</span></li>
          <li className={styles.item}><span className={styles.name}>Space Grotesk</span><span className={styles.desc}>Button & accent font</span></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Tools</h2>
        <ul className={styles.list}>
          <li className={styles.item}><span className={styles.name}>Git & GitHub</span><span className={styles.desc}>Version control</span></li>
          <li className={styles.item}><span className={styles.name}>VS Code</span><span className={styles.desc}>Code editor</span></li>
          <li className={styles.item}><span className={styles.name}>Gimp</span><span className={styles.desc}>Image editing</span></li>
        </ul>
      </div>
    </div>
  )
}