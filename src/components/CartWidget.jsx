
const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn btn-white position-relative my-3">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-black">3</span>
            </button>
        </div>
    )
}

export default CartWidget;