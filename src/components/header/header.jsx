import { Link } from "react-router-dom";
import { CartBlock } from "../cart-block";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <Link to="/">Game Store</Link>
        </h1>
        <CartBlock />
      </div>
    </header>
  );
};
