import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";

import ItemList from "./ItemList";
import Loader from "./Loader";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

/* import ProductosJSON from "./json/productos.json" */


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const {id} = useParams();

    //SUBIR PRODUCTOS A TRAVES DE JSON

    /* useEffect(() => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(idProducto ? ProductosJSON.filter(prod => prod.categoria === idProducto) : ProductosJSON)
            }, 2000);
        });
        promise.then((resp) => {
            setItems(resp);
        })

    }, [idProducto]); */



    //SUBIR LOS PRODUCTOS DEL JSON A FIRESTORE.

    /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");

        ProductosJSON.forEach(item => {
            addDoc(itemsCollection, item);
        });

        console.log("Se agregaron los productos")
    }, []); */

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(filter).then(prods => {
            setItems(prods.docs.map(prod => ({id:prod.id, ...prod.data()})))
            setLoader(false)
        });
    }, [id]);


    return (
        <div className="container pt-5">
            <h1 className="mt-5" data-aos="fade-right">Nuevos ingresos en AppleVCP</h1>
            {loader ? <Loader/> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;

