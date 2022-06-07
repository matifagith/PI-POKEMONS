import React from "react";
import styles from './styles.css'

export default function Paginate({pokesPerPage, pokesAmount, paginateFunction}){
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pokesAmount/pokesPerPage); i++) { // 40/12 = 3.3 --> 4
        pageNumbers.push(i)        
    }

    return(
        <div className="paginate" key={styles+1}>
            <ul>
                {pageNumbers.length && pageNumbers.map(page =>{
                    return (
                    <li key={page} onClick={()=>paginateFunction(page)} id={page}>
                        <a  href='#'>{page}</a>
                    </li>)
                })}
            </ul>
        </div> 
    )
}



    