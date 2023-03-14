import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import cross from "./assets/x.svg"
import payments from "./assets/payments.jpg"
import { useContext } from "react";

const Cart = () => {
    const {carrito, removeItem, cantCarrito, clear, sumaCarrito} = useContext(CartContext);

    if(cantCarrito() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="mt-5 mb-4">¡NO HAY PRODUCTOS AGREGADOS A TU CARRITO!</h1>
                        <h5 className="mb-5 mx-4">Vuelve a la página principal y encuentra tu producto favorito.</h5>
                        <Link to={"/"}><button className="my-5 mx-5 agregarCarrito">Volver a pagina principal</button></Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="mt-5">Tu carrito</h1>
                        <p className="mx-4">TOTAL: ({cantCarrito()} productos) <b>${sumaCarrito()}</b></p>
                        <table className="table my-5">
                            <tr className="border-bottom">
                                <th width="20%"></th>
                                <th scope="col" width="20%">Nombre</th>
                                <th scope="col" className="text-center" width="20%">Cantidad</th>
                                <th scope="col" className="text-center" width="20%">Precio</th>
                                <th className="text-center" width="20%" height="60px"><button type="button" className="btn btn-danger bg-danger" onClick={() => {clear()}}>Limpiar Carrito</button></th>
                            </tr>
                            {
                                carrito.map(item => (
                                    <tr className="border-bottom" key={item.idProducto} >
                                        <td><img src={item.img} alt={item.nombre} width={130} /></td>
                                        <td>{item.nombre}</td>
                                        <td className="text-center">{item.quantity}</td>
                                        <td className="text-center">${item.precio}</td>
                                        <td className="text-center"><Link onClick={() => {removeItem(item.idProducto)}} title="Eliminar" ><img src={cross} alt="eliminar" width={30} className=" border border-2 rounded border-danger"/></Link></td>
                                    </tr>
                                    ))
                            }
                            <tr>
                                <td colSpan={3}></td>
                                <td className="text-center">Total a Pagar <b>${sumaCarrito()}</b></td>
                                <td className="text-center" height="90px"><Link to={"/finalizar-compra"}><button className="agregarCarrito">Finalizar compra</button></Link></td>
                            </tr>
                            <tr>
                                <td colSpan={5} className="text-end"><img src={payments} width="300vw" alt="payments" /></td>
                            </tr>
                        </table>
                    </div>
                </div>
        </div>
    )
}

export default Cart;

