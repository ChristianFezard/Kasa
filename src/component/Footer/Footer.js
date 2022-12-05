import logo from '../../assets/logo_kasa_nb.svg'
import styles from '../Footer/Footer.module.css'

const Footer = () =>{
    return (
        <>
            <footer className={styles.footer}>
                <img className={styles.logoFooter} src={logo} alt='logo-Kasa'></img>
                <span className={styles.commercial}>© 2020 Kasa. All rights reserved</span>
            </footer>
        </>
    )
}

export default Footer