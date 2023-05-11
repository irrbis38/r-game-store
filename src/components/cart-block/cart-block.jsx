import { BiCartAlt } from "react-icons/bi";

import "./cart-block.css";

export const CartBlock = () => {
  return (
    <div className="cart-block">
      <BiCartAlt className="cart-block__icon" size={25} />
      <span className="cart__total-price">123</span>
    </div>
  );
};
