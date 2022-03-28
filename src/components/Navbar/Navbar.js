import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">Joov Tek</Link>
        <Link to="/blogs">Explore</Link>
        <Link to="/create">Write</Link>
      </div>
      <div className="sign">
        <Link to="/signin" className="signin">Sign in</Link>
        <Link to="/singup" className="signup">Sign up</Link>
      </div>
    </nav>
  );
}

export default Navbar;