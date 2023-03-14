import { Link, useParams } from "react-router-dom";

import logo from "../components/assets/apple-logo.svg"

const Order = () => {
    const {orderId} = useParams();

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    {orderId ? <div class="alert text-center" role="alert"><h3 className="m-5" data-aos="fade-down">¡Muchas gracias por su pedido!</h3>
                    <div className="alert alert-success">
                    <p className="mb-4">SE HA GENERADO UNA ORDEN DE COMPRA CON EL ID: <b>{orderId}</b></p><p>Estaremos comunicandonos con usted para finalizar la transacción.</p><p>¡Muchas gracias!</p>
                    </div>
                    </div> : ""}
                    <Link to={"/"} class="agregarCarrito">Página principal</Link>
                </div>
                <div className="col-md-12 text-end" data-aos="fade-left" data-aos-duration="2000">
                    <h2 className=" fs-1"><img src={logo} width={45} alt="logo" className="mb-3"/> AppleVCP</h2>
                </div>
            </div>
        </div>
    )
}

export default Order;