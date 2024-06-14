import React from "react";
import { Item } from "./Item"

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);
    let error = false;

    useEffect(() => {
        setTimeout(() => {
            setProducto(data.find((prod) => prod.id === parseInt(itemId)));
        }, 1000);
    }, [itemId]);

    if (producto) {
        return <ItemDetail producto={producto} />
    } else if (error) {
        return <div>Hubo un error</div>
    } else {
        return <div>Cargando productos...</div>
    }
}

export default ItemDetailContainer