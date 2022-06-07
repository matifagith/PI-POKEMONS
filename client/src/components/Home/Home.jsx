import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PokeCard from '../PokeCard/PokeCard';
import Loading from '../Loading/Loading';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import Paginate from '../Paginate/Paginate';
import Footer from '../Footer/Footer';
import styles from './styles.css'

import {getAllPokes,
        getAllTypes,
        orderBy,
        filterByOrigin,
        filterByType,
        clearAllPokes
    } from '../../redux/actions/actionsCreator'


export default function Home(){

    const dispatch = useDispatch();
    
    const pokemons = useSelector(state=> state.pokemons)
    const pokeTypes = useSelector(state=> state.pokeTypes)
    const pokeErrors = useSelector(state => state.pokeErrors)

    const [rend, setRend] = useState('')


    //estados de la paginacion
    const [currentPage, setcurrentPage] = useState(1) 
    const [pokesPerPage] = useState(12)

    //paginacion
    const indexLastPoke = currentPage * pokesPerPage;
    const indexFirstPoke = indexLastPoke - pokesPerPage;
    const pokesPaginateArr = pokemons.slice(indexFirstPoke, indexLastPoke)

    const paginateFunction = (pageNumber)=> {
        for (let i = 1; i <= Math.ceil(pokemons.length / pokesPerPage); i++) {
            let page = document.getElementById(i);
            page.classList.remove("currentPage");
        }
        let current = document.getElementById(pageNumber);
        current.classList.add("currentPage")
        setcurrentPage(pageNumber) 
    }
    

    useEffect(()=>{
        dispatch(getAllPokes())
        dispatch(getAllTypes())

        return(()=>{
            dispatch(filterByOrigin('default'))
            dispatch(clearAllPokes())
        })
        
    },[dispatch])

    const handleClick = (e) =>{
        e.preventDefault()
        dispatch(filterByOrigin())
        dispatch(filterByType('default'))
        dispatch(clearAllPokes('default'))
        dispatch(getAllPokes())
        setcurrentPage(1)
    }

    function handleOrder(e){
        e.preventDefault()
        dispatch(orderBy(e.target.value))
        rend === '' ? setRend('reRender') : setRend('')
        setcurrentPage(1)
    }

    function handleFilterByOrigin(e){
        e.preventDefault()
        dispatch(filterByOrigin(e.target.value))
        setcurrentPage(1)
    }

    function handleFilterByType(e){
        e.preventDefault()
        dispatch(filterByType(e.target.value))
        setcurrentPage(1)
    }

    return (
        <div className='homeBackImage'>
            <div className='containerLinks'>
                <div>
                    <Link to={'/'}>
                        <img src={require('../../resources/landingImage/landingText.png').default} alt="Henry Poke" className="homeTitle" />
                    </Link>
                </div>
                <div className='buttons'>
                    <Link to={'/create'}><button>Create</button></Link>
                    {/* <Link to={'/mypokes'}><button className='botonMyPokes'>My Pokes</button></Link>  */}
                    <Link to={'/aboutme'}><button className='botonAbMe'>About me</button></Link>
                </div>
            </div>
            
            <div className='searchselects'>
                <SearchBar className='searchBar'/>
                {pokesPaginateArr.length !== 0 ? <img src={require(`../../resources/home/pokeball.jpeg`).default} alt='pokeball'  onClick={(e)=>handleClick(e)} /> :
                <img src={require(`../../resources/home/pokeballGif.gif`).default} alt='pokeball'  onClick={(e)=>handleClick(e)} />}
                
                <div className='selectscontainer'>
                    {pokeErrors[0] !== 'NPAC' && 
                        <select className='selects' onChange={(e)=>handleOrder(e)}>
                            <option value='default' >Order by</option>
                            <option value='atoz' >A-Z</option>
                            <option value='ztoa' >Z-A</option>
                            <option value='hh' >Highest Height</option>
                            <option value='lh' >Lowest Height</option>
                            <option value='hw' >Highest Weight</option>
                            <option value='lw' >Lowest Weight</option>
                            <option value='hhp' >Highest HP</option>
                            <option value='lhp' >Lowest HP</option>
                            <option value='hs' >Highest Speed</option>
                            <option value='ls' >Lowest Speed</option>
                            <option value='ha' >Highest Attack</option>
                            <option value='la' >Lowest Attack</option>
                            <option value='hd' >Highest Defense</option>
                            <option value='ld' >Lowest Defense</option>
                        </select>
                    }
                    <select className='selectsOrigin' onChange={(e)=>handleFilterByOrigin(e)}>
                        <option value='default'>Choose origin</option>
                        <option value='e'>Existent</option>
                        <option value='c'>Created</option>
                    </select>
                    {pokeErrors[0] !== 'NPAC' &&
                        <select className='selects' onChange={(e)=>handleFilterByType(e)}>
                            <option value='default'>Choose type</option>
                            {pokeTypes?.map((t,i)=>{
                                return <option value={t} key={i}>{t[0].toUpperCase()+t.slice(1)}</option>
                            })}
                        </select>
                    }
                </div>
            </div>
            
            <div className='innerContainer'>
            {pokesPaginateArr.length === 0 ? <Loading/> :  
                pokemons[0] === 'PDNE' ? 
                <div className='errContainer'>
                    <img className='pikachuImg' src={require(`../../resources/home/pikachuPregunta.png`).default} alt='pikachuPregunta' />
                    <p className='errorMesage'>Oops!... Couldn't find Pokemons with that name</p>
                </div> :
                pokeErrors[0] === 'NPAC' ? 
                <div className='errContainer'>
                    <img className='pikachuImg' src={require(`../../resources/home/pikachuPregunta.png`).default} alt='pikachuPregunta' />
                    <div className='errorMesage'>
                        <p>Oops!... You dont have pokemons Created</p>
                        <Link to='/create'><button>click here</button></Link><label> to create one or change origin filter</label>
                    </div>
                </div>   : 
                pokeErrors[0] === 'NPWTT' ? 
                <div className='errContainer'>
                    <img className='pikachuImg' src={require(`../../resources/home/pikachuPregunta.png`).default} alt='pikachuPregunta' />
                    <p className='errorMesage'>Oops!... Couldn't find Pokemons with that type</p>
                </div> :
                <div>
                    <div className='containerCards'>
                        {pokesPaginateArr.map(poke=>{
                            return <PokeCard
                            key = {poke.id}
                            id = {poke.id}
                            name = {poke.name}
                            image = {poke.image}
                            type = {poke.types}
                            />
                        })}
                    </div>
                    <div>
                         {pokemons.length > 12 && <Paginate pokesPerPage={pokesPerPage} pokesAmount={pokemons.length} paginateFunction={paginateFunction}/>} 
                       
                    </div>
                </div> 
            }
            </div>
            
            <div key={styles+1} ><Footer/></div>
        </div>
    )
}
            