import { useLocation } from "react-router-dom"
import home_img from "../../assets/home_img.jpg"
import about_img from "../../assets/about_img.jpg"
import styles from "../Banner/Banner.module.css"

const Banner = () =>{
    const path = useLocation()
    return (
        <div className={path.pathname === "/" ? styles.banner : path.pathname === "/about" ? styles.aboutBanner : null}>
            {path.pathname === "/" ? <h1>Chez vous, partout et ailleurs</h1> : null}
            <img src={path.pathname === "/" ? home_img : path.pathname === "/about" ? about_img : null}  alt="Paysage bannière"/>
        </div>
    )
}

export default Banner