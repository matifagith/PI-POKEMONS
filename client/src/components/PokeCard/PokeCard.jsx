import React from 'react';
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import styles from './styles.css'
import {deletePoke} from '../../redux/actions/actionsCreator'

export default function PokeCard({id, name,image, type}){

    const dispatch = useDispatch();

    const handleDelete = ()=>{
        if (window.confirm("Are you sure you want to delete this Pokemon?")) {
            dispatch(deletePoke(id));
            /* document.location.reload(); */
        }
    }

    return(
        <div className='pokeCardContainer'>
            {id.length > 5 ? <div className='deleteButton' key={styles+1}><button  onClick={handleDelete}>X</button></div> : null}          
             <Link className='pokeCardInfo' to={`/poke/${id}`}> 
                <h2>{name[0].toUpperCase()+name.slice(1)}</h2> 
                <div className='container2'>
                    <div className='typesContainer'>{type.map((t,i)=>{
                        return(
                                <img key={i} className='imgType' alt={t} src={require(`../../resources/typesIcons/${t}.png`).default}/>                      
                        )
                    })}</div>
                    <img className='imgPoke' src={image} alt={name}/>
                </div>
            </Link>
        </div>
    )
}