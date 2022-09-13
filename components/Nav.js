import Link from 'next/link'
import styles from '../styles/Nav.module.css';


export default function Nav() {
  return (
    <div>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                </li>
            </ul>

        </nav>
    </div>
  )
}
