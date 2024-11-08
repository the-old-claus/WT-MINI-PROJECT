import { Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
      <nav style = {{margin : 0}}>
        <ul className="menu">
          <li style = {{backgroundColor : "blue"}}>
            <Link to="/">Home</Link>
          </li>
          <li style = {{backgroundColor : "black"}}>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;