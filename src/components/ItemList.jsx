import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row mt-5">
            {items.map(item => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                <Item item={item}/>
            </div>
        ))}
        </div>
    )
}

export default ItemList;