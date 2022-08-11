import DisplayCard from "./DisplayCard"

const DisplayShop = (props) => {
    const { items, handler } = props
    return (
        <div className="shop-wrapper">
            <div className="navbar">
                <div className="nav-items">item 1</div>
                <div className="nav-items"> item 2</div>
                <div className="nav-items"> item 3</div>
            </div>
            <div className="shop-content">
                {items.map((item) => {
                    return <DisplayCard prod={item} handler={handler} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default DisplayShop