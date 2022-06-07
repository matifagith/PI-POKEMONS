import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Footer from '../Footer/Footer'
import {getPokeDetail, clearDetail} from '../../redux/actions/actionsCreator'
import styles from './styles.css'

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
        <div className="detailContainer">
            <Link to={'/home'}><button>Home</button></Link>
            <div className="detailBody">
                {pokeDetail.length === 0 ? <Loading/> : 
                <div className="pokeDetailInfo">
                    <div key={styles+1}>
                        <img className="detailImg" src={pokeDetail.image} alt={pokeDetail.name}/>
                        <h2>{pokeDetail.name[0].toUpperCase()+ pokeDetail.name.slice(1)}</h2>
                    </div>
                    <div>
                        <p>Height: {pokeDetail.height? pokeDetail.height : '-'}</p>
                        <p>Weight: {pokeDetail.weight? pokeDetail.weight : '-'}</p>
                        <p>HP: {pokeDetail.hp? pokeDetail.hp : '-'}</p>
                        <p>Speed: {pokeDetail.speed? pokeDetail.speed : '-'}</p>
                        <p>Attack: {pokeDetail.attack? pokeDetail.attack : '-'}</p>
                        <p>Defense: {pokeDetail.defense? pokeDetail.defense : '-'}</p>
                        <p>Types:</p>
                        <div className="detailTypes">
                            {pokeDetail.types.map((t,i)=>{
                            return(
                                    <img key={i} alt={t} src={require(`../../resources/typesIcons/${t}.png`).default}/>
                            )})}
                        </div>
                    </div>
                </div>            
                }
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}