import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar--container">
    <nav className="navbar">
      
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/counter">CUSTOM COUNTER</Link>
        </li>
        <li>
          <Link to="/404 - Not Found.">TEST</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
    </div>
  );
}