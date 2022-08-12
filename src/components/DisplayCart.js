import DisplayProduct from "./DisplayProduct"

const DisplayCart = (props) => {
    const { data, price } = props
    return (
        <>
            <div className="cart-wrapper">
                {data.map((item) => {
                    return <DisplayProduct key={item.id} data={item} />
                })}
            </div>
            <div className="cart-foot">TOTAL ORDER = {price} </div>
        </>
    )
}

export default DisplayCart