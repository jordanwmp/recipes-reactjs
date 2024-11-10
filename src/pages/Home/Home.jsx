import { useEffect, useContext } from "react"
import Card from "../../components/Card/Card"

import styles from './Home.module.css'
import { ApiContext } from "../../context/ApiContext"

const Home = () => {

    const { data, getData } = useContext(ApiContext)

    useEffect(() => {
        //CAMPO INICIAL DE BUSCA DE RECEITAS
        //INICIOU-SE COM RECEITAS COM A LEETRA B POIS HÁ MAIS RESULTADOS PARA O USUÁRIO
        getData('search.php?f=b')
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