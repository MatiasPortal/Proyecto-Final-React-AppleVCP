import { Link, NavLink } from "react-router-dom";

import CartWidget from "./CartWidget";
import TopNav from "./TopNav";
import logo from "./assets/apple-logo.svg"

const Encabezado = () => {
    return (
        <div className="container-fluid border-bottom shadow">
            <div className="row">
                <TopNav/>
                <div className="col-md-10 mt-2">
                <nav className="navbar navbar-expand-lg bg-body">
                    <div className="container-fluid ">
                        <Link className="navbar-brand" to={"/"}><img src={logo} width={25} alt="logo" className="logoImg"/>AppleVCP</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-link" aria-current="page" activeClassName={"active"} to={"/"}>Home</NavLink>
                                <NavLink className="nav-link" activeClassName={"active"} to={"/category/iphones"}>Iphones</NavLink>
                                <NavLink className="nav-link" activeClassName={"active"} to={"/category/accesorios"}>Accesorios</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
                </div>
                <div className="col-md-2 d-flex align-items-center mt-1">
                    <CartWidget/>
                </div>
            </div>
        </div>
    )
}

export default Encabezado;