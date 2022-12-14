import DisplayCard from "./DisplayCard"

const DisplayShop = (props) => {
    const { items, handler, test } = props
    return (
        <div className="shop-wrapper">
            <div className="navbar">
                <div className="nav-items">SHOES</div>
                <div className="nav-items"> SHIRTS</div>
                <div className="nav-items"> PANTS</div>
            </div>
            <div className="shop-content">
                {items.map((item) => {
                    return <DisplayCard prod={item} handler={handler} key={item.id} />
                })}
            </div>
            {test ? <span className="notify">Added {test} to cart</span> : null}

        </div>
    )
}

export default DisplayShop