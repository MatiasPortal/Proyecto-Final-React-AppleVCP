import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const CartWidget = () => {
    const {cantCarrito} = useContext(CartContext)

    return (cantCarrito() > 0) ?
        <div>
            <Link to={"/cart"} type="button" className="agregarCarrito position-relative my-3">
            <i className="fa-solid fa-cart-shopping px-1"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black border border-2 text-white">{cantCarrito()}</span>
            </Link>
        </div> : "";
}

export default CartWidget;