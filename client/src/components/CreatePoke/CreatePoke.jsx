import React ,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createPoke, getAllTypes} from '../../redux/actions/actionsCreator'
import { Link } from 'react-router-dom'
import styles from './styles.css'
import Footer from '../Footer/Footer'


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
        error.weight = "Must be number >= 0"
    } else if(input.hp && /^\d+$/.test(hp) !== true){
        error.hp = "Must be number >= 0"
    }else if(input.height && /^\d+$/.test(height) !== true){
        error.height = "Must be number >= 0"
    }
    else if(input.speed && /^\d+$/.test(speed) !== true){
        error.speed = "Must be number >= 0"
    }
    else if(input.defense && /^\d+$/.test(defense) !== true){
        error.defense = "Must be number >= 0"
    }
    else if(input.attack && /^\d+$/.test(attack) !== true){
        error.attack = "Must be number >= 0"
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
        if(!input.types.includes(e.target.value)){
            setInput({
                ...input,
                types: [...input.types, e.target.value]
            })
            setError(validate({ 
                ...input,
                types: [...input.types, e.target.value]
            }))
        }
    }

    const handleSelectDelete = (e) => {
        const typesb = input.types.filter(t => t !== e)
        setInput({
            ...input,
            types: typesb
        })
        setError(validate({ 
            ...input,
            types: typesb
        }))        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(error.name || error.weight || error.height || error.speed || error.defense || error.attack || error.hp || error.types){
            let sendErrors = [];
            for (const key in error) {
            sendErrors.push(`${key[0].toUpperCase()+key.slice(1)}: ${error[key]}`)
            }
            alert(sendErrors.join(" \n"))
        }
        else if(input.name && input.types.length <= 2){
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
            return alert('Pokemon created successfully')
        }
            
    }


    return(
        <div className='createContainer' key={styles+1}>
            <div className='createLinks'>
                <Link to={'/home'}><button>Home</button></Link>
            </div>
            <div className='createBody'>
                <div className='createForm'>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <div className='createInputs'>
                            <div>
                                <label>Name </label>
                                <input type="text" value={input.name} name="name" onChange={(e) => handleChange(e)}/>
                                <div>{error.name && <span>{error.name}</span>}</div>                        
                            </div>
                            <div>
                                <label>Image </label>
                                <input type="text" value={input.image} name="image" onChange={(e) => handleChange(e)}/>
                            </div>
                            <div>
                                <label>Weight </label>
                                <input type="number" value={input.weight} name="weight" onChange={(e) => handleChange(e)}/>
                                <div>{error.weight && <span>{error.weight}</span>}</div> 
                            </div>
                            <div>
                                <label>HP </label>
                                <input type="number" value={input.hp} name="hp" onChange={(e) => handleChange(e)}/>
                                <div>{error.hp && <span>{error.hp}</span>}</div>
                            </div>
                            <div>
                                <label>Speed </label>
                                <input type="number" value={input.speed} name="speed" onChange={(e) => handleChange(e)}/>
                                <div>{error.speed && <span>{error.speed}</span>}</div> 
                            </div>
                            <div>
                                <label>Attack </label>
                                <input type="number" value={input.attack} name="attack" onChange={(e) => handleChange(e)}/>
                                <div>{error.attack && <span>{error.attack}</span>}</div> 
                            </div>
                            <div>
                                <label>Defense </label>
                                <input type="number" value={input.defense} name="defense" onChange={(e) => handleChange(e)}/>
                                <div>{error.defense && <span>{error.defense}</span>}</div>
                            </div>
                        </div>
                        <div className='createTypes'>
                                <div>
                                    <label>Types </label>
                                    <select onChange={(e)=>handleSelect(e)}>
                                        {types.map((t,i)=>(
                                        <option key={i} value={t}>{t[0].toUpperCase()+t.slice(1)}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    {error.types && <span>{error.types}</span>}  
                                </div>
                                <ul>
                                    <li className='typesLi'>{input.types.map((t,i)=> (
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
                <div className='createInfo'>
                    {!input.image ? <p>No image yet</p> : 
                    <div>
                    <img className='createPokeImg' src={input.image} alt='Not valid' />
                    </div> }
                    {input.name ? <p>{input.name}</p> : <p>Name: -</p>}                    
                    <p>Weight: {input.weight ? input.weight : '-'}</p>
                    <p>HP: {input.hp ? input.hp : '-'}</p>
                    <p>Speed: {input.speed ? input.speed : '-'}</p>
                    <p>Attack: {input.attack ? input.attack : '-'}</p>
                    <p>Defense: {input.defense ? input.defense : '-'}</p>
                    {error.types ? <span>{error.types}</span> : 
                        <div className='infoTypes'>
                            {input.types.map((t,i)=>{
                            return(
                                    <img key={i} className='createImgType' alt={t} src={require(`../../resources/typesIcons/${t}.png`).default}/>                    
                            )
                            })}
                        </div>}
                </div>
            </div>
            <Footer/>
        </div>
    )
}