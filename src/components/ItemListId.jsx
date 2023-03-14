import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";

import ItemList from "./ItemList";
import Loader from "./Loader";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ItemListId = () => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const {id} = useParams();


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
        <div className="container pt-5 ">
            {loader ? <Loader/> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListId;