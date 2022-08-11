import { Outlet, Link } from "react-router-dom";


const DisplayHeader = () => {
  return (
    <>
      <div className="head-wrapper">
        <Link to="/">
          <div>SHOP NAME</div>
        </Link>
        <div className="head-right">
          <Link to="/shop">
            <div>SHOP</div>
          </Link>
          <div>cart</div>
        </div>
      </div>
      <Outlet />
    </>

  )
}

export default DisplayHeader