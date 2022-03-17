import MealsSummary from "./MealsSummary";
import "./Photo.css";
function Photo() {
  return (
    <div className="photo-container">
      <img
        className="photo-background"
        src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
      ></img>

      <div className="photo-paragraph">
        <MealsSummary></MealsSummary>
      </div>
    </div>
  );
}
export default Photo;
