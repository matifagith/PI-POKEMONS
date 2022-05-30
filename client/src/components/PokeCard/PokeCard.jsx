import React from 'react';
import {Link} from 'react-router-dom'
import styles from './styles.css'

export default function PokeCard({id, name,image, type}){

    return(
        <div className='pokeCardContainer'>
             <Link to={`/poke/${id}`}>           
            <img src={image} alt={name}/>
             <h2>{name[0].toUpperCase()+name.slice(1)}</h2> 
            <div className='typesContainer'>{type.map((t,i)=>{
                return(
                    <div key={i} className='type'>
                        <img alt={t} src={require(`../../resources/typesIcons/${t}.png`).default}/>
                    </div>
                )
            })}</div>
            </Link>
        </div>
    )
}