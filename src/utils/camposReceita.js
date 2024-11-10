/**
 * AS FUNÇÕES NESSE ARQUIVO SERVEM PARA
 * FAZER UM TRATAMENTO DOS DADOS DA API, QUE AS VEZES NÃO VEM DE FORMA ADEQUADA
 * PARA SEREM MOSTRADOS PARA O USUÁRIO
 */

const camposReceita = {
    ingredientes: 'strIngredient',
    medida: 'strMeasure'
}

/**
 * A FUNÇÃO ABAIXO ASSOCIA A CADA INGREDIENTE
 * A PORÃO DO MESMO RETORNADA PELA API
 */

const setInstrucoes = (str) =>{

    const str_formatted = str.split('\r\n');
    let index = 0;
    const instrucoes = str_formatted.map((item)=>{
        if(item)
        {
            index++;
            return `${index}. ${item}`
        }
    })

    return instrucoes
}

const setIngredientesComMedidas = (ingredientes, medidas) =>{
    
    const data = ingredientes.map((item, index)=>{
        return `${medidas[index]} ${item}`
    })

    return data
}

const receitaInfo = (obj) => {
    const strIngredient = extraiInformacoes(obj, camposReceita.ingredientes)
    const strMeasure = extraiInformacoes(obj, camposReceita.medida)

    return {
        strMeal: obj.strMeal,
        strCategory: obj.strCategory,
        strArea: obj.strArea,
        strInstructions: setInstrucoes(obj.strInstructions),
        strMealThumb: obj.strMealThumb,
        strYoutube: obj.strYoutube,
        ingredientes : setIngredientesComMedidas(strIngredient, strMeasure)
    }
}

const extraiInformacoes = (obj, prop) =>{
    const data = []
    for(let key of Object.keys(obj))
    {
        if(key.indexOf(prop) != -1 && obj[key])
        {
            data.push(obj[key])
        }
    }
    return data
}

export {
    camposReceita,
    extraiInformacoes,
    receitaInfo
} 