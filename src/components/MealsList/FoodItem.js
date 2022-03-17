import { useState } from "react";
import "./FoodItem.css";
function FoodItem(props) {
  const [itemQuantity, setItemQuantity] = useState(0);
  function changeItemQuantity(event) {
    setItemQuantity(event.target.value);
  }
  function addItem() {
    props.onAddItem(
      props.meal.name,
      parseInt(itemQuantity),
      parseFloat(props.meal.price)
    );
  }
  return (
    <li className="food-item">
      <div className="food-item-details">
        <div className="food-item-details-name">{props.meal.name}</div>
        <div className="food-item-details-discription">
          {props.meal.description}
        </div>
        <div className="food-item-details-price">{props.meal.price}</div>
      </div>
      <div className="food-item-actions">
        <div>
          <span className="food-item-actions-amount">amount</span>
          <input
            className="food-item-actions-value"
            type="number"
            value={itemQuantity}
            onChange={changeItemQuantity}
          ></input>
        </div>
        <div>
          <button onClick={addItem}>+Add</button>
        </div>
      </div>
    </li>
  );
}
export default FoodItem;
