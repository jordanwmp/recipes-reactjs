import { useEffect, useContext } from "react"
import Card from "../../components/Card/Card"

import styles from './Home.module.css'
import { ApiContext } from "../../context/ApiContext"

const Home = () => {

    const { data, getData } = useContext(ApiContext)

    useEffect(() => {
        getData('?f=b')
    }, [])

    return (
        <div className={styles.receitasContainer}>
            {data ? (
                data.map((item) => {
                    return <Card item={item} key={item.idMeal} />
                })
            ): <p className={styles.loading}>Carregando receitas, por favor aguarde...</p>}
        </div>
    )
}

export default Home