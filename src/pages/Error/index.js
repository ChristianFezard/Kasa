import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import { Link } from "react-router-dom";
import styles from "../Error/Error.module.css"


const Error = () => {
    return (
        <>
        <Header />
        <main> 
            <div className={styles.errorPage}>
                <h1 className={styles.error}>404</h1>
                <span className={styles.errorQuote}>Oups! La page que vous demandez n'existe pas.</span>
                <Link className={styles.linkBackHome} to='/'>Retournez sur la page d'accueil</Link>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Error