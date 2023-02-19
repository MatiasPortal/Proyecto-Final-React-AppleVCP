import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
        <div className="card mt-4 mx-5 border-0">
            <img src={item.img} className="card-img-top" alt={item.nombre} height={205}/>
            <div className="card-body text-center">
                <h5 className="card-title fs-6">{item.nombre}</h5>
                <p className="card-text fs-6">${item.precio}</p>
            </div>
        </div>
        </Link>
    )
}

export default Item;

//MINUTOS 00:49:23 2 AFTER