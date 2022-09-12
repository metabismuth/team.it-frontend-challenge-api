import { Link } from "react-router-dom";
import "./Header.sass";

const Header = () => {
  return (
    <Link to="/" id="topheader">
      <header>
        <h1>The Pumpkin Patch</h1>
      </header>
    </Link>
  );
}

export default Header;
