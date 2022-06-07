import axios from 'axios';
import{
    GET_ALL_POKES,
    GET_POKE_TYPES,
    GET_POKE_DETAIL,
    CLEAR_DETAIL_STATE,
    SEARCH_BY_NAME,
    CREATE_POKE,
    ORDER_BY,
    FILTER_BY_ORIGIN,
    FILTER_BY_TYPE,
    CLEAR_POKEMONS_STATE,
/*     GET_DB_POKES, */
    SEARCH_BY_ID,
    DELETE_POKE,
  
} from './actionTypes';

const URL = 'http://localhost:3001';

export const getAllPokes = ()=>{
    console.log('Ejecuto: getAllPokes()')
    return async function (dispatch){
        return axios.get(`${URL}/pokemons`)
        .then(res => dispatch({type: GET_ALL_POKES, payload:res.data}))
        .catch(err => console.log(err))
    }
}

export const clearAllPokes = () => {
    console.log(`Ejecuto: clearAllPokes()`)
    return {
      type: CLEAR_POKEMONS_STATE,
    };
  };

export const getAllTypes = ()=>{
    console.log('Ejecuto: getAllTypes()')
    return async function (dispatch){
        return axios.get(`${URL}/types`)
        .then(res => dispatch({type: GET_POKE_TYPES, payload:res.data}))
        .catch(err => console.log(err))
    }
}

export const getPokeDetail = (id)=>{
    console.log(`Ejecuto: getPokeDetail(id = ${id})`)
    return async function (dispatch){
        return axios.get(`${URL}/pokemons/${id}`)
        .then(res => dispatch({type: GET_POKE_DETAIL, payload:res.data}))
        .catch(err => console.log(err))
    }
}

export const clearDetail = () => {
    console.log(`Ejecuto: clearDetail()`)
    return {
      type: CLEAR_DETAIL_STATE,
    };
};

export const getPokeByName = (name)=>{
    console.log(`Ejecuto: getPokeByName(name= '${name.toLowerCase().replace(/ /g, "")}')`)
    return async function (dispatch){
        return axios.get(`${URL}/pokemons?name=${name.toLowerCase().replace(/ /g, "")}`)
        .then(res => dispatch({type: SEARCH_BY_NAME, payload:res.data}))
        .catch(err => console.log(err))
    }
}


export const createPoke = (payload)=>{
    console.log('Ejecuto: createPoke()')
    return async function (dispatch){
        return axios.post(`${URL}/post`, payload)
        .then(res => dispatch({type: CREATE_POKE, payload:res}))
        .catch(err => console.log(err))
    }
}

export const orderBy = (payload)=>{
    console.log(`Ejecuto: orderBy( ${payload} )`)
    return {
        type: ORDER_BY,
        payload
    }
}

export const filterByOrigin = (payload)=>{
    console.log(`Ejecuto: filterByOrigin( ${payload} )`) 
    return{
        type: FILTER_BY_ORIGIN,
        payload: payload
    }
}

export const filterByType = (payload)=>{
    console.log(`Ejecuto: filterByType( ${payload} )`) 
    return{
        type: FILTER_BY_TYPE,
        payload: payload        
    }
}

export const getPokeById = (id)=>{
    console.log(`Ejecuto: getPokeById(id= ${id})`)
    return async function (dispatch){
        return axios.get(`${URL}/pokemons/${id}`)
        .then(res => dispatch({type: SEARCH_BY_ID, payload:res.data}))
        .catch(err => console.log(err))
    }
}

/* export const getDbPokes = (payload)=>{
    console.log(`Ejecuto: getDbPokes()`) 
    return async function (dispatch){
        return axios.get(`${URL}/pokemons/dbpokemons`)
        .then(res => dispatch({type: GET_DB_POKES, payload:res.data}))
        .catch(err => console.log(err))
    }
} */

export const deletePoke = (id)=>{
    console.log('Ejecuto: deletePoke()')
    return async function (dispatch){
        return axios.delete(`${URL}/delete/${id}`)
        .then(res => dispatch({type: DELETE_POKE, payload:res}))
        .catch(err => console.log(err))
    }
}