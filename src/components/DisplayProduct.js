
const DisplayProduct = (props) => {
    const { data } = props
    return (
        <div className="cart-product-display">
            <img src={data.link} />
            <div className="product-info">
                <div> name {data.name}</div>
                <div> price {data.price}</div>
                <div> quantity {data.qty}</div>
            </div>

        </div>
    )
}

export default DisplayProduct