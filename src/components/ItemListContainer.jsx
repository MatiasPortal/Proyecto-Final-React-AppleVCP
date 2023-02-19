import ItemList from "./ItemList";
import ProductosJSON from "./json/productos.json"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? ProductosJSON.filter(prod => prod.categoria === id) : ProductosJSON)
            }, 2000);
        });
        promise.then((resp) => {
            setItems(resp);
        })

    }, [id]);

    return (
        <div className="container pt-5 ">
            <h1 className="pt-5">Nuevo ingreso de productos</h1>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;