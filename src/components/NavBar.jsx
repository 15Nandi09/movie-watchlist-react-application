import { Link, NavLink } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Create Your Own Favorite Watchlist</Link>
      </div>

      <div className="navbar-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/favorites" className="nav-link">
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
