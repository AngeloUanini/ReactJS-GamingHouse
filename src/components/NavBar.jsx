import "./NavBar.css";
import CartWidget from "./CartWidget";

export default function NavBar(){
  return (
    <nav className="navbar">
      <a href="/">Logo Tienda</a>
      <ul className="navbar-links">
        <a href="/">Perifericos</a>
        <a href="/">Placas de Video</a>
        <a href="/">Gabinetes</a>
      </ul>
      <CartWidget />
    </nav>
  )
}