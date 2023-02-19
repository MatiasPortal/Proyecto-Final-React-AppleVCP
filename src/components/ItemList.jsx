import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row mt-5">
            {items.map(item => (
            <div className="col-md-3" key={item.id}>
                <Item item={item}/>
            </div>
        ))}
        </div>
    )
}

export default ItemList;