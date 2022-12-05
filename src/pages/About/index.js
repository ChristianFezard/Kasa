import Header from "../../component/Header/Header"
import Banner from "../../component/Banner/Banner"
import Footer from "../../component/Footer/Footer"
import styles from "../About/About.module.css"
import Collapse from "../../component/Collapse/Collapse"
import aboutData from "../../data/aboutData.json"

const About = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <div className={styles.container}>
                    {aboutData.map((collapse) => {
                        return <Collapse key={collapse.title} title={collapse.title} content={collapse.content}/>  
                    })}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default About