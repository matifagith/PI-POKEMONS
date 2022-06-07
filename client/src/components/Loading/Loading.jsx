import React from 'react'
import styles from './styles.css'

export default function Loading(){

return(
    <div className='loadingContainer' key={styles+1}>
        <img src='https://c.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif' alt='Loading'/>
        <p>Loading ...</p>
    </div>
)

}