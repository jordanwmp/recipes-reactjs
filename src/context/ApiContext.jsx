import React, { createContext, useState } from "react";
import api from "../services/api";

const ApiContext = createContext()

/**
 * O CONTEXT FOI UTILIZADO PARA QUANDO O USUÁRIO REALIZAR
 * UMA BUSCAR UTILIZANDO O FORMULÁRIO NO NAVBAR
 * OS DADOS SEREM ATUALIZADOS NA HOME PAGE
 */

const ApiProvider = ({ children }) => {

    const [data, setData] = useState(null)

    const getData = async (paramns) =>{
        api.get(paramns)
        .then((response)=>{
            setData(response.data.meals)
        })
        .catch((err)=>{
            console.log('Erro ao buscar dados no context ', err)
        })
    }

    return (
        <ApiContext.Provider value={{data, getData}}>
            {children}
        </ApiContext.Provider>   
    )
}

export {
    ApiContext,
    ApiProvider
}