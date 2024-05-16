import React from 'react'
import { NavBar } from './NavBar'
import { Carrito } from './Carrito'

export const header = () => {
    return (
        <header className='header'>
            <h1>Ecoder</h1>
            <NavBar />
            <Carrito />
        </header>
    )
}
