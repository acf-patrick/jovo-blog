import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Joov Tek</Link>
      <div className="links">
        <Link to="/blogs">Explore</Link>
        <Link to="/create">Write</Link>
        <Link to="/signin" className="signin">Sign in</Link>
        <Link to="/singup" className="signup">Sign up</Link>
      </div>
    </nav>
  );
}

export default Navbar;