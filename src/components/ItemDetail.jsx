import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={item.img} alt={item.nombre} />
                </div>
                <div className="col-md-8">
                    <h1 className="my-4">{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <h5>${item.precio}</h5>
                    <div className="row mt-5 mx-3">
                        <ItemCount stock={item.cantidad}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;