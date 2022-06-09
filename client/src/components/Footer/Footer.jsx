import React from "react";
import styles from './styles.css'
import img from '../../resources/footer/favicon.ico'

export default function Footer (){

    function showHnery() {
        window.open("https://www.soyhenry.com/")
    }

    return (
        <div className="footerContainer" key={styles+1}>
            <img src={require('../../resources/landingImage/landingText.png').default} alt="Henry Poke" className="title" />
            <div className="container2">
                <img className="footimg" src={img} alt='icono' onClick={showHnery}/>
                <p> Henry proyect developed by Matías Farina Solá </p>
            </div>
            
        </div>

    )
}