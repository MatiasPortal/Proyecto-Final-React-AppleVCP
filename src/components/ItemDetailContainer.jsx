import {doc, getDoc, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

/* import ProductosJSON from "./json/productos.json" */


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loader, setLoader] = useState(true);
    const {id} = useParams();

    /* useEffect(() => {
        const promise = new Promise((resolve) => {
            setTimeout (() => {
                resolve(ProductosJSON.find(prod => prod.idProducto === parseInt(idProducto)));
            }, 2000);
        })
        promise.then((resp) => {
            setItem(resp)
        })
    }, [idProducto]); */

    useEffect(() => {
        const db = getFirestore()
        const document = doc(db, "productos", id);
        getDoc(document).then(prod => {
            setItem({id:prod.id, ...prod.data()})
            setLoader(false);
        })
    }, [id])

    return (
        <div>
            {loader ? <Loader/> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;