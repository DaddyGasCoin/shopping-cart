
const DisplayCard = (props) => {
    const { prod } = props

    return (
        <div className="product-card">
            <img src={prod.link}></img>
            <p className="prod-name">{prod.name}</p>
        </div>


    )

}

export default DisplayCard