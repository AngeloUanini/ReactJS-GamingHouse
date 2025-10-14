import { Link } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Gaming House</Link>

      <ul className="navbar-links">
        <Link to="/categoria/perifericos">Periféricos</Link>
        <Link to="/categoria/placas">Placas de Video</Link>
        <Link to="/categoria/gabinetes">Gabinetes</Link>
      </ul>

      <CartWidget />
    </nav>
  );
}
