import React from "react";
import "./CartModal.css";
import ModalMealItem from "./ModalMealItem";
function CartModal(props) {
  return (
    <React.Fragment>
      <div className="cart-modal-background" onClick={props.onHideModal}></div>
      <div className="cart-modal">
        <ul className="cart-modal-list">
          {props.meals.map((meal) =>
            props.cart[meal.name] ? (
              <ModalMealItem
                key={meal.id}
                meal={meal}
                quantity={props.cart[meal.name]}
                onAddItem={props.onAddItem}
              ></ModalMealItem>
            ) : (
              <React.Fragment key={meal.id}></React.Fragment>
            )
          )}
        </ul>

        <div className="cart-modal-conclusion">
          <h2>total amount</h2>
          <h2>{props.totalPayment.toFixed(2)}</h2>
        </div>
        <div className="cart-modal-actions">
          <button
            className="cart-modal-actions-cancel"
            onClick={props.onHideModal}
          >
            cancel
          </button>
          <button className="cart-modal-actions-order">Order</button>
        </div>
      </div>{" "}
    </React.Fragment>
  );
}
export default CartModal;
