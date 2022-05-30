import { payloadHandler } from './controller'
import{
    GET_ALL_POKES,
    GET_POKE_TYPES,
    GET_POKE_DETAIL,
    SEARCH_BY_NAME,
    ORDER_BY,
    CLEAR_DETAIL_STATE,
    CLEAR_POKEMONS_STATE,
    FILTER_BY_ORIGIN,
    FILTER_BY_TYPE,
    GET_DB_POKES
}
from '../actions/actionTypes'

const initialState= {
    allPokemons: [],
    pokemons: [],
    pokeTypes:[],
    pokeDetail:[],
    pokeErrors:[],
}

const reducer = (state = initialState, {type, payload}) =>{
    switch(type){

        case GET_ALL_POKES:
            return{
                ...state,
                allPokemons: payload,
                pokemons: payload
            }

        case GET_DB_POKES:
            return{
                ...state,
                pokemons: payload
            }
        
        case CLEAR_POKEMONS_STATE:
            return {
                ...state,
                pokemons: [],
            };

        case GET_POKE_TYPES:
            return{
                ...state,
                pokeTypes: payload
            }     

        case GET_POKE_DETAIL:
            return{
                ...state,
                pokeDetail: payload
            }

        case CLEAR_DETAIL_STATE:
            return {
                ...state,
                pokeDetail: [],
            };

        case SEARCH_BY_NAME:
            return{
                ...state,
                pokemons: [payload]
            }
        
        case ORDER_BY:
            let valuesB = ['ztoa', 'hh', 'hw', 'hhp', 'hs', 'ha', 'hd']
            let valuesA = ['atoz', 'lh', 'lw', 'lhp', 'ls', 'la', 'ld']         
            let props = payload !== 'default' ? payloadHandler(payload) : ''
            let {prop} = props
            let orderBy = payload === 'default' ? state.allPokemons :
                valuesA.includes(payload) ? state.pokemons.sort(function(a,b){                    
                    if(a[prop] > b[prop]){
                        return 1
                    }
                    if(a[prop] < b[prop]){
                        return -1
                    }
                    return 0
                }) :  valuesB.includes(payload) ? state.pokemons.sort(function(a,b){                    
                    if(a[prop] > b[prop]){
                        return -1
                    }
                    if(a[prop] < b[prop]){
                        return 1
                    }
                    return 0
                })  : 'PDNE'
            return {
                ...state,
                pokemons: orderBy
            }

        
        case FILTER_BY_ORIGIN:
            let pokes = state.allPokemons;
            let pokesFilteredById = payload === 'default' ? pokes : 
                payload === 'e' ? pokes.filter(p => typeof p.id === 'number') : 
                payload === 'c' ? pokes.filter(p => typeof p.id === 'string') : ''    
            let pokesOrError = pokesFilteredById.length === 0 ? pokes : pokesFilteredById
            return {
                 ...state,
                pokemons: pokesOrError,
                pokeErrors: pokesFilteredById.length === 0 ? ['NPAC'] : []
            };
        
        case FILTER_BY_TYPE:
            const pokesx = state.allPokemons
            let pokesFilteredByType = payload === 'default' ? pokesx : 
                pokesx.filter(p => p.types.includes(payload))
            let pokesOrError2 = pokesFilteredByType.length === 0 ? pokesx : pokesFilteredByType
            return {
                 ...state,
                 pokemons: pokesOrError2,
                 pokeErrors: pokesFilteredByType.length === 0 ? ['NPWTT'] : []
            };

        default:
        return state;
    }
}

export default reducer;