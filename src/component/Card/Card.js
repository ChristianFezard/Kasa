import { Link } from "react-router-dom"
import styles from "../Card/Card.module.css"

const Card = (props) => {
    return (
        <div key={props.id} className={styles.card}>
            <Link to={`/rentals/${props.id}`}>
                <img src={props.cover} alt={props.title}/>
                <div className={styles.title}>
                    <span>{props.title}</span>
                </div>    
            </Link>
        </div>
    )
}

export default Card