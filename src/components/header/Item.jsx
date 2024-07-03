import React from "react"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext.jsx'
export const Item = ( {producto} ) => {

    const {agregarAlCarrito} = useContext(CartContext);

    return (
        <div className="producto">
            <img src={producto.imagen}/>
            <h2>{producto.nombre}</h2>
            <p>${producto.precio}</p>
            <p>{producto.descripcion}</p>
            <Link to={`/Item/%{producto.id}`}>Ver mas</Link>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
        </div>
    )
}