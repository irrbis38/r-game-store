import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/">Game Store</Link>
        <div className="header__cart">Cart</div>
      </div>
    </header>
  );
};
