
const DisplayProduct = (props) => {
    const { data, handler } = props
    return (
        <div className="cart-product-display">
            <img className="cart-img" src={data.link} />
            <div className="product-info">
                <div>{data.name}</div>
                <div>{data.price * data.qty} USD </div>
                <div className="quant-wrapper">
                    <button className="quant-btn add">
                        <span className="material-symbols-outlined" onClick={() => handler(data.id, true)}>
                            add
                        </span>
                    </button>
                    <div>{data.qty}</div>
                    <button className="quant-btn minus">
                        <span className="material-symbols-outlined" onClick={() => handler(data.id, false)}>
                            remove
                        </span>
                    </button>
                </div>

            </div>
        </div >
    )
}

export default DisplayProduct