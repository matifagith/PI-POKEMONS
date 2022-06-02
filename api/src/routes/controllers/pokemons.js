const axios = require('axios');
const {Pokemon, Type} = require('../../db');
/* require('dotenv').config();
const{API_URL_POKES}= process.env; */
const API_URL_POKES = 'https://pokeapi.co/api/v2/pokemon';

const pokeApiTemplate = (poke)=>{
    return {
        id: poke.id,
        name: poke.name, 
        height: poke.height,
        weight: poke.weight,
        hp: poke.stats[0].base_stat,
        speed: poke.stats[5].base_stat,
        attack: poke.stats[1].base_stat,
        defense: poke.stats[2].base_stat,
        types: poke.types.map(t=> t.type.name),
        image: poke.sprites.other.dream_world.front_default,/* sprites.other["official-artwork"].front_default */ /* sprites.other.dream_world.front_default */
    }  
}

const pokeDbTemplate = (poke)=>{
    return {
        id: poke.id,
        name: poke.name, 
        height: poke.height,
        weight: poke.weight,
        hp: poke.hp,
        speed: poke.speed,
        attack: poke.attack,
        defense: poke.defense,
        types:  poke.types.map(e=>e.name),
        image: poke.image       
    }  
}



async function getAllApiPokes(){
    try{
        const apiAllPokes = await axios.get(`${API_URL_POKES}?limit=2`);   
        const apiPokes = apiAllPokes.data?.results.map(e => axios.get(e.url)); //ingreso a todos los urls
        const pokesUrlInfo = await axios.all(apiPokes) //espero a que se cumplan todas las promises 

        let pokesData = pokesUrlInfo.map(e => e.data) // guardo en un array todas las promesas resueltas
        let pokesInfo = pokesData.map( p => pokeApiTemplate(p)) 

        return pokesInfo

    }catch(e){
        console.log(e)
        return e
    }

}

async function getAllDbPokes(){
    try{
        const dbPokes = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ['name']
            }
        })    

        const pokesDbInfo = dbPokes.map(p => pokeDbTemplate(p))
        
   /*      let resp = pokesDbInfo.length ? pokesDbInfo : ['NPAC']
        console.log(resp) */

        return  pokesDbInfo

    }catch(e){
        console.log(e)
        return e
    }
}

async function getAllPokes (){
    try{
        const [pokesApi, pokesDb] = await Promise.all([getAllApiPokes(), getAllDbPokes()]);
        return [...pokesApi, ...pokesDb];
    }catch(e){
        console.log(e)
        return e
    }
}

//BY NAME
async function getApiPokeByName(name){
    try{
        const apiPokeByName = await axios.get(`${API_URL_POKES}/${name.toLowerCase().toString()}`);
        let pokeInfo =  apiPokeByName.data? pokeApiTemplate(apiPokeByName.data) : 'PDNE'          
        
        return pokeInfo
        
    }catch(e){
        //console.log(e)
        return 'PDNE'
    }
}

async function getDbPokeByName(name){
    try{
        let dbPokeByName =  await Pokemon.findOne({
            where: {name},
            include: {model: Type}
        })
        if(dbPokeByName === null){
            return 'PDNE'
        }
        
        return pokeDbTemplate(dbPokeByName)

    }catch(e){
        //console.log(e)
        return 'PDNE'
    }
}

async function getAllPokesByName(name){
    try{
        let apiResult = await getApiPokeByName(name);
        let dbResult = await getDbPokeByName(name);  

        
        if(apiResult === 'PDNE' && dbResult === 'PDNE'){
            return 'PDNE'
        }
        if(apiResult === 'PDNE' && dbResult !== 'PDNE'){
            return dbResult
        }
        if(apiResult !== 'PDNE' && dbResult === 'PDNE'){
            return apiResult
        }

        return [...apiResult, ...dbResult]

    }catch(e){
        return 'error xd'
    }
}

//BY ID
async function getPokeById(id){
    try{
        if(id.length > 2){
            const pokeDb = await Pokemon.findOne({
                where: {id},
                include: Type
            })        
            return pokeDbTemplate(pokeDb)
        }else{
            const apiPoke = await axios.get(`${API_URL_POKES}/${id.toString()}`); //todo lo que reciba un url debe ser un string
            let pokeInfo =  apiPoke.data? pokeApiTemplate(apiPoke.data) : 'PDNE' 
                
            return pokeInfo
        }      

        }catch(e){
            console.log(e)
            return 'PDNE'
        }
    
}


module.exports = {
    getAllPokes,
    getAllPokesByName,
    getPokeById,
    getAllDbPokes
}

