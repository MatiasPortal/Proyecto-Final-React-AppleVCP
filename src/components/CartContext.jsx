import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (item, quantity) => {
        if(isInCart(item.idProducto)) {
            let position = carrito.findIndex(prod => prod.idProducto === item.idProducto);
            carrito[position].quantity += quantity;
            setCarrito([...carrito]);
        } else {
            setCarrito([...carrito, {...item, quantity:quantity}])
        }
    }

    const removeItem = (itemId) => {
        const prods = carrito.filter(item => item.idProducto !== itemId);
        setCarrito([...prods]);
    }

    const clear = () => {
        setCarrito([]);
    }

    const isInCart = (itemId) => {
        return carrito.some(item => item.idProducto === itemId);
    }

    const cantCarrito = () => {
        return carrito.reduce((accum, item) => accum += item.quantity, 0)
    }

    const sumaCarrito = () => {
        return carrito.reduce((accum, item) => accum += item.quantity * item.precio, 0)
    }

    return (
        <CartContext.Provider value={{carrito, addItem, removeItem, clear, cantCarrito, sumaCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;