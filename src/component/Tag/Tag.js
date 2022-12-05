import styles from "../Tag/Tag.module.css"

const Tag = (props) =>{
    return(
        <p className={styles.tag}>{props.tag}</p>
    )
}

export default Tag