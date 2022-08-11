
const DisplayCard = (props) => {
    const { prod, handler } = props

    return (
        <div className="product-card">
            <img src={prod.link}></img>
            <p className="prod-name">{prod.name}</p>
            <p>${prod.price}</p>
            <button data-price={prod.price} onClick={handler}>Add to card</button>
        </div>


    )

}

export default DisplayCard