import React from 'react';
import {Link} from 'react-router-dom'
import styles from './styles.css'

export default function PokeCard({id, name,image, type}){

    return(
        <div className='pokeCardContainer'>
             <Link to={`/poke/${id}`}>           
                <h2>{name[0].toUpperCase()+name.slice(1)}</h2> 
                <div className='container2'>
                <div className='typesContainer'>{type.map((t,i)=>{
                    return(

                            <img key={id+i} className='imgType' alt={t} src={require(`../../resources/typesIcons/${t}.png`).default}/>
                        
                    )
                })}</div>
                <img className='imgPoke' src={image} alt={name}/>
                </div>
            </Link>
        </div>
    )
}