import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";
import ProductosJSON from "./json/productos.json"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const promise = new Promise((resolve) => {
            setTimeout (() => {
                resolve(ProductosJSON.find(prod => prod.id === parseInt(id)));
            }, 2000);
        })
        promise.then((resp) => {
            setItem(resp)
        })
    }, [id]);

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;