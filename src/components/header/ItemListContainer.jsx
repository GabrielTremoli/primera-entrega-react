import React, { useEffect, useState } from "react";
import data from "../../data/productos.json";
import { itemlist } from './ItemList';
export const ItemListContainer = () => {

    let { categoryId } = useParams ();

    let [productos, setProductos] = useState([])

    let [titulo, setTitulo] = useState("Productos")

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 1000);
        }
        )
    }

}

useEffect(() => {

    pedirProductos()
        .then((res) => {
            setProductos(res);
            if (!categoryId) {
                setProductos(res);
            } else {
                setTitulo(categories.find((cat) => cat.id === categoryId) .nombre);
                res.filter((prod) => prod.categoia.id === categoryId);    
            }  
        }
        )
    }, [categoryId]);

    return(
        <div className="item-list-container">
            <h1>{titulo}</h1>
            <itemlist productos={productos} />
        </div>
    )
