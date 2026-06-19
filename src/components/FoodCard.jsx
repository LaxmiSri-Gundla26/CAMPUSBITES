import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const FoodCard = ({ food }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="food-card">

      <div className="food-image-container">

        <img src={food.image} alt={food.name} />

        <div
          className={
            food.type === "veg"
              ? "food-type veg"
              : "food-type nonveg"
          }
        >
        </div>

      </div>

      <h3>{food.name}</h3>

      <p className="category">
        {food.category}
      </p>

      <p className="price">
        ₹{food.price}
      </p>

      <button onClick={() => addToCart(food)}>
        Add To Cart
      </button>

    </div>
  );
};

export default FoodCard;