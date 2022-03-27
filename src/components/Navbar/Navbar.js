import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Joov Tek</Link>
      <div className="links">
        <Link to="/create" className="create-button">New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;