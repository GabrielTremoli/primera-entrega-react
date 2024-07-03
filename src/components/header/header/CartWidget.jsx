import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext.jsx'

export const CartWidget = () => {

    const { calcularCantidad } = useContext(CartContext);

    return (
        <Link className="carrito" to="/carrito">
            <CartCheck color="red" /> {calcularCantidad()}
        </Link>
    )
}