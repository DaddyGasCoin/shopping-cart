
const DisplayProduct = (props) => {
    const { data, handler } = props
    return (
        <div className="cart-product-display">
            <img className="cart-img" src={data.link} />
            <div className="product-info">
                <div> name {data.name}</div>
                <div> price {data.price}</div>
                <div> quantity {data.qty}</div>
                <button onClick={() => handler(data.id, true)}>ADD</button>
                <button onClick={() => handler(data.id, false)}>Remove</button>
            </div>
        </div>
    )
}

export default DisplayProduct