import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {

    return(
    <div>
        <header>
            <div className="Wrapper">
        <div class="logo"> Andres Stivens Cortes Ponce</div>        
        <NavLink className="nav" to="/Contactame">Contactame</NavLink>
        <NavLink className="navi" to="/Blog">Blog</NavLink>
       <NavLink className="navi" to="/Proyectos">Proyectos</NavLink>
       <NavLink className="navi" to="/Sobre">Sobre mi</NavLink>
       <NavLink className="navi" to="/">Inicio</NavLink>
     
            </div>
        </header>

    </div>
           )

}

