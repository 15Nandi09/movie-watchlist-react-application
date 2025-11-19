import { Link, NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { auth } from "../services/firebase";
import { useMovieContext } from "../contexts/MovieContext";

function NavBar() {
  const { user } = useMovieContext();

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <nav className="navbar">
      {/* Brand / Logo */}
      <div className="navbar-brand">
        <Link to="/">Movie WatchList</Link>
      </div>

      {/* Navigation + Auth Buttons */}
      <div className="navbar-links">

        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/favorites" className="nav-link">Favorites</NavLink>

        {/* If NOT logged in → show Login + Signup */}
        {!user && (
          <>
            <NavLink to="/signup" className="auth-btn">Signup</NavLink>
            <NavLink to="/login" className="auth-btn">Login</NavLink>
          </>
        )}

        {/* If logged in → show Logout */}
        {user && (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
