import React from "react";
import './Header.css'
import logo from '../assets/logomeuclima.png'
import Search from "../Search/Search";

import {FaMapMarkerAlt} from 'react-icons/fa'

function Header() {
    return(
        <div className="container">
            <header>
                <img src={logo} alt="" />
                <Search/>
                 
            </header>

            <form>
                <div  className="result">
                    <h1>Quixeramobim <FaMapMarkerAlt/></h1>
                    <div className="region">
                        <p>ceara,</p>
                        <p>brasil</p>
                    </div>

                    <div className="temp">
                        <h1>30</h1>
                        <p className="cel">°C</p>
                    </div>

                    <h2>Nublado</h2>
                </div>

                <div>
                <div className="description">
                        
                        <p className="wind">VENTO</p>
                        <p>15 km/h</p>
                    </div>

                    <div className="description">
                        <p className="moisture">UMIDADE</p>
                        <p>94%</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Header;