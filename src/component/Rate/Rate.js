import ratePos from "../../assets/star_full.svg"
import rateNeg from "../../assets/star_empty.svg"
import styles from "../Rate/Rate.module.css"

const Rate = (props) =>{
    const rate = []
    for (let i = 0; i < props.rate; i++){
        rate.push(i)
    }

    const rateDown = []
    for (let i = 0; i < 5-props.rate; i++){
        rateDown.push(i)
    }

    return (
        <>
            {rate.map((item) =>
                <img className={styles.star} src={ratePos} key={item} alt="étoile orange"/>
            )}
            {rateDown.map((item) =>
                <img className={styles.star} src={rateNeg} key={item} alt="étoile grise"/>
            )}
        </>
    )
}

export default Rate