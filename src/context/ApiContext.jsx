import React, { createContext, useState } from "react";
import api from "../services/api";

const ApiContext = createContext()

const ApiProvider = ({ children }) => {

    const [data, setData] = useState(null)

    const getData = async (paramns) =>{
        api.get(paramns)
        .then((response)=>{
            setData(response.data.meals)
        })
        .catch((err)=>{
            console.log('Error on get data on contex ', err)
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