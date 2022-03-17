import CartIcon from "./CartIcon";
import "./Header.css";

function Header(props) {
  return (
    <header className="header-container">
      <div className="header-name"> React Meals </div>
      <div className="header-cart" onClick={props.onShowModal}>
        {" "}
        <CartIcon className="header-cart-icon"></CartIcon>
        <span>Your cart</span>
        <span className="haeder-cart-num">{props.cartNum}</span>
      </div>
    </header>
  );
}
export default Header;
