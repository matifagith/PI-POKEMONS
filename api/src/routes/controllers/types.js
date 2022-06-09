const axios = require('axios')
const {Type} = require('../../db');
const TYPES_URL_API = 'https://pokeapi.co/api/v2/type'

async function apiTypesToDb(){
    const apiInfo = await axios.get(TYPES_URL_API)
    const result = apiInfo.data?.results.map(t => [{name: t.name}])
    const resultArr = result.flat()

    await Type.bulkCreate(resultArr)
}

async function typesFromDb(){
    try{
        const types = await Type.findAll()
        return types
    }catch(e){
        return e
    }
}

module.exports={
    apiTypesToDb,
    typesFromDb
}