import React from "react";
import './Search.css'

import {BsSearch} from 'react-icons/bs'


function Search() {
    return(
        <div className="search">

            <input type="text" placeholder="Pesquisar cidade"/>
            <button type="submit"> <BsSearch/> </button>

        </div>
    )
}

export default Search;