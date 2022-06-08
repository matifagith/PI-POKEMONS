import React, {useState} from 'react'
import { useDispatch/* , useSelector */} from 'react-redux'
import {getPokeByName} from '../../redux/actions/actionsCreator'
import styles from './styles.css'


export default function SearchBar(){
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const handleChange=(e)=>{
        e.preventDefault()
        setInput(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
       /*  let testLetter = /^[a-zA-Z][^$()@!¡""#/=¿{},.?*-_%&|<>#]*$/;
        if (!testLetter.test(input)) {
            alert('Only letters are allowed')
            setInput('')
        } */
        if(input.toLowerCase().replace(/ /g, "").length > 0){
            dispatch(getPokeByName(input))
            setInput('')
        }
        if(input.toLowerCase().replace(/ /g, "").length === 0 ){
            alert('Please type something!')
            setInput('')        
        }
    }


    return(
        <div className='searchContainer'>
            <input type='search' value={input} placeholder='Search by name' onChange={(e)=>handleChange(e)} key={styles+1}/>
            <button   type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )

}

