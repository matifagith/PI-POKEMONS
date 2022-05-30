import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import {getPokeDetail, clearDetail} from '../../redux/actions/actionsCreator'

export default function PokeDetail(){

    const dispatch = useDispatch();
    const {id} = useParams()
    const pokeDetail = useSelector(state => state.pokeDetail)

    useEffect(()=>{
        dispatch(getPokeDetail(id))
        
        return(()=>{
            dispatch(clearDetail())
        })
    },[dispatch,id])

    return(
        <div>
            <Link to={'/home'}><h3>HOME</h3></Link>
            {pokeDetail.length === 0 ? <Loading/> : 
            <div>
                <img src={pokeDetail.image} alt={pokeDetail.name}/>
                <h3>{pokeDetail.name[0].toUpperCase()+ pokeDetail.name.slice(1)}</h3>
                <p>Height: {pokeDetail.height? pokeDetail.height : '-'}</p>
                <p>Weight: {pokeDetail.weight? pokeDetail.weight : '-'}</p>
                <p>HP: {pokeDetail.hp? pokeDetail.hp : '-'}</p>
                <p>Speed: {pokeDetail.speed? pokeDetail.speed : '-'}</p>
                <p>Attack: {pokeDetail.attack? pokeDetail.attack : '-'}</p>
                <p>Defense: {pokeDetail.defense? pokeDetail.defense : '-'}</p>
                <div>
                    Type: {pokeDetail.types.map((t,i)=>{
                    return(
                        <div key={i}>
                            <img alt={t} src={require(`../../resources/typesIcons/${t}.png`).default}/>
                        </div>
                    )})}
                </div>
            </div>            
            }
        </div>
    )
}