import React, {useState} from 'react'
import { useDispatch/* , useSelector */} from 'react-redux'
import {getPokeByName} from '../../redux/actions/actionsCreator'
import styles from './styles.css'


export default function SearchBar(){
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    /* const pokemons = useSelector(state => state.pokemons) */

    const handleChange=(e)=>{
        e.preventDefault()
        setInput(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(input.toLowerCase().replace(/ /g, "").length > 0){
            dispatch(getPokeByName(input))
            setInput('')
        }
        if(input.toLowerCase().replace(/ /g, "").length === 0 ){
            alert('Please type something!')
            setInput('')        
        }
    }

   /*  const handleClick = (e) =>{
        e.preventDefault()
        dispatch(getAllPokes())
        setInput('')
    } */

    return(
        <div className='searchContainer'>
            <input type='search' value={input} placeholder='Search by name' onChange={(e)=>handleChange(e)} key={styles+1}/>
            <button   type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
            {/* { pokemons[0] === 'PDNE' ? 
                <button onClick={(e) => handleClick(e)}><strong>Reset Search</strong></button>
                : ''
                } */}
        </div>
    )

}


/* background-color: rgba(80, 80, 80, 0.473);
margin: 1rem 2rem;
padding: 1rem;
border-radius: 50px; */