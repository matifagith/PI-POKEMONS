import React from "react";

export default function Paginate({pokesPerPage, pokesAmount, paginateFunction}){
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pokesAmount/pokesPerPage); i++) { // 40/12 = 3.3 --> 4
        pageNumbers.push(i)        
    }

    return(
        <nav>
            <ul>
                {pageNumbers ? pageNumbers.map(page =>{
                    return (
                    <li key={page}>
                        <a onClick={()=>paginateFunction(page)} href='*'>{page}</a>
                    </li>)
                }) : 
                <div>hola</div>}
            </ul>
        </nav> 
    )
    }



    