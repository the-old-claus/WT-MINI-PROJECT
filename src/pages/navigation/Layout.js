import { Outlet, Link } from "react-router-dom";
import './Layout.css'


const Layout = ({isLoggedin}) => {
  return (
    <>{(isLoggedin)?(
      <>
      <nav style = {{margin : 0}}>
          <ul className="menu">
            <li style = {{backgroundColor : "#4a7766"}}>
              <Link to="/">Dashboard</Link>
            </li>
            <li style = {{backgroundColor : "black"}}>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
        </>
      ):(
        <>
        <nav style = {{margin : 0}} >
          <ul className="menu">
            <li style = {{backgroundColor : "#4a7766"}}>
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
}
    </>
  )
};

export default Layout;