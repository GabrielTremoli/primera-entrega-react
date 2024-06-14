import React from 'react'
import { NavBar } from '../NavBar'
import { Carrito } from './Carrito'
import { link } from 'react-router-dom'

export const header = () => {
    return (
        <header className='header'>
            <link to="/"><h1>Ecoder</h1></link>
            <NavBar />
            <Carrito numerito={props.numerito}/>
        </header>
    )
}
