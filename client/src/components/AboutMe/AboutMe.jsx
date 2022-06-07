import React from "react";
import { Link } from "react-router-dom";
import styles from './styles.css'
import Footer from '../Footer/Footer'

export default function AboutMe (){

    function showMail() {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=matiasfarinasola@gmail.com")
    }
    function showLinkedin() {
        window.open("https://www.linkedin.com/in/matias-farina-sola-09040b147/")
    }
    function showGithub() {
        window.open("https://github.com/matifagith")
    }

    return (
        <div className="abMeContainer" key={styles+1}>
            <div>
                <Link to={'home'}><button>Home</button></Link>
            </div>
            <div className="abMeBody">
                <div className='aboutMe'>
                    <div className='containerAbMe'>
                        <h1>About Me</h1>
                        <div>
                            <p className='infoMe'> My name is Matías Farina Solá, I'm learning the world of programing, and figured out It's amazing.
                                In this oportunitty I made a website where you can search, sort, filter and create Pokemons.
                                I hope you like and enjoy my work, if you'd like to communicate with me you can do it below.
                                Thanks for coming by! </p>
                        </div>
                        <div className='linksInfo'>
                            <div className='miniInfo'>
                                <img onClick={showGithub} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
                                <p onClick={showGithub}>matifagith</p>
                            </div>
                            <div className='miniInfo'>
                                <img className="gith" onClick={showMail} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="gmail" />
                                <p onClick={showMail}>matiasfarinasola@gmail.com</p>
                            </div>
                            <div className='miniInfo'>
                                <img onClick={showLinkedin} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" />
                                <p onClick={showLinkedin}>Matias Farina Sola</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}