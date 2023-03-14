import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

/* import { CartContext } from './CartContext'; */

/* import { useContext } from 'react'; */



const ItemCount = ({stock, onAdd}) => {
    const [cant, setCant] = useState(1);
    const [cantStock, setCantStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(false)
    
    const alertAgregar = () => {
        toast.success('¡Agregaste el producto al carrito!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    const alertNoStock = () => {
        toast.error('No hay mas stock del producto.', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    const aumentarStock = () => {
        if(cant < stock) {
            setCant(cant + 1);
        }
    }

    const bajarStock = () => {
        if(cant > 1) {
            setCant(cant - 1);
        }
    }

    const addtoCart = () => {
        if (cantStock >= cant) {
            setCantStock(cantStock - cant);
            setCant(stock - cant);
            alertAgregar();
            onAdd(cant)
            setItemAdd(true);
        }else {
            alertNoStock()
        }
    }

    useEffect(() => {
        setCantStock(stock);
    }, [stock]);

    return (
        <div classNameName="container">
            <div>
                <h6>Stock disponible: {cantStock}</h6>
            </div>
            <div className="btn-group me-4" role="group" >
                <button type="button" className="btn btnCount border border-dark border-2" onClick={bajarStock}>-</button>
                <button type="button" className="btn btnCount border border-dark border-2" disabled>{cant}</button>
                <button type="button" className="btn btnCount border border-dark border-2" onClick={aumentarStock}>+</button>
            </div>
            {itemAdd ? <Link to={"/cart"} className="btn agregarCarrito">Terminar compra</Link> : <button className="agregarCarrito" onClick={addtoCart}>Agregar a carrito</button>}
            <ToastContainer/>
        </div>
    )
}

export default ItemCount;