import React from "react";
import styles from './styles.css'

export default function Footer (){

    return (
        <div className="footerContainer">
            <img src={require('../../resources/landingImage/landingText.png').default} alt="Henry Poke" className="title" />
            <p> Matías Farina Solá ©Copyright 2022 All rights reserved.</p>
        </div>

    )
}