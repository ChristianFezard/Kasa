import { useState } from "react"
import styles from "../Slideshow/Slideshow.module.css"
import arrowLeft from "../../assets/arrow_left.svg"
import arrowRight from "../../assets/arrow_right.svg"


const Slideshow = (props) =>{
    const [imgIndex, setImgIndex] = useState(0)

    function previous(){
        setImgIndex(imgIndex === 0 ? props.picture.length -1 : imgIndex -1)
    }

    function next(){
        setImgIndex(imgIndex === props.picture.length -1 ? 0 : imgIndex +1)
    }
    return (
        <div className={styles.slideContainer}>
            <img src={props.picture[imgIndex]} className={styles.slides} alt={props.alt} />
            {props.picture.length > 1 ? <><img src={arrowLeft} className={styles.arrowLeft} alt="flêche gauche" onClick={previous} />
            <img src={arrowRight} className={styles.arrowRight} alt="flêche droite" onClick={next}/>
            <p>{imgIndex +1}/{props.picture.length}</p></> : null}
        </div>
    )
}

export default Slideshow