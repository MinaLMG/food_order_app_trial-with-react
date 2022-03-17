import React from "react";
import "./ModalMealItem.css";
function ModalMealItem(props) {
  function addItem() {
    props.onAddItem(props.meal.name, 1, parseFloat(props.meal.price));
  }
  function removeItem() {
    props.onAddItem(props.meal.name, -1, parseFloat(props.meal.price));
  }

  return (
    <React.Fragment>
      <li className="modal-meal-item">
        <div>
          <h2> {props.meal.name}</h2>
          <span className="modal-meal-item-price">$ {props.meal.price}</span>
          <span className="modal-meal-item-quantity">x {props.quantity}</span>
        </div>
        <div className="modal-meal-item-actions">
          <div className=" button" onClick={addItem}>
            +
          </div>
          <div className=" button" onClick={removeItem}>
            -
          </div>
        </div>
      </li>
      <hr className="hr"></hr>
    </React.Fragment>
  );
}
export default ModalMealItem;
