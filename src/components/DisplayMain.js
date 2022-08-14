import img from './images/shoes/background/multi.jpg'
import { Link } from "react-router-dom";

const DisplayMain = () => {
    return (
        <div className="main-wrapper"
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <Link className="text-link text" to="/shop">
                <div className='shop-link'>SHOP NOW</div>
            </Link>

        </div>
    )
}

export default DisplayMain