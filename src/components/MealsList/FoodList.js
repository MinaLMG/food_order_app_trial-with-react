import Card from "../UI/Card";
import FoodItem from "./FoodItem";
import "./FoodList.css";
function FoodList(props) {
  return (
    <div className="food-list-ul">
      <ul>
        {props.meals.map((meal) => (
          <FoodItem
            meal={meal}
            cart={props.cart}
            key={meal.id}
            onAddItem={props.onAddItem}
          ></FoodItem>
        ))}
      </ul>
    </div>
  );
}
export default FoodList;
