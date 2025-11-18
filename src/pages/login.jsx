import { useState } from "react";
import { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "../css/LoginSignup.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">LOGIN</h2>

        <form onSubmit={handleLogin}>
          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="remember-row">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>

          <button className="auth-btn" type="submit">
            LOGIN
          </button>
        </form>

        <div className="auth-divider">Or login with</div>

        <div className="social-buttons">
          <button className="social-btn">Facebook</button>
          <button className="social-btn">Google</button>
        </div>

        <div className="auth-bottom">
          Not a member? <Link to="/signup">Sign up now</Link>
        </div>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </div>
    </div>
  );
}

export default Login;
