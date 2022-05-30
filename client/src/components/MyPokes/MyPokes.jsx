import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {clearAllPokes, getDbPokes} from '../../redux/actions/actionsCreator'
import PokeCard from "../PokeCard/PokeCard";

import { Link } from "react-router-dom";


/*
pusco por id,
creo estado local guarda las modificaciones
modifico el form 
mando la action --> hago la ruta
seteo el estado local en cero
*/

export default function MyPokes (){

    /* const dbDokes = useSelector(state => state.pokemons)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getDbPokes())

        return(()=>{
            dispatch(clearAllPokes())
        })
    },[dispatch]) */


    return(
        <div>
            <Link to={'/home'}><button>Home</button></Link>
            <div>My Pokes</div>
           {/*  {dbDokes[0] === 'NPAC' ? 
            <div>
                <p>Oops!... You dont have pokemons Created</p>
                    <Link to='/create'><button>click here</button></Link><label> to create one</label>
            </div> : 
            dbDokes.map((poke) => {
                return (
                    <div>
                        <img src={poke.image}/>
                        <p>{poke.name}</p>
                        <div>Type: {poke.types.map((t,i)=>{
                            return(
                                <div key={i}>
                                    <img alt={t} src={require(`../PokeCard/Iconos${t}.png`).default}/>
                                </div>
                            )})}
                        </div>
                    </div>
                    )})} */}
        </div>
    )
}