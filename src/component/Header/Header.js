import logo from '../../assets/logo_kasa.svg'
import { Link } from 'react-router-dom'
import styles from '../Header/Header.module.css'

const Header = () =>{
    return (
        <header className={styles.header}>
            <img src={logo} alt='logo-Kasa'></img>
            <div className={styles.headerLink}>
                <Link className={styles.home} to='/'>Accueil</Link>
                <Link className={styles.about} to='/about'>A Propos</Link>
            </div>
        </header>
    )
}

export default Header