import { Outlet, Link } from "react-router-dom";


const DisplayHeader = () => {
  return (
    <>
      <div className="head-wrapper">
        <Link className="text-link text" to="/">
          <div className="head-left">SHOP NAME</div>
        </Link>
        <div className="head-right">
          <Link className="text-link text" to="/shop">
            <div>SHOP</div>
          </Link>
          <Link className="text-link" to='/cart'>
            <span class="material-symbols-outlined size-35">
              shopping_cart
            </span>
          </Link>
        </div>
      </div>
      <Outlet />
    </>

  )
}

export default DisplayHeader