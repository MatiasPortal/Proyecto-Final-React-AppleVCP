import { addDoc, collection, getFirestore } from "firebase/firestore";

import { CartContext } from "./CartContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";

const FinalizarCompra = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [provincia, setProvincia] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {carrito, sumaCarrito, clear} = useContext(CartContext);
    const [error, setError] = useState(false);

    const generateOrder = () => {
        const buyer = {name:nombre, lastName:apellido, province:provincia, city:ciudad, email:email, phone:telefono};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}/${fecha.getMonth() + 1}/${fecha.getDate()} - ${fecha.getHours()}:${fecha.getMinutes()}`;
        const order = {buyer:buyer, items:{carrito}, date:date, total:sumaCarrito()}
        

        if (nombre.length === 0 || apellido.length === 0 || provincia.length === 0 || ciudad.length === 0 || email.length === 0 || telefono.length === 0) {
            setError(true)
            return false;
        }


        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(data => {
            setOrderId(data.id);
            clear();
        })
    }

    return (
        <div className="container">
            <div className="row">
            <h1 className="m-5">¡Estas a un paso de finalizar tu compra!</h1>
                <div className="col-md-4 my-3">
                    <h3 className="mx-3 mb-3">Ingresa tus datos</h3>
                    <form>
                        <div className="row mb-4">
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label">Nombre</label>
                                <input type="text" id="nombre" className="form-control"  onInput={(e) => {setNombre(e.target.value)}}/>
                                {error&&nombre.length<=0 ? <div class="alert alert-danger-form alert-danger" role="alert">
                                            Ingresa un nombre.
                                        </div> : ""}
                                
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label">Apellido</label>
                                <input type="text" id="apellido" className="form-control"  onInput={(e) => {setApellido(e.target.value)}}/>
                                {error&&apellido.length<=0 ? <div class="alert alert-danger-form alert-danger" role="alert">
                                            Ingresa un apellido.
                                        </div> : ""}
                            </div>
                            </div>
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" >Provincia</label>
                            <input type="text" id="provincia" className="form-control"  onInput={(e) => {setProvincia(e.target.value)}}/>
                            {error&&provincia.length<=0 ?    <div class="alert alert-danger-form alert-danger" role="alert">
                                            Ingresa una provincia.
                                        </div> : ""}
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label">Ciudad</label>
                            <input type="text" id="ciudad" className="form-control"  onInput={(e) => {setCiudad(e.target.value)}}/>
                            {error&&ciudad.length<=0 ?    <div class="alert alert-danger-form alert-danger" role="alert">
                                            Ingresa una ciudad.
                                        </div> : ""}
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label">Email</label>
                            <input type="email" id="email" className="form-control"  onInput={(e) => {setEmail(e.target.value)}}/>
                            {error&&email.length<=0 ?    <div class="alert alert-danger-form alert-danger" role="alert">
                                            Ingresa un email.
                                        </div> : ""}
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label">Número de teléfono</label>
                            <input type="number" id="telefono" className="form-control" onInput={(e) => {setTelefono(e.target.value)}}/>
                            {error&&telefono.length<=0 ?    <div class="alert alert-danger-form alert-danger" role="alert">
                                            Ingresa un teléfono.
                                        </div> : ""}
                        </div>


                        {<button type="button" className="agregarCarrito mb-4" onClick={generateOrder}>Realizar Pedido</button>}
                    </form>
                </div>
                <div className="col-md-1">

                </div>
                <div className="col-md-7 text-center mt-4">
                    <h5>DATOS DEL PEDIDO</h5>
                    <table className="table mt-4">
                    {
                            carrito.map(item => (
                                <tr className="border-bottom" key={item.idProducto} >
                                    <td><img src={item.img} alt={item.nombre} width={130} /></td>
                                    <td>{item.nombre}</td>
                                    <td className="text-center">{item.quantity}</td>
                                    <td className="text-center">${item.precio}</td>
                                </tr>
                                ))
                            }
                    </table>
                </div>
            </div>
            {orderId ? <Navigate to={"/order/" + orderId}/> : "" }
        </div>
    )
}

export default FinalizarCompra;

