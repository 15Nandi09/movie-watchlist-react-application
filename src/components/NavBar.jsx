import { Link } from "react-router-dom";
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
      <div className="navbar-brand">
        <Link to="/">Movie WatchList</Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>

        {/* Show Login / Signup if NOT logged in */}
        {!user && (
          <>
            <Link to="/signup" className="nav-link auth-btn">Signup</Link>
            <Link to="/login" className="nav-link auth-btn">Login</Link>
          </>
        )}

        {/* Show Logout if logged in */}
        {user && (
          <button onClick={handleLogout} className="nav-link logout-btn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
