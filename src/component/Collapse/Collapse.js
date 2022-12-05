import { useState } from "react";
import styles from "../Collapse/Collapse.module.css"
import ArrowDown from "../../assets/arrow_down.svg"
import ArrowUp from "../../assets/arrow_up.svg"

const Collapse = (props) =>{
    const [expand, setExpand] = useState(false)
    return (
        <div key={props.title} className={styles.collapseContainer}>
            <div className={styles.collapseTitle} onClick={() => setExpand(!expand)}>
                <p>{props.title}</p>
                <img src={!expand ? ArrowDown : ArrowUp} alt="icône chevron"/>
            </div>
            {expand ? <div className={styles.collapseDescription}>{props.content}</div> : null}
        </div>
    )
}

export default Collapse