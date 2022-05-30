import React from "react";
import { Link } from "react-router-dom";
import styles from './styles.css'

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
        <div>
            <Link to={'home'}><button>Home</button></Link>
            {/* <NavBar></NavBar> */}
            <div className='aboutMe'>
                <div className=''>
                    <h1>About Me</h1>

                    <div className='infoMe'>
                        <p> My name is Matías Farina Solá, I'm learning how to code since 2020 and in my experience
                            I can tell that is the profession I love.
                            I could stay hours just coding (I do) and creating new things that come to my mind.
                            In this oportunitty I made a website of food and recipes to make or create yours.
                            I hope you like I enjoy my work, if you'd like to communicate with me you can find how to do it below.
                            Thanks for coming by! </p>


                    </div>
                    <div className='linksInfo'>
                        <div className='miniInfo'>
                            <img onClick={showGithub} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
                            <p onClick={showGithub}>matifagith</p>
                        </div>
                        <div className='miniInfo'>
                            <img onClick={showMail} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="gmail" />
                            <p onClick={showMail}>matiasfarinasola@gmail.com</p>
                        </div>
                        <div className='miniInfo'>
                            <img onClick={showLinkedin} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" />
                            <p onClick={showLinkedin}>Matias Farina Sola</p>
                        </div>

                    </div>
                </div>

            </div>
           {/*  <Footer /> */}
        </div>
    )
}