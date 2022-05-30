import React from "react";
import { Link } from "react-router-dom";
import styles from './styles.css'


export default function Landing(){
    return(
        <div className="container">
             <div>
                <Link to={'/home'}>
                    <img src={require('../../resources/landingImage/landingText.png').default} alt="Henry Poke" className="imageTtitle" />         
                </Link>
            </div> 
        </div>
    )
}
