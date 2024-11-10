import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player';

import api from "../../services/api"
import { receitaInfo } from "../../utils/camposReceita"

import styles from './Detalhes.module.css'

const Detalhes = () =>{

    const navigate = useNavigate();
    const { id } = useParams()
    const [receita, setReceita] = useState(null)

    /**
     * ALGUMAS RECEITAS VEM COM VÍDEO INDISPONÍVEL
     * O ESTADO ABAIXO VERIFICA A DISPONIBILIZAR DO VÍDEO NA PÁGINA
     */
    const [videoError, setVideoError] = useState(false)

    useEffect(()=>{
        const getData = async () =>{
            //BUSCA A RECEITA SELECIONADA PELO USUÁRIO PELO ID
            await api.get(`lookup.php?i=${id}`)
            .then((data)=>{
                //A RECEITA É TRADADA COMO UM OBJETO
                setReceita(receitaInfo(data.data.meals[0]))
            })
            .catch((error)=>{
                console.log('Erro ao pegar receita pelo id ', error)
            })
        }
        getData()
    }, [])

    //O VÍDEO DISPONIBILIZADO PELA API
    //NÃO ESTÁ MAIS DISPONÍVEL NO YOU TUBE
    const handleVideoError = (e) => { 
        setVideoError(true)
    };

    return (
        <div className={styles.detalhesContainer}>
            {receita ? (
                <div>
                    <h1>{receita.strMeal}</h1>

                    {/* SE O VÍDEO DA API ESTIMER DISPINÍVEL É MOSTRADO */}
                    {/* CASO CONTRÁRIO, É MOSTRADA A IMAGEM DA RECEITA */}
                    {!videoError && receita.strYoutube && (<div className={styles.videoContainer}><ReactPlayer width='100%' url={receita.strYoutube} controls onError={handleVideoError}/></div>) }
                    {videoError && receita.strMealThumb && (<img src={receita.strMealThumb} alt={receita.strMeal} />) }
                    
                    <h2>Ingredientes</h2>
                    <div className={styles.ingredientes}>
                    {receita.ingredientes.map((item, index)=>{
                        return <p key={index}>{item}</p>
                        }) 
                    }
                    </div>

                    <h2>Modo de preparo</h2>
                    <div className={styles.modoPreparo}>
                    {receita.strInstructions.map((item, index)=>{
                       return <p key={index}>{item}</p>
                    })}
                    </div>

                    <h2>Categoria</h2>
                    <p className={styles.categoria}>{receita.strCategory}</p>
                </div>
            ) : 
            (<p>Carregando dados...</p>)}

            <button onClick={()=>{navigate('/')}} className={styles.backBtn}>
                Voltar
            </button>
        </div>
    )
}

export default Detalhes