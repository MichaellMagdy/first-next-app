
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <div>
        <h1 className={styles.title}><span>my</span> header</h1>
        <p className={styles.description}>
            keep up to date
        </p>
    </div>
  )
}
