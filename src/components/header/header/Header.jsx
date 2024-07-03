import React from 'react'
import { NavBar } from './NavBar.jsx'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget.jsx'
export const header = () => {
    return(
        <header className="header">
            <Link rel="/"><h1>Ecoder</h1></Link> 
            <NavBar />
            <CartWidget />
            <Carrito numerito={props.numerito}/>
        </header>
    )
}
