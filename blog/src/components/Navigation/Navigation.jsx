import { Link } from "react-router-dom";
import "./Navigation.sass";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/picz">Photos</Link></li>
        <li><Link to="/clowns">Clown Photos</Link></li>
        <li><Link to="/frogs">Frog Festival 2023</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
