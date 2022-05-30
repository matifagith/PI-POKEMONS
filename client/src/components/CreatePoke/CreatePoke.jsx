import React ,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createPoke, getAllTypes} from '../../redux/actions/actionsCreator'
import { Link } from 'react-router-dom'


const validate = (input)=>{
    let error = {}
    let weight = parseInt(input.weight)
    let height = parseInt(input.height)
    let speed = parseInt(input.speed)
    let defense = parseInt(input.defense)
    let attack = parseInt(input.attack)
    let hp = parseInt(input.hp)

    if(!input.name){
        error.name = "Must send name"
    }else if(input.weight && /^\d+$/.test(weight) !== true){
        error.weight = "Must be number"
    } else if(input.hp && /^\d+$/.test(hp) !== true){
        error.hp = "Must be number"
    }else if(input.height && /^\d+$/.test(height) !== true){
        error.height = "Must be number"
    }
    else if(input.speed && /^\d+$/.test(speed) !== true){
        error.speed = "Must be number"
    }
    else if(input.defense && /^\d+$/.test(defense) !== true){
        error.defense = "Must be number"
    }
    else if(input.attack && /^\d+$/.test(attack) !== true){
        error.attack = "Must be number"
    }
    else if(!input.types.length){
        error.types = "Must choose at least one type"
    } else if(input.types.length > 2){
        error.types = "Only two types allowed"
    }
    return error
}

export default function CreatePoke(){

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllTypes())
    },[dispatch])
    
    const types = useSelector(state=>state.pokeTypes)
    const [error, setError] = useState({})
    const [input, setInput] = useState({
        name: "",
        image: "",
        weight: 0,
        height: 0,
        speed: 0,
        defense: 0,
        attack: 0,
        hp: 0,
        types: []
        
    })

    const handleChange = (e)=>{
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validate({ 
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handleSelect = (e)=>{
        e.preventDefault()
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
    }

    const handleSelectDelete = (e) => {
        setInput({
            ...input,
            types: input.types.filter(t => t !== e)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        /* if(!input.name){return alert('You must send name')}
        if(!input.types.length){return alert('You must send at least one type')}
        if(input.types.length > 2){return alert('You cant send more than two types')}       
           */
        if(error){
            return alert(error)
        }

        if(input.name && input.types.length){
            e.preventDefault()
            dispatch(createPoke(input))
            setInput({
                name: "",
                image: "",
                weight: 0,
                height: 0,
                speed: 0,
                defense: 0,
                attack: 0,
                hp: 0,
                types: []
            })
            return alert('poke creado chala')
        }
            
    }


    return(
        <div>
            <Link to={'/home'}><button>Home</button></Link>
            <br/>
            <div>
                <br/>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div>
                        <label>Name: </label>
                        <input type="text" value={input.name} name="name" onChange={(e) => handleChange(e)}/>
                        {error.name && <span>{error.name}</span>}                        
                    </div>
                    <div>
                        <label>Image: </label>
                        <input type="text" value={input.image} name="image" onChange={(e) => handleChange(e)}/>
                    </div>
                    <div>
                        <label>Weight: </label>
                        <input type="number" value={input.weight} name="weight" onChange={(e) => handleChange(e)}/>
                        {error.weight && <span>{error.weight}</span>} 
                    </div>
                    <div>
                        <label>HP: </label>
                        <input type="number" value={input.hp} name="hp" onChange={(e) => handleChange(e)}/>
                        {error.hp && <span>{error.hp}</span>}
                    </div>
                    <div>
                        <label>Speed: </label>
                        <input type="number" value={input.speed} name="speed" onChange={(e) => handleChange(e)}/>
                        {error.speed && <span>{error.speed}</span>} 
                    </div>
                    <div>
                        <label>Attack: </label>
                        <input type="number" value={input.attack} name="attack" onChange={(e) => handleChange(e)}/>
                        {error.attack && <span>{error.attack}</span>} 
                    </div>
                    <div>
                        <label>Defense: </label>
                        <input type="number" value={input.defense} name="defense" onChange={(e) => handleChange(e)}/>
                        {error.defense && <span>{error.defense}</span>} 
                    </div>
                    <div>
                        <label>Types: </label>
                        <select onChange={(e)=>handleSelect(e)}>
                            {types.map((t,i)=>(
                            <option key={i} value={t}>{t[0].toUpperCase()+t.slice(1)}</option>
                            ))}
                        </select>
                        {error.types && <div>{error.types}</div>}    
                       
                        <ul>
                            <li>{input.types.map((t,i)=> (
                                <div key={i}>
                                    <button onClick={()=>handleSelectDelete(t)}>x</button>
                                    <p>{t[0].toUpperCase()+t.slice(1)}</p>
                                </div>))}
                            </li>
                        </ul>
                    </div>
                    <button type='submit'>Create Pokemon</button>       
                </form>
            </div>
            <br/>
            <div>
                
                
                {!input.image ? <p>No image yet</p> : 
                <div>
                <img src={input.image} alt='Not valid' />
                </div> }
                <div>Name: {input.name ? input.name : '-'}</div>
                <p>Weight: {input.weight ? input.weight : '-'}</p>
                <p>HP: {input.hp ? input.hp : '-'}</p>
                <p>Speed: {input.speed ? input.speed : '-'}</p>
                <p>Attack: {input.attack ? input.attack : '-'}</p>
                <p>Defense: {input.defense ? input.defense : '-'}</p>
                <p>Types: {input.types.length ? input.types.join(', ') : '-'}</p>
            </div>    
        </div>
    )
}