import DisplayProduct from "./DisplayProduct"

const DisplayCart = (props) => {
    const { data, price, handler } = props
    return (
        <>
            {price ? <> <div className="cart-wrapper">
                {data.map((item) => {
                    return <DisplayProduct key={item.id} data={item} handler={handler} />
                })}
            </div>
                <div className="cart-foot">
                    <p className="price">TOTAL: {price} </p>
                    <button className="checkout-btn">CHECKOUT</button>
                </div>
            </> : <div className="empty-wrapper">
                <div className="target">
                    <p>cart is empty</p>
                    <span className="material-symbols-sharp size-55">
                        shopping_bag
                    </span>
                </div>

            </div>}

        </>
    )
}

export default DisplayCart