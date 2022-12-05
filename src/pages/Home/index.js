import Header from "../../component/Header/Header"
import Banner from "../../component/Banner/Banner"
import Card from "../../component/Card/Card"
import Footer from "../../component/Footer/Footer"
import styles from "../Home/Home.module.css"
import data from "../../data/data.json"

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <section className={styles.cardContainer}>
                    {data.map((card) =>
                        <Card key={card.id} id={card.id} title={card.title} cover={card.cover} />
                    )}
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home
