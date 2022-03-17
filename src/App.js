import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Photo from "./components/Photo/Photo";
import React, { useState } from "react";
import FoodList from "./components/MealsList/FoodList";
import CartModal from "./components/Modal/CartModal";

function App() {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const [cart, setCart] = useState({
    Sushi: 0,
    "Green Bowl": 0,
    "Barbecue Burger": 0,
    Schnitzel: 0,
  });

  const [cartNum, setCartNum] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  function AddItem(name, quantity, price) {
    const q = cart[name] + quantity;
    if (q < 0) return;
    setCart((prev) => {
      return { ...prev, [name]: q };
    });
    console.log(cart);
    setCartNum((prev) => {
      return prev + quantity;
    });
    setTotalPayment((prev) => {
      return prev + quantity * price;
    });
  }

  const [isModalShown, setIsModalShown] = useState(0);
  function showModal() {
    setIsModalShown(1);
  }
  function hideModal() {
    setIsModalShown(0);
  }
  return (
    <React.Fragment>
      {isModalShown && (
        <CartModal
          onHideModal={hideModal}
          cart={cart}
          meals={DUMMY_MEALS}
          onAddItem={AddItem}
          totalPayment={totalPayment}
        ></CartModal>
      )}
      <Header cart={cart} cartNum={cartNum} onShowModal={showModal}></Header>
      <Photo></Photo>
      <FoodList meals={DUMMY_MEALS} onAddItem={AddItem}></FoodList>
    </React.Fragment>
  );
}

export default App;
