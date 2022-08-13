
const DisplayCard = (props) => {
    const { prod, handler } = props

    return (
        <div className="product-card">
            <img src={prod.link}></img>
            <p className="prod-name">{prod.name}</p>
            <p>{prod.price} USD</p>
            <button className="add-cart" data-price={prod.price} onClick={handler}
                data-id={prod.id} data-src={prod.link} data-name={prod.name}>Add to cart</button>
        </div>


    )

}

export default DisplayCard