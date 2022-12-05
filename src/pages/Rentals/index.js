import { Navigate, useParams } from "react-router-dom";
import styles from "../Rentals/Rentals.module.css"
import Header from "../../component/Header/Header";
import Slideshow from "../../component/Slideshow/Slideshow";
import Tag from "../../component/Tag/Tag";
import Rate from "../../component/Rate/Rate";
import Collapse from "../../component/Collapse/Collapse";
import Footer from "../../component/Footer/Footer";
import data from "../../data/data.json";


const Rentals = () =>{

    const params = useParams()
    
    const flats = data.find((flat => flat.id === params.id))

    if(flats === undefined){
        return <Navigate to="/*"/>
    }

    return (
        <>
            <Header />
            <main>
                <Slideshow picture={flats.pictures} alt={flats.title}/>
                <section >
                    <div className={styles.flatHeader}>
                        <div className={styles.flatTitle}>
                            <h1>{flats.title}</h1>
                            <span>{flats.location}</span>
                        </div>
                        <div className={styles.tagList}>
                            {flats.tags.map((tag) =>
                                <Tag key={tag} tag={tag}/>
                            )}
                        </div>
                    </div>
                    <div className={styles.pictureNStar}>
                        <div className={styles.owner}>
                            <p>{flats.host.name}</p>
                            <img src={flats.host.picture} alt={flats.host.picture}/>
                        </div>
                        <div className={styles.rating}>
                            <Rate rate={flats.rating} />
                        </div>
                    </div>
                </section>
                <div className={styles.rentalCollapse}>
                    <Collapse title="Description" content={flats.description}/>
                    <Collapse title="Équipements" content={<ul>{flats.equipments.map(equipment => <li key={equipment}>{equipment}</li>)}</ul>}/>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Rentals