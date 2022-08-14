import DisplayProduct from "./DisplayProduct"

const DisplayCart = (props) => {
    const { data, price, handler } = props
    return (
        <>
            <div className="cart-wrapper">
                {data.map((item) => {
                    return <DisplayProduct key={item.id} data={item} handler={handler} />
                })}
            </div>
            <div className="cart-foot">
                <p className="price">TOTAL: {price} </p>
                <button className="checkout-btn">CHECKOUT</button>
            </div>
        </>
    )
}

export default DisplayCart