import { Outlet, Link } from "react-router-dom";
import './index.css'

const Layout = () => {
  return (
    <div className="layout">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/d2f">2d-f</Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;