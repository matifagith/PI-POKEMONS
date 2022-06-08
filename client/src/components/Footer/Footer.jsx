import React from "react";
import styles from './styles.css'
import img from '../../resources/footer/favicon.ico'
import { Link } from 'react-router-dom';

export default function Footer (){

    function showHnery() {
        window.open("https://www.soyhenry.com/")
    }

    return (
        <div className="footerContainer" key={styles+1}>
            <img src={require('../../resources/landingImage/landingText.png').default} alt="Henry Poke" className="title" />
            <div className="container2">
                <p> Developed by Matías Farina Solá for Henry </p>
                <img className="footimg" src={img} alt='icono' onClick={showHnery}/>
            </div>
            
        </div>

    )
}